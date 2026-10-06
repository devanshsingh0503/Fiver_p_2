'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

const tiles = [
  {
    img: 'tile-brushes.Cd1R7OVC.jpeg',
    text: 'Draw in any style with over 300 gorgeous, hand-made',
    highlight: 'Procreate brushes.',
  },
  {
    img: 'tile-onionskins.BL3llLzI.jpeg',
    text: 'Take the guesswork out of animation with',
    highlight: 'Onion Skins.',
    extra: ' Reference your surrounding frames for precise control.',
  },
  {
    img: 'tile-tracks.DmHqE_f8.jpg',
    text: 'Create rich and detailed animations by layering your flipbook with',
    highlight: 'Multiple Tracks.',
  },
];

export default function TilesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tile-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div
          className="tiles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
            justifyItems: 'center',
          }}
        >
          {tiles.map((tile, i) => (
            <div key={i} className="tile-card" style={{ maxWidth: '360px', width: '100%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN}/${tile.img}`}
                alt=""
                loading="lazy"
                decoding="async"
                style={{
                  borderRadius: '32px',
                  display: 'block',
                  marginBottom: '18px',
                  width: '100%',
                }}
              />
              <p className="text-body" style={{ fontWeight: 600, padding: '0 16px', color: '#aaa' }}>
                {tile.text}{' '}
                <span style={{ color: '#fff' }}>{tile.highlight}</span>
                {tile.extra && tile.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
