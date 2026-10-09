'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay fallback ensuring the video plays immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('.hero-anim-item', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="home-hero-root">
      {/* Video Background with Top and Bottom Gradients */}
      <div className="home-hero-video-wrapper">
        <video
          ref={videoRef}
          src="/videos/anyone-can-animate_t.ltq_lnqx.mp4"
          poster="/images/anyone-can-animate_t.yzczH4Sn.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="home-hero-video"
        />
        {/* Top Scrim Gradient for Navbar Legibility */}
        <div className="home-hero-top-scrim" />
        {/* Bottom Scrim Gradient for Smooth Blend into Dark Background */}
        <div className="home-hero-bottom-scrim" />
      </div>

      {/* Main Typography - Shifted below and strictly single-line */}
      <div className="home-hero-center">
        <p className="hero-anim-item home-hero-leader">
          CREATIVE TOOLS MADE FOR YOU
        </p>

        <h1 className="hero-anim-item home-hero-title">
          Art is for everyone.
        </h1>

        <p className="hero-anim-item home-hero-description">
          Amplify your creativity with our powerful and intuitive apps, made for
          <br className="hero-desc-br" />
          creative professionals and aspiring artists.
        </p>
      </div>
    </section>
  );
}
