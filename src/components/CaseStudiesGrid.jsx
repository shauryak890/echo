import React, { useState, useRef, useEffect } from "react";
import ReelPlayer from "./ReelPlayer";

const CaseStudiesGrid = () => {
  const [activeFilter, setActiveFilter] = useState('reel');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const allVideos = [
    {
      id: 'reel-1',
      title: 'Sample Reel 1',
      category: 'reel',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/sample_1_j1b05r.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/sample_1_j1b05r.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/sample_1_j1b05r.mp4'
    },
    {
      id: 'reel-2',
      title: 'Reel 2',
      category: 'reel',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/c5_p3qm4j.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/c5_p3qm4j.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/c5_p3qm4j.mp4'
    },
    {
      id: 'reel-5',
      title: 'Reel 5',
      category: 'reel',
      poster: 'https://res.cloudinary.com/du6yx2h01/video/upload/so_0,f_jpg,q_auto,w_600/2426_fn_f03ieb.jpg',
      hls: 'https://res.cloudinary.com/du6yx2h01/video/upload/sp_auto/2426_fn_f03ieb.m3u8',
      mp4: 'https://res.cloudinary.com/du6yx2h01/video/upload/f_mp4,q_auto/2426_fn_f03ieb.mp4'
    },
    {
      id: 'reel-6',
      title: 'Reel 6',
      category: 'reel',
      poster: 'https://res.cloudinary.com/du6yx2h01/video/upload/so_0,f_jpg,q_auto,w_600/Ep1_Clip18_corrected_xn2szx.jpg',
      hls: 'https://res.cloudinary.com/du6yx2h01/video/upload/sp_auto/Ep1_Clip18_corrected_xn2szx.m3u8',
      mp4: 'https://res.cloudinary.com/du6yx2h01/video/upload/f_mp4,q_auto/Ep1_Clip18_corrected_xn2szx.mp4'
    },
    {
      id: 'reel-7',
      title: 'Reel 7',
      category: 'reel',
      poster: 'https://res.cloudinary.com/du6yx2h01/video/upload/so_0,f_jpg,q_auto,w_600/how_i_get_into_sales_1_fs4x89.jpg',
      hls: 'https://res.cloudinary.com/du6yx2h01/video/upload/sp_auto/how_i_get_into_sales_1_fs4x89.m3u8',
      mp4: 'https://res.cloudinary.com/du6yx2h01/video/upload/f_mp4,q_auto/how_i_get_into_sales_1_fs4x89.mp4'
    },
    {
      id: 'podcast-1',
      title: 'Podcast Episode 1',
      category: 'courses',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/fn_1_xy7wfm.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/fn_1_xy7wfm.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/fn_1_xy7wfm.mp4'
    },
    {
      id: 'podcast-2',
      title: 'EP4 Trailer',
      category: 'podcast',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/EP4_trailer_l6atpc.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/EP4_trailer_l6atpc.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/EP4_trailer_l6atpc.mp4'
    },
    {
      id: 'podcast-3',
      title: 'Podcast Episode 3',
      category: 'podcast',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/mian_hlymvc.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/mian_hlymvc.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/mian_hlymvc.mp4'
    },
    {
      id: 'longform-1',
      title: 'Long Form 1',
      category: 'longform',
      poster: 'https://res.cloudinary.com/du6yx2h01/video/upload/so_0,f_jpg,q_auto,w_600/Untitled_video_-_Made_with_Clipchamp_2_pog84m.jpg',
      hls: 'https://res.cloudinary.com/du6yx2h01/video/upload/sp_auto/Untitled_video_-_Made_with_Clipchamp_2_pog84m.m3u8',
      mp4: 'https://res.cloudinary.com/du6yx2h01/video/upload/f_mp4,q_auto/Untitled_video_-_Made_with_Clipchamp_2_pog84m.mp4'
    },
    {
      id: 'longform-2',
      title: 'Long Form 2',
      category: 'longform',
      poster: 'https://res.cloudinary.com/du6yx2h01/video/upload/so_0,f_jpg,q_auto,w_600/Untitled_video_-_Made_with_Clipchamp_1_1_spvlnf.jpg',
      hls: 'https://res.cloudinary.com/du6yx2h01/video/upload/sp_auto/Untitled_video_-_Made_with_Clipchamp_1_1_spvlnf.m3u8',
      mp4: 'https://res.cloudinary.com/du6yx2h01/video/upload/f_mp4,q_auto/Untitled_video_-_Made_with_Clipchamp_1_1_spvlnf.mp4'
    }
  ];

  const filteredVideos = allVideos.filter(video => video.category === activeFilter);

  // Items per page: 2 for horizontal content (podcast/courses/longform), 3 for vertical (reels)
  const itemsPerPage = (activeFilter === 'podcast' || activeFilter === 'courses' || activeFilter === 'longform') ? 2 : 3;

  // Reset slide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
    setDesktopPage(0);
  }, [activeFilter]);

  // Calculate total pages for desktop carousel
  const totalDesktopPages = Math.ceil(filteredVideos.length / itemsPerPage);

  // Get videos for current desktop page
  const getDesktopVideos = () => {
    const start = desktopPage * itemsPerPage;
    return filteredVideos.slice(start, start + itemsPerPage);
  };

  const nextDesktopPage = () => {
    setDesktopPage(prev => (prev + 1) % totalDesktopPages);
  };

  const prevDesktopPage = () => {
    setDesktopPage(prev => (prev - 1 + totalDesktopPages) % totalDesktopPages);
  };

  // Swipe handlers for mobile carousel
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentSlide < filteredVideos.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % filteredVideos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + filteredVideos.length) % filteredVideos.length);
  };

  return (
    <section id="our-work" className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
    <div className="mb-8 sm:mb-12 text-center px-2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white">Our Work</h2>
    </div>
    <div className="mb-6 sm:mb-8">
      {/* Filter buttons with hero-style styling */}
      <nav
        aria-label="Tabs"
        className="mx-auto w-full max-w-[400px] sm:max-w-none flex sm:justify-center items-center gap-2 sm:gap-3 overflow-x-auto px-4 py-3 rounded-2xl bg-white/5 border border-white/10 scrollbar-hide"
      >
        <button
          onClick={() => setActiveFilter('reel')}
          className={`${
            activeFilter === 'reel'
              ? 'bg-primary text-white shadow-lg shadow-primary/50'
              : 'bg-white/5 text-white/70 border-2 border-white/20 hover:bg-white/10 hover:border-white/40'
          } group relative whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold shrink-0 rounded-xl transition-all hover:scale-105 focus:outline-none`}
        >
          Reels
        </button>
        <button
          onClick={() => setActiveFilter('podcast')}
          className={`${
            activeFilter === 'podcast'
              ? 'bg-primary text-white shadow-lg shadow-primary/50'
              : 'bg-white/5 text-white/70 border-2 border-white/20 hover:bg-white/10 hover:border-white/40'
          } group relative whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold shrink-0 rounded-xl transition-all hover:scale-105 focus:outline-none`}
        >
          Podcast
        </button>
        <button
          onClick={() => setActiveFilter('longform')}
          className={`${
            activeFilter === 'longform'
              ? 'bg-primary text-white shadow-lg shadow-primary/50'
              : 'bg-white/5 text-white/70 border-2 border-white/20 hover:bg-white/10 hover:border-white/40'
          } group relative whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold shrink-0 rounded-xl transition-all hover:scale-105 focus:outline-none`}
        >
          Long Form
        </button>
        <button
          onClick={() => setActiveFilter('courses')}
          className={`${
            activeFilter === 'courses'
              ? 'bg-primary text-white shadow-lg shadow-primary/50'
              : 'bg-white/5 text-white/70 border-2 border-white/20 hover:bg-white/10 hover:border-white/40'
          } group relative whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold shrink-0 rounded-xl transition-all hover:scale-105 focus:outline-none`}
        >
          Courses
        </button>
      </nav>
    </div>

    {/* Mobile Carousel */}
    <div className="sm:hidden relative">
      <div 
        ref={carouselRef}
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {filteredVideos.map((v) => (
            <div 
              key={v.id} 
              className="w-full flex-shrink-0 px-2"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg mx-auto max-w-[280px]">
                <ReelPlayer 
                  hls={v.hls} 
                  mp4={v.mp4} 
                  poster={v.poster} 
                  aspectRatio={v.category === 'reel' ? 'vertical' : 'horizontal'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-lg transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-lg transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* Desktop/Tablet Carousel - 3 items for vertical, 2 items for horizontal */}
    <div className="hidden sm:block relative">
      <div className={`grid gap-4 sm:gap-6 ${
        activeFilter === 'podcast' || activeFilter === 'courses' || activeFilter === 'longform'
          ? 'grid-cols-2' 
          : 'grid-cols-3'
      }`}>
        {getDesktopVideos().map((v) => (
          <div 
            key={v.id} 
            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <ReelPlayer 
              hls={v.hls} 
              mp4={v.mp4} 
              poster={v.poster} 
              aspectRatio={v.category === 'reel' ? 'vertical' : 'horizontal'}
            />
          </div>
        ))}
      </div>

      {/* Desktop Navigation Arrows */}
      {totalDesktopPages > 1 && (
        <>
          <button
            onClick={prevDesktopPage}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors shadow-lg"
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextDesktopPage}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors shadow-lg"
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  </section>
);
};

export default CaseStudiesGrid;
