'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IpadMockup from './IpadMockup';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

interface DualIpadSectionProps {
  leftImg: string;
  rightImg: string;
  subheading: string;
  heading: string;
  body: string;
  rightAligned?: boolean;
  children?: React.ReactNode;
}

export default function DualIpadSection({
  leftImg,
  rightImg,
  subheading,
  heading,
  body,
  rightAligned = false,
  children,
}: DualIpadSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: rightAligned ? 200 : -250,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(rightRef.current, {
        x: rightAligned ? -200 : 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [rightAligned]);

  return (
    <div ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      {/* Dual iPads */}
      <div style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{ position: 'relative', height: '300px' }}>
            {/* Back / left iPad */}
            <div
              ref={leftRef}
              style={{
                position: 'absolute',
                top: 0,
                right: rightAligned ? '30%' : '70%',
                zIndex: 5,
              }}
            >
              <IpadMockup large>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${CDN}/${leftImg}`}
                  alt=""
                  width={1734}
                  height={1300}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
              </IpadMockup>
            </div>

            {/* Front / right iPad */}
            <div
              ref={rightRef}
              style={{
                position: rightAligned ? 'relative' : 'absolute',
                top: 0,
                left: rightAligned ? undefined : undefined,
                zIndex: 10,
                marginLeft: rightAligned ? '0' : 'auto',
              }}
              className={rightAligned ? 'dreams-dual-ipads-base-ipad left' : 'dreams-dual-ipads-base-ipad'}
            >
              <IpadMockup large>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${CDN}/${rightImg}`}
                  alt=""
                  width={1734}
                  height={1300}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
              </IpadMockup>
            </div>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="container container--medium" style={{ marginTop: '40px' }}>
        <h2 className="text-subheading product-color-text" style={{ marginBottom: '12px' }}>{subheading}</h2>
        <p className="text-heading text-heading--md" style={{ color: '#fff', marginBottom: '16px' }}>{heading}</p>
        <p className="text-body" style={{ maxWidth: '660px' }}>{body}</p>
      </div>

      {children && (
        <div className="container" style={{ marginTop: '40px' }}>
          {children}
        </div>
      )}
    </div>
  );
}
