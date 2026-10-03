'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44" fill="currentColor">
        <path d="M25.75 12.36a13.6 13.6 0 0 0-11.64-6.51A13.45 13.45 0 0 0 .56 19.19a18.26 18.26 0 0 0 2.76 9.31 14.1 14.1 0 0 1-2.11-3.06 15.4 15.4 0 0 1-1.29-6.19 15.89 15.89 0 0 1 16-15.75 16.05 16.05 0 0 1 13.6 7.5ZM12.45 23l-.67-1.15A.66.66 0 0 1 12 21l1.58-.9A2.48 2.48 0 0 1 16 17.72l14.26-5.58-12 9.37a2.55 2.55 0 0 1-3.3.88l-1.57.9a.69.69 0 0 1-.94-.29m18.4-9.48a15.6 15.6 0 0 1 1.07 5.69 15.3 15.3 0 0 1-.3 3.05.4.4 0 0 1-.22.3.44.44 0 0 1-.37 0l-3-1.26a.75.75 0 0 1-.45-.76 13 13 0 0 0 .07-1.4 13.2 13.2 0 0 0-.3-2.83Zm-14.78 5.21a1.49 1.49 0 1 1-1.51 1.49 1.5 1.5 0 0 1 1.51-1.49" />
      </svg>
    ),
    title: 'Realtime rendering',
    desc: 'No more waiting for render previews. Instantly play back your animation as you make it.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="currentColor">
        <path d="M12.258 42.109H0V29.852h12.258zM24.14 27.633h-8.824v-8.822h8.824zM44 26.795h-7.148v-7.148H44zM34.907 40.12h-8.823v-8.823h8.823zM34.073 16.865h-7.147V9.72h7.147zM43.367 7.773h-5.883V1.89h5.883z" />
      </svg>
    ),
    title: 'Pixel perfect painting',
    desc: 'With powerful rendering speeds, Procreate Dreams moves as fast as you can create.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="currentColor">
        <path d="M6.373 38.63q-2.837 0-4.264-1.409Q.699 35.831.7 33.048V10.971q0-2.8 1.409-4.192Q3.536 5.37 6.373 5.37h31.254q2.855 0 4.264 1.409t1.409 4.192v22.077q0 2.782-1.409 4.173-1.409 1.41-4.264 1.409zm12.194-9.34 10.623-6.251q.38-.234.506-.614a1.2 1.2 0 0 0 0-.777 1.06 1.06 0 0 0-.506-.614l-10.623-6.287a1.37 1.37 0 0 0-.831-.199q-.434.036-.74.289-.29.253-.29.704v12.954q0 .451.29.723.288.27.704.307.433.036.867-.235" />
      </svg>
    ),
    title: '4K workflows',
    desc: 'Perform lightning-fast edits as you work on 4K ProRes footage on supported devices.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44" fill="currentColor">
        <path d="M16.74 14.5h8.35a.91.91 0 0 1 .9 1.06 1 1 0 0 1-.24.46L11.19 30.93a.2.2 0 0 1-.13.07.4.4 0 0 1-.15 0 .22.22 0 0 1-.09-.12.23.23 0 0 1 0-.14l4.44-13.24H6.91A.91.91 0 0 1 6 16.44a1 1 0 0 1 .25-.44L20.81 1.07a.2.2 0 0 1 .13-.07h.15a.22.22 0 0 1 .09.12.23.23 0 0 1 0 .14z" />
      </svg>
    ),
    title: 'Instant open',
    desc: "Procreate Dreams' files open and close in an instant, so you can dive straight into creating.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="44" height="44" fill="currentColor">
        <path d="M11.809.118a1.76 1.76 0 0 1 1.457.086q.72.344 1.044 1.235l4.44 12.22q.188.496.48.651a.82.82 0 0 0 .633.051.67.67 0 0 0 .412-.428q.12-.326-.051-.806l-1.337-3.65q-.291-.824.651-1.166 1.045-.394 2.005.034.976.411 1.491 1.817l.617 1.714q.189.48.48.652a.82.82 0 0 0 .635.05.72.72 0 0 0 .411-.427q.12-.326-.052-.806l-.685-1.868q-.293-.824.651-1.166 1.08-.394 2.057.103.993.498 1.457 1.748l.325.891q.172.48.48.651a.78.78 0 0 0 .617.052.73.73 0 0 0 .412-.429q.136-.325-.052-.805l-.497-1.371q-.188-.514.36-.72.771-.274 1.628.034t1.628 1.183q.77.873 1.303 2.297l1.114 3.085q1.371 3.752 1.062 6.872-.308 3.102-2.245 5.399-1.919 2.296-5.416 3.565-3.856 1.405-7.729.36-3.873-1.028-7.319-5.348l-5.45-6.838a5 5 0 0 1-.274-.377 3 3 0 0 1-.223-.48 1.7 1.7 0 0 1 .052-1.354q.326-.686 1.148-.977.549-.206 1.045-.068.515.137 1.012.651l4.404 4.73q.48.514.908.36a.51.51 0 0 0 .309-.309q.12-.24 0-.565L10.694 2.758q-.325-.891-.016-1.611.307-.736 1.131-1.029" />
      </svg>
    ),
    title: 'Multitouch timeline',
    desc: 'A revolutionary timeline made for animation, with fluid gestures that keep you focused on creating.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44" fill="currentColor">
        <path d="M4.55 13.58h-1V24a2.3 2.3 0 0 0 .57 1.67 2.3 2.3 0 0 0 1.64.55h20.86a2.33 2.33 0 0 0 1.64-.56 2.2 2.2 0 0 0 .57-1.66V13.58zM3.56 12.1h25.27v-1a2.18 2.18 0 0 0-.58-1.65 2.25 2.25 0 0 0-1.63-.57H14a7 7 0 0 1-1.1-.08 3 3 0 0 1-.84-.29 4.5 4.5 0 0 1-.75-.51l-.72-.64a3.6 3.6 0 0 0-1-.62 3.4 3.4 0 0 0-1.14-.17h-2.9a1.94 1.94 0 0 0-1.49.49 2 2 0 0 0-.51 1.51Z" />
      </svg>
    ),
    title: 'Automatic Saving',
    desc: "Everything you do is instantly saved, so you never need to worry about losing your work.",
  },
];

export default function FeatureSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered horizontal scroll
      const slider = sliderRef.current;
      const wrapper = wrapperRef.current;
      if (!slider || !wrapper) return;

      const totalWidth = slider.scrollWidth - wrapper.offsetWidth;

      gsap.to(slider, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 60%',
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: false,
        },
      });

      // Cards fade in
      gsap.from('.feature-card', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="procreate-section" style={{ background: '#0a0a0a' }}>
      <div
        ref={wrapperRef}
        style={{ overflow: 'hidden', paddingBottom: '300px' }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <div
            ref={sliderRef}
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'nowrap',
              width: 'max-content',
              paddingLeft: '5px',
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  minWidth: '280px',
                  background: '#141414',
                  border: '1px solid #242424',
                  borderRadius: '42px',
                  padding: '30px',
                  flexShrink: 0,
                }}
              >
                <div style={{ color: '#f7235b', marginBottom: '40px' }}>{f.icon}</div>
                <h3 className="text-heading text-heading--xs" style={{ marginBottom: '6px', color: '#fff' }}>
                  {f.title}
                </h3>
                <p className="text-body text-body--sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
