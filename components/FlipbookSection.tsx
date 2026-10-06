'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IpadMockup from './IpadMockup';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function FlipbookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftIpadRef = useRef<HTMLDivElement>(null);
  const rightIpadRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(leftIpadRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(rightIpadRef.current, {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      {/* Heading */}
      <div ref={headingRef} className="container container--medium" style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h2 className="text-subheading product-color-text" style={{ marginBottom: '10px' }}>Flipbook</h2>
        <p className="text-heading text-heading--md" style={{ color: '#fff' }}>
          Bring your artwork to life.
        </p>
      </div>

      {/* Three overlapping iPads */}
      <div style={{ overflow: 'hidden' }}>
        <div className="flipbook-ipads-container">
          {/* Left iPad — hidden on mobile via CSS class */}
          <div ref={leftIpadRef} className="flipbook-left-ipad" style={{
            position: 'absolute',
            right: '50%',
            zIndex: 10,
            width: 'min(80vw, 450px)',
          }}>
            <IpadMockup style={{ width: '100%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN}/flipbook-left.B-e9LImu.jpeg`}
                alt=""
                width={1734}
                height={1300}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
            </IpadMockup>
          </div>

          {/* Center iPad (front) */}
          <div style={{ zIndex: 20, width: 'min(90vw, 560px)' }}>
            <IpadMockup style={{ width: '100%' }}>
              <video
                ref={videoRef}
                src={`${CDN}/flipbook_en.DrAevauO.mp4`}
                poster={`${CDN}/flipbook_en.DuSpAzur.jpg`}
                preload="metadata"
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
            </IpadMockup>
          </div>

          {/* Right iPad — hidden on mobile via CSS class */}
          <div ref={rightIpadRef} className="flipbook-right-ipad" style={{
            position: 'absolute',
            left: '50%',
            zIndex: 10,
            width: 'min(80vw, 450px)',
          }}>
            <IpadMockup style={{ width: '100%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN}/flipbook-right.Cdc4RDxh.jpeg`}
                alt=""
                width={1734}
                height={1300}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
            </IpadMockup>
          </div>
        </div>
      </div>

      {/* Body text */}
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center', marginTop: '32px' }}>
        <p className="text-body">
          Discover the magic of animation with Flipbook. Draw each frame with beautifully textured brushes,
          multiple tracks and the tools you know and love from Procreate.
        </p>
      </div>
    </div>
  );
}
