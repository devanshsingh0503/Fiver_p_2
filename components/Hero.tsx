'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from('.hero-element', {
        y: 25,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
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
      {/* Top: iPad Mockup image (hero.C3IhNT7Q.jpg contains the complete iPad frame + artwork) */}
      <div className="hero-image-wrap hero-element">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${CDN}/hero.C3IhNT7Q.jpg`}
          alt="Procreate Dreams on iPad"
          loading="eager"
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
          decoding="sync"
          className="hero-main-img"
          width="2880"
          height="1372"
        />
      </div>

      {/* Bottom: Typography, Award, and CTA cleanly stacked on black background */}
      <div className="container">
        <div className="hero-content">
          <p className="hero-element hero-subtitle">
            PROCREATE DREAMS
          </p>

          <h1 className="hero-element hero-title">
            Edit. Animate.<br />Create.
          </h1>

          <p className="hero-element hero-desc">
            Procreate Dreams is an award-winning animation app, packed with powerful tools that anyone can use.
          </p>

          {/* Apple Design Award badge */}
          <div className="hero-element hero-award-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN}/ada-2024_en.DuGQqvxS.svg`}
              alt="Apple Design Awards 2024 Winner"
              className="hero-award"
            />
          </div>

          {/* Buy now button */}
          <a
            className="hero-element btn btn-primary hero-btn"
            href="https://apps.apple.com/app/apple-store/id1595520602"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
          </a>

          {/* Pricing label */}
          <p className="hero-element hero-price">
            No subscriptions. $12.99 USD once.
          </p>
        </div>
      </div>
    </section>
  );
}
