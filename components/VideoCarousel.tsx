'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

const videos = [
  { src: '1.ordinary-folk.ota_oR_e.mp4',      poster: '1.cover.BElVoNzU.jpg',  artist: 'Ordinary Folk' },
  { src: '2.aaron-blaise.C3I3CsDa.mp4',        poster: '2.cover.BRIXMr27.jpg',  artist: 'Aaron Blaise' },
  { src: '3.alex-grigg.BcMJLEVh.mp4',          poster: '3.cover.DA6p1it2.jpg',  artist: 'Alex Grigg' },
  { src: '4.michael-relth.DQiXf0jh.mp4',       poster: '4.cover.CJjvQhKI.jpg',  artist: 'Michael Relth' },
  { src: '5.david-milan.CC0_TsZt.mp4',         poster: '5.cover.Bnn8LdlO.jpg',  artist: 'David Milan' },
  { src: '6.nikolai-lockertsen.B9lin8s_.mp4',  poster: '6.cover.CdWVK1Va.jpg',  artist: 'Nikolai Lockertsen' },
  { src: '7.haojing.CvIBIHvI.mp4',             poster: '7.cover.CaG5yiE3.jpg',  artist: 'Haojing' },
  { src: '8.lucan-studio.ZAjPTjGH.mp4',        poster: '8.cover.CepD5Z1X.jpg',  artist: 'Lucan Studio' },
  { src: '9.michael-eugene.CT09uFfR.mp4',      poster: '9.cover.jRIokavf.jpg',  artist: 'Michael Eugene' },
  { src: '10.havtza.CCWk_3vN.mp4',             poster: '10.cover.lX2qggXJ.jpg', artist: 'Havtza' },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const goTo = useCallback((idx: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    const next = (idx + videos.length) % videos.length;

    // Animate track
    gsap.to(trackRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power3.out',
      onComplete: () => {
        setCurrent(next);
        isAnimating.current = false;
      },
    });
  }, []);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Play/pause active video
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.muted = muted;
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [current, muted]);

  // Animate cards on current change
  useEffect(() => {
    const cards = document.querySelectorAll('.carousel-card');
    cards.forEach((card, i) => {
      const offset = i - current;
      const absOffset = Math.abs(offset);
      gsap.to(card, {
        scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.88 : 0.76,
        opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.3,
        x: offset * (typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.75, 720) : 720),
        duration: 0.6,
        ease: 'power3.out',
        zIndex: 10 - absOffset,
      });
    });
  }, [current]);

  // Init positions on mount
  useEffect(() => {
    const cards = document.querySelectorAll('.carousel-card');
    cards.forEach((card, i) => {
      const offset = i - current;
      const absOffset = Math.abs(offset);
      gsap.set(card, {
        scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.88 : 0.76,
        opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.3,
        x: offset * (typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.75, 720) : 720),
        zIndex: 10 - absOffset,
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{ background: '#0a0a0a', padding: '80px 0 40px' }}>
      {/* Carousel viewport */}
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '30px' }}>
        {/* Aspect ratio container */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          maxHeight: '75vh',
        }}>
          {/* Cards */}
          <div
            ref={trackRef}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {videos.map((v, i) => (
              <div
                key={i}
                className="carousel-card"
                style={{
                  position: 'absolute',
                  width: '80%',
                  maxWidth: '900px',
                  cursor: i !== current ? 'pointer' : 'default',
                }}
                onClick={() => i !== current && goTo(i)}
              >
                <video
                  ref={el => { videoRefs.current[i] = el; }}
                  src={`${CDN}/${v.src}`}
                  poster={`${CDN}/${v.poster}`}
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    borderRadius: '36px',
                    display: 'block',
                    border: '1px solid rgba(255,255,255,0.08)',
                    objectFit: 'cover',
                    aspectRatio: '16/9',
                  }}
                />
                <span style={{
                  display: 'block',
                  padding: '14px 30px 0',
                  fontSize: '12px',
                  color: i === current ? '#ccc' : '#666',
                  transition: 'color 0.3s',
                }}>
                  Created by <span style={{ fontWeight: 700, color: i === current ? '#fff' : '#888' }}>{v.artist}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            zIndex: 20,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 144 144" width="24" height="24">
            <path d="M83.935 100.991L54.944 72l28.991-28.991a3 3 0 114.243 4.242L63.429 72l24.749 24.749a3 3 0 01-4.243 4.242z" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next"
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            zIndex: 20,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 144 144" width="24" height="24">
            <path d="M60.065 43.009L89.056 72l-28.991 28.991a3 3 0 11-4.243-4.242L80.571 72 55.822 47.251a3 3 0 014.243-4.242z" />
          </svg>
        </button>

        {/* Mute button */}
        <button
          onClick={() => setMuted(m => !m)}
          aria-label={muted ? 'Unmute' : 'Mute'}
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            zIndex: 20,
          }}
        >
          {muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 32 32">
              <path fillRule="evenodd" d="m11.31 5.562-4.56 4.06h-4.5C1.007 9.622 0 10.7 0 12.027v6.946c0 1.328 1.007 2.405 2.25 2.405h4.5l4.56 4.06c1.465 1.305 3.69.192 3.69-1.847V7.409c0-2.039-2.225-3.152-3.69-1.847M27.293 11.293a1 1 0 0 1 1.414 1.414L25.414 16l3.293 3.293a1 1 0 0 1-1.414 1.414L24 17.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L22.586 16l-3.293-3.293a1 1 0 0 1 1.414-1.414L24 14.586z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 32 32">
              <path fillRule="evenodd" d="m11.31 5.562-4.56 4.06h-4.5C1.007 9.622 0 10.7 0 12.027v6.946c0 1.328 1.007 2.405 2.25 2.405h4.5l4.56 4.06c1.465 1.305 3.69.192 3.69-1.847V7.409c0-2.039-2.225-3.152-3.69-1.847M16.5 8a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 3a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zm4-2a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
