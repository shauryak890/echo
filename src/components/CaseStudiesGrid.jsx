import React, { useState } from "react";
import ReelPlayer from "./ReelPlayer";

const CaseStudiesGrid = () => {
  const [activeFilter, setActiveFilter] = useState('reel');

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
      id: 'reel-3',
      title: 'Reel 3',
      category: 'longform',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/_mediamen-26-11-2023-0002_hmkbwn.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/_mediamen-26-11-2023-0002_hmkbwn.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/_mediamen-26-11-2023-0002_hmkbwn.mp4'
    },
    {
      id: 'reel-4',
      title: 'Reel 4',
      category: 'longform',
      poster: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/so_0,f_jpg,q_auto,w_600/_mediamen-26-11-2023-0001_sycb1h.jpg',
      hls: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/sp_auto/_mediamen-26-11-2023-0001_sycb1h.m3u8',
      mp4: 'https://res.cloudinary.com/dqqd9rq8s/video/upload/f_mp4,q_auto/_mediamen-26-11-2023-0001_sycb1h.mp4'
    }
  ];

  const filteredVideos = allVideos.filter(video => video.category === activeFilter);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-max">
      {filteredVideos.map((v) => (
        <div 
          key={v.id} 
          className={`group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer ${
            v.category === 'reel' || v.category === 'longform' ? 'lg:col-span-1' : 'lg:col-span-2'
          }`}
        >
          <ReelPlayer 
            hls={v.hls} 
            mp4={v.mp4} 
            poster={v.poster} 
            aspectRatio={v.category === 'reel' || v.category === 'longform' ? 'vertical' : 'horizontal'}
          />
        </div>
      ))}
    </div>
  </section>
);
};

export default CaseStudiesGrid;
