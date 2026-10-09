'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items1 = ["What's new?", "What's new?", "What's new?", "What's new?"];
const items2 = [
  "Mini Flipbook.",
  "Flip & Reset.",
  "Easing upgrades.",
  "Backstage visibility.",
  "Multi-select reload.",
  "Mini Flipbook.",
  "Flip & Reset.",
  "Easing upgrades.",
  "Backstage visibility.",
  "Multi-select reload.",
];

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const [activeHover1, setActiveHover1] = useState<number>(0);
  const [activeHover2, setActiveHover2] = useState<number | null>(null);

  useEffect(() => {
    let anim1: gsap.core.Tween;
    let anim2: gsap.core.Tween;

    const ctx = gsap.context(() => {
      anim1 = gsap.to(track1Ref.current, {
        xPercent: -50,
        duration: 24,
        repeat: -1,
        ease: 'linear',
      });

      anim2 = gsap.to(track2Ref.current, {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: 'linear',
      });
    }, containerRef);

    const container = containerRef.current;
    if (container) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            anim1?.resume();
            anim2?.resume();
          } else {
            anim1?.pause();
            anim2?.pause();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(container);
      return () => {
        observer.disconnect();
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        paddingTop: '64px',
        contentVisibility: 'auto',
      }}
    >
      {/* Marquee row 1 */}
      <a
        href="/dreams/whats-new"
        className="marquee-row"
        style={{ textDecoration: 'none' }}
        onMouseLeave={() => setActiveHover1(0)}
      >
        <div ref={track1Ref} className="marquee-track">
          {[...items1, ...items1].map((text, i) => {
            const isWhite = activeHover1 === i;
            return (
              <span
                key={i}
                className="marquee-item"
                style={{
                  cursor: 'pointer',
                  color: isWhite ? '#ffffff' : '#282828',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={() => setActiveHover1(i)}
              >
                {text}
              </span>
            );
          })}
        </div>
      </a>

      {/* Marquee row 2 */}
      <a
        href="/dreams/whats-new"
        className="marquee-row"
        style={{ textDecoration: 'none', marginTop: '8px' }}
        onMouseLeave={() => setActiveHover2(null)}
      >
        <div ref={track2Ref} className="marquee-track">
          {[...items2, ...items2].map((text, i) => {
            const isWhite = activeHover2 === i;
            return (
              <span
                key={i}
                className="marquee-item"
                style={{
                  cursor: 'pointer',
                  color: isWhite ? '#ffffff' : '#282828',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={() => setActiveHover2(i)}
              >
                {text}
              </span>
            );
          })}
        </div>
      </a>

      {/* CTA below marquee */}
      <div style={{ textAlign: 'center', padding: '36px 20px 56px' }}>
        <p
          className="text-body"
          style={{ marginBottom: '16px', color: '#888888', fontSize: '0.95rem' }}
        >
          Learn about the latest update.
        </p>
        <a
          href="/dreams/whats-new"
          className="btn btn-md btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f7235b',
            color: '#ffffff',
            borderRadius: '9999px',
            padding: '12px 32px',
            fontSize: '0.95rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#ff336a';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#f7235b';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          See what&apos;s new
        </a>
      </div>
    </div>
  );
}
