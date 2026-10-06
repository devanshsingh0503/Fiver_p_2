'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import IpadMockup from './IpadMockup';

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from('.hero-element', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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
      {/* Top: iPad Mockup displaying Procreate Dreams UI */}
      <div className="hero-ipad-wrapper hero-element">
        <IpadMockup large style={{ width: '100%', maxWidth: '840px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CDN}/hero.C3IhNT7Q.jpg`}
            alt="Procreate Dreams on iPad"
            loading="eager"
            // @ts-expect-error fetchpriority attribute
            fetchpriority="high"
            decoding="sync"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </IpadMockup>
      </div>

      {/* Bottom: Text & CTA content cleanly placed below iPad */}
      <div className="hero-content">
        <p className="hero-element text-subheading hero-subtitle">
          PROCREATE DREAMS
        </p>

        <h1 className="hero-element hero-title">
          Edit. Animate.<br />Create.
        </h1>

        <p className="hero-element text-body hero-desc">
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
          className="hero-element btn btn-md btn-primary hero-btn"
          href="https://apps.apple.com/app/apple-store/id1595520602"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy now
        </a>

        {/* Pricing notice */}
        <p className="hero-element hero-price">
          No subscriptions. $12.99 USD once.
        </p>
      </div>
    </section>
  );
}
