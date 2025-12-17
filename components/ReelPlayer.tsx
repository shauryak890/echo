"use client";

import { useEffect, useRef, useState } from 'react';

interface ReelPlayerProps {
  hls?: string;
  mp4?: string;
  poster?: string;
  aspectRatio?: 'vertical' | 'horizontal';
  className?: string;
}

export default function ReelPlayer({ hls, mp4, poster, aspectRatio = 'horizontal', className = '' }: ReelPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<any>(null);
  const [inView, setInView] = useState(false);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !inView) return;

    async function setup() {
      if (!video) return;
      
      if (mp4) {
        video.src = mp4;
        try {
          await video.play();
        } catch {
          // Autoplay blocked
        }
        return;
      }

      if (hls) {
        const canPlayNative = video.canPlayType('application/vnd.apple.mpegurl');
        if (canPlayNative) {
          video.src = hls;
          try {
            await video.play();
          } catch {
            // HLS playback error
          }
        } else {
          try {
            const Hls = (await import('hls.js')).default;
            if (Hls.isSupported()) {
              const hlsInstance = new Hls({
                maxBufferLength: 10,
                maxMaxBufferLength: 30,
                capLevelToPlayerSize: true,
                startLevel: -1
              });
              hlsInstance.loadSource(hls);
              hlsInstance.attachMedia(video);
              hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => {});
              });
              hlsRef.current = hlsInstance;
            }
          } catch {
            // hls.js load error
          }
        }
      }
    }

    setup();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [inView, hls, mp4]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleEnded = () => {
      v.currentTime = 0;
      v.play().catch(() => {});
    };

    v.addEventListener('ended', handleEnded);

    if (inView) {
      v.muted = true;
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
      {poster && (
        <img
          src={poster}
          alt="Reel poster"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      )}

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
