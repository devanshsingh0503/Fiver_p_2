'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IpadMockup from './IpadMockup';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function ImportSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ipadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ipadRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ipadRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      {/* Heading */}
      <div className="container container--medium" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-subheading product-color-text" style={{ marginBottom: '12px' }}>
          Import your assets
        </h2>
        <p className="text-heading text-heading--md" style={{ color: '#fff' }}>
          Let audio and video<br />steal the show.
        </p>
      </div>

      {/* iPad */}
      <div ref={ipadRef} className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '90%' }}>
          <IpadMockup style={{ width: '100%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN}/import.B-kMXshd.jpeg`}
              alt=""
              width={1734}
              height={1300}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
          </IpadMockup>
        </div>
      </div>

      {/* Body */}
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center', marginTop: '40px' }}>
        <p className="text-body">
          You don&apos;t have to draw every frame to tell a bigger story. Import video and breathe life into
          your stories by adding sound effects, atmospheric music and dramatic voice overs.
        </p>
      </div>
    </div>
  );
}
