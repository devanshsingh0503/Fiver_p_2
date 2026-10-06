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
      className="hero-section"
    >
      {/* Hero image - full-screen background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${CDN}/hero.C3IhNT7Q.jpg`}
        alt=""
        loading="eager"
        // @ts-expect-error fetchpriority attribute
        fetchpriority="high"
        decoding="sync"
        className="hero-bg-img"
      />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-element text-subheading hero-label">
          Procreate Dreams
        </p>

        <h1 className="hero-element hero-title">
          Edit. Animate. Create.
        </h1>

        <p className="hero-element text-body hero-desc">
          Procreate Dreams is an award-winning animation app, packed with powerful tools that anyone can use.
        </p>

        {/* Award badge */}
        <div className="hero-element">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CDN}/ada-2024_en.DuGQqvxS.svg`}
            alt="Apple Design Awards 2024 Winner"
            className="hero-award"
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

        <p className="hero-element hero-price">
          No subscriptions. $12.99 USD once.
        </p>
      </div>
    </section>
  );
}
