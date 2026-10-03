'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-element', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        {/* App icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="cta-element"
          src={`${CDN}/dreams._Kdp4Fbe.png`}
          alt="Procreate Dreams icon"
          width={100}
          height={100}
          style={{ borderRadius: '20px', marginBottom: '24px' }}
        />

        <h2 className="cta-element text-heading text-heading--md" style={{ color: '#fff', marginBottom: '16px' }}>
          Procreate Dreams
        </h2>

        <p className="cta-element text-body" style={{ marginBottom: '28px', color: '#888' }}>
          No subscriptions. Pay once. Create forever.<br />
          Just $12.99 USD exclusively from the{' '}
          <a
            href="https://apps.apple.com/app/apple-store/id1595520602"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'underline' }}
          >
            App Store
          </a>.
        </p>

        <a
          className="cta-element btn btn-md btn-primary"
          href="https://apps.apple.com/app/apple-store/id1595520602?pt=345446&ct=procreate.com&mt=8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy Procreate Dreams"
        >
          Buy now
        </a>
      </div>
    </div>
  );
}
