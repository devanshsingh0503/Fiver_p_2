'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        overflow: 'hidden',
      }}
    >
      {/* Hero image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${CDN}/hero.C3IhNT7Q.jpg`}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.7,
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 60%, rgba(10,10,10,1) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        <p className="hero-element text-subheading" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
          Procreate Dreams
        </p>

        <h1 className="hero-element" style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#fff',
        }}>
          Edit. Animate. Create.
        </h1>

        <p className="hero-element text-body" style={{ maxWidth: '480px', color: 'rgba(255,255,255,0.75)' }}>
          Procreate Dreams is an award-winning animation app, packed with powerful tools that anyone can use.
        </p>

        {/* Award badge */}
        <div className="hero-element">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CDN}/ada-2024_en.DuGQqvxS.svg`}
            alt="Apple Design Awards 2024 Winner"
            style={{ height: '51px' }}
          />
        </div>

        <a
          className="hero-element btn btn-md btn-primary"
          href="https://apps.apple.com/app/apple-store/id1595520602"
          target="_blank"
          rel="noopener noreferrer"
          style={{ minWidth: '140px' }}
        >
          Buy now
        </a>

        <p className="hero-element" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
          No subscriptions. $12.99 USD once.
        </p>
      </div>
    </section>
  );
}
