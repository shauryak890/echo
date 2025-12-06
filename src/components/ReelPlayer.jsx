import React, { useEffect, useRef, useState } from 'react';

/**
 * ReelPlayer
 * - Lazy-mounts video only when visible
 * - Supports HLS (m3u8) via native or hls.js; falls back to MP4
 * - Autoplays muted in viewport, pauses when out of view
 *
 * Props:
 * - hls: string | undefined  e.g. https://res.cloudinary.com/<cloud>/video/upload/sp_auto:av1/<publicId>/playlist.m3u8
 * - mp4: string | undefined  e.g. https://res.cloudinary.com/<cloud>/video/upload/f_mp4,q_auto/<publicId>.mp4
 * - poster: string | undefined (recommended)
 * - aspectRatio: 'vertical' | 'horizontal' (default: 'horizontal')
 * - className: string (optional)
 */
export default function ReelPlayer({ hls, mp4, poster, aspectRatio = 'horizontal', className = '' }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe visibility for lazy mount and play/pause
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px', threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Attach HLS or set MP4 when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !inView) return;

    let cancelled = false;
    let hlsInstance = null;

    async function setup() {
      // Always try MP4 first for simplicity and compatibility
      if (mp4) {
        console.log('Loading MP4:', mp4);
        video.src = mp4;
        try {
          await video.play();
          console.log('MP4 playing successfully');
        } catch (e) {
          console.log('Autoplay blocked or video error:', e);
        }
        return;
      }

      // If no MP4, try HLS
      if (hls) {
        const canPlayNative = video.canPlayType('application/vnd.apple.mpegurl');
        if (canPlayNative) {
          console.log('Using native HLS support');
          video.src = hls;
          try {
            await video.play();
          } catch (e) {
            console.log('HLS playback error:', e);
          }
        } else {
          try {
            console.log('Loading hls.js for HLS support');
            const Hls = (await import('hls.js')).default;
            if (Hls.isSupported()) {
              hlsInstance = new Hls({
                maxBufferLength: 10,
                maxMaxBufferLength: 30,
                capLevelToPlayerSize: true,
                startLevel: -1
              });
              hlsInstance.loadSource(hls);
              hlsInstance.attachMedia(video);
              hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
                console.log('HLS manifest parsed, attempting playback');
                video.play().catch(() => {});
              });
              hlsRef.current = hlsInstance;
            }
          } catch (e) {
            console.log('hls.js load error:', e);
          }
        }
      }
    }

    setup();

    return () => {
      cancelled = true;
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [inView, hls, mp4]);

  // Play/Pause based on visibility
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    
    // Ensure video loops when it ends
    const handleEnded = () => {
      v.currentTime = 0;
      v.play().catch(() => {});
    };
    
    v.addEventListener('ended', handleEnded);
    
    if (inView) {
      v.muted = true; // ensure autoplay
      v.play().catch(() => {});
    } else {
      v.pause();
    }
    
    return () => {
      v.removeEventListener('ended', handleEnded);
    };
  }, [inView]);

  const aspectClass = aspectRatio === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <div ref={containerRef} className={`relative ${aspectClass} w-full overflow-hidden rounded-xl bg-black/60 ${className}`}>
      {/* Poster sits underneath; video fades in */}
      {poster && (
        <img
          src={poster}
          alt="Reel poster"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />)
      }

      {inView && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          muted
          loop
          preload="none"
          controls={false}
          poster={poster}
        />
      )}
    </div>
  );
}
