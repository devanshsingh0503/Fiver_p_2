'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

interface VideoSectionProps {
  videoSrc: string;
  posterSrc: string;
  mainText: string;
  dimmedText: string;
}

export default function VideoSection({ videoSrc, posterSrc, mainText, dimmedText }: VideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(spanRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: spanRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="procreate-section">
      <div className="video-section-wrapper">
        {/* Video */}
        <div className="video-section-card">
          <video
            ref={videoRef}
            src={`${CDN}/${videoSrc}`}
            poster={`${CDN}/${posterSrc}`}
            preload="metadata"
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Text */}
        <div className="video-section-text">
          <p
            ref={textRef}
            className="text-heading text-heading--md"
            style={{ maxWidth: '900px' }}
          >
            {mainText}
            <span
              ref={spanRef}
              style={{ opacity: 0.5, display: 'inline' }}
            >
              {' '}{dimmedText}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
