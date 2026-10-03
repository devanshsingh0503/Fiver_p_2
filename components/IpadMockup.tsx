'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

export default function IpadMockup({
  children,
  noShadow = true,
  large = false,
  style = {},
}: {
  children: React.ReactNode;
  noShadow?: boolean;
  large?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`ipad-pro-m4${large ? ' ipad-pro-m4--large' : ''}${noShadow ? ' ipad-pro-m4--no-shadow' : ''}`}
      style={style}
    >
      <div className="ipad-pro-m4__content">
        {children}
      </div>
    </div>
  );
}
