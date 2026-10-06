'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const items1 = ["What's new?", "What's new?", "What's new?", "What's new?"];
const items2 = [
  "Mini Flipbook.", "Flip & Reset.", "Easing upgrades.",
  "Backstage visibility.", "Multi-select reload.",
  "Mini Flipbook.", "Flip & Reset.", "Easing upgrades.",
];

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim1: gsap.core.Tween;
    let anim2: gsap.core.Tween;

    const ctx = gsap.context(() => {
      // First marquee (right to left)
      anim1 = gsap.to(track1Ref.current, {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        ease: 'linear',
      });

      // Second marquee (left to right, slightly slower)
      anim2 = gsap.to(track2Ref.current, {
        xPercent: -50,
        duration: 22,
        repeat: -1,
        ease: 'linear',
      });
    }, containerRef);

    // Pause when off-screen to save CPU/battery
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
    <div ref={containerRef} style={{ background: '#0a0a0a', overflow: 'hidden', paddingTop: '40px', contentVisibility: 'auto' }}>
      {/* Marquee row 1 */}
      <a href="/dreams/whats-new" style={{ display: 'block', overflow: 'hidden', height: '120px' }}>
        <div
          ref={track1Ref}
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform',
          }}
        >
          {[...items1, ...items1].map((text, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                fontSize: 'clamp(80px, 13vw, 140px)',
                fontWeight: 700,
                lineHeight: '0.9',
                color: '#282828',
                letterSpacing: '-0.01em',
                marginRight: '60px',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#282828')}
            >
              {text}
            </span>
          ))}
        </div>
      </a>

      {/* Marquee row 2 */}
      <a href="/dreams/whats-new" style={{ display: 'block', overflow: 'hidden', height: '120px' }}>
        <div
          ref={track2Ref}
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform',
          }}
        >
          {[...items2, ...items2].map((text, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                fontSize: 'clamp(80px, 13vw, 140px)',
                fontWeight: 700,
                lineHeight: '0.9',
                color: '#282828',
                letterSpacing: '-0.01em',
                marginRight: '60px',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </a>

      {/* CTA below marquee */}
      <div style={{ textAlign: 'center', padding: '40px 24px 60px' }}>
        <p className="text-body" style={{ marginBottom: '16px', color: '#888' }}>
          Learn about the latest update.
        </p>
        <a href="/dreams/whats-new" className="btn btn-md btn-primary">
          See what&apos;s new
        </a>
      </div>
    </div>
  );
}
