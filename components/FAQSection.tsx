'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';

const faqs = [
  {
    q: 'What is Procreate Dreams?',
    a: 'Procreate Dreams is a powerful 2D animation app for iPad. It lets you draw, animate, edit, and composite in a professional animation studio you can take everywhere.',
  },
  {
    q: 'How much does Procreate Dreams cost?',
    a: 'Procreate Dreams is available for a one-time purchase of $12.99 USD from the App Store. No subscriptions, no hidden fees — pay once and create forever.',
  },
  {
    q: 'What iPad models are supported?',
    a: 'Procreate Dreams supports all iPad models running iPadOS 17 or later. For 4K ProRes workflows, an iPad with the M1 chip or later is required.',
  },
  {
    q: 'Can I use Procreate brushes in Dreams?',
    a: 'Yes! Procreate Dreams comes with over 300 gorgeous, hand-crafted Procreate brushes right out of the box. You can also import any custom Procreate brushes you already own.',
  },
  {
    q: 'What video formats can I export?',
    a: 'Procreate Dreams supports exporting in MP4, GIF, and ProRes formats. On supported devices you can export in stunning 4K ProRes quality.',
  },
  {
    q: 'Does Procreate Dreams work with Apple Pencil?',
    a: 'Absolutely. Procreate Dreams is designed from the ground up for Apple Pencil, with full pressure and tilt sensitivity for a natural drawing experience.',
  },
  {
    q: 'Can I import video into Procreate Dreams?',
    a: "Yes. You can import video clips, audio files, and images directly into your project. This makes it easy to rotoscope, add sound effects, voiceovers, and atmospheric music to your animations.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const newOpen = openIdx === i ? null : i;

    // Animate close
    if (openIdx !== null && contentRefs.current[openIdx]) {
      gsap.to(contentRefs.current[openIdx], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }

    // Animate open
    if (newOpen !== null && contentRefs.current[newOpen]) {
      gsap.fromTo(
        contentRefs.current[newOpen],
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }

    setOpenIdx(newOpen);
  };

  return (
    <div className="procreate-section" id="faq" style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <h2
          className="text-heading text-heading--md"
          style={{ color: '#fff', marginBottom: '40px' }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ borderTop: '1px solid #222' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="accordion" style={{ borderBottom: '1px solid #222' }}>
              <button
                className="accordion-trigger"
                onClick={() => toggle(i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {faq.q}
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '1px solid #444',
                  flexShrink: 0,
                  marginLeft: '16px',
                  transition: 'transform 0.3s',
                  transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>

              <div
                ref={el => { contentRefs.current[i] = el; }}
                style={{
                  height: 0,
                  overflow: 'hidden',
                  opacity: 0,
                }}
              >
                <p style={{ padding: '0 0 20px', color: '#888', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
