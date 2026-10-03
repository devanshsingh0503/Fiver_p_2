'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BeliefSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div style={{ padding: '0 40px' }}>
          <p
            ref={textRef}
            className="text-heading text-heading--special"
            style={{ maxWidth: '900px' }}
          >
            We believe art is for everyone
            <span style={{ opacity: 0.65 }}>
              , that&apos;s why we&apos;ve designed powerful animation tools that anyone can use.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
