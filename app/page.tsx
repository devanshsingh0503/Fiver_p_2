import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/MarqueeSection';
import VideoSection from '@/components/VideoSection';
import FlipbookSection from '@/components/FlipbookSection';
import TilesSection from '@/components/TilesSection';
import DualIpadSection from '@/components/DualIpadSection';
import ImportSection from '@/components/ImportSection';
import FeatureSlider from '@/components/FeatureSlider';
import BeliefSection from '@/components/BeliefSection';
import VideoCarousel from '@/components/VideoCarousel';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const CDN = 'https://procreate-assets-cdn.procreate.com/_nuxt';

// Keyframes cards rendered inside DualIpadSection via children
function KeyframesCards() {
  return (
    <div className="keyframe-cards-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '16px',
      marginTop: '24px',
    }}>
      {/* Move & Scale */}
      <div style={{
        borderRadius: '42px',
        background: '#141414',
        border: '1px solid #242424',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            Move &amp; Scale
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.6 }}>
            Powerful keys like Warp, Scale and Distort add another dimension to your animation.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${CDN}/move-scale.BJ7o0Gol.jpg`}
          alt="Move & Scale"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', display: 'block' }}
        />
      </div>

      {/* Filters & Effects */}
      <div style={{
        borderRadius: '42px',
        background: '#141414',
        border: '1px solid #242424',
        overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${CDN}/filters-effects.BpRt2pk2.jpg`}
          alt="Filters & Effects"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', display: 'block' }}
        />
        <div style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            Filters &amp; Effects
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.6 }}>
            With just a few taps, add non-destructive cinematic filters and effects like Lens Blur, Noise and HSB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DreamsPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee / What's New */}
      <MarqueeSection />

      {/* 3. Everything video */}
      <VideoSection
        videoSrc="everything.BJ3hssA2.mp4"
        posterSrc="everything.aN2dmFBk.jpg"
        mainText="Everything you need"
        dimmedText="to create rich 2D animations, expressive videos, and breathtaking stories."
      />

      {/* 4. Flipbook section */}
      <FlipbookSection />

      {/* 5. Tiles grid */}
      <TilesSection />

      {/* 6. Anyone Can Animate video */}
      <VideoSection
        videoSrc="anyone-can-animate_t.ltq_lnqx.mp4"
        posterSrc="anyone-can-animate_t.yzczH4Sn.jpg"
        mainText="Now anyone can animate,"
        dimmedText="record motion or effects through touch and instantly respond to the movie as it plays."
      />

      {/* 7. Keyframes / Mark section */}
      <DualIpadSection
        leftImg="mark-left.r-dflRRC.jpeg"
        rightImg="mark-right.e1rvWNAZ.jpeg"
        subheading="Keyframes"
        heading="Mark the moment."
        body="Make your drawings scale, rotate, blur and more with easy to use keyframes. Procreate Dreams will instantly create every frame, turning simple keyframe markers into fluid motion and effects."
      >
        <KeyframesCards />
      </DualIpadSection>

      {/* 8. Import assets */}
      <ImportSection />

      {/* 9. Power / Next Gen Technology */}
      <DualIpadSection
        leftImg="power-left.DK0baTnk.jpeg"
        rightImg="power-right.CtqMTVqJ.jpeg"
        subheading="Next Generation Technology"
        heading="Power you've been dreaming of."
        body="For the first time you can draw, animate, edit, and composite in a powerful animation studio you can take everywhere."
        rightAligned
      />

      {/* 10. Feature slider */}
      <FeatureSlider />

      {/* 11. Belief statement */}
      <BeliefSection />

      {/* 12. Video carousel */}
      <VideoCarousel />

      {/* 13. CTA */}
      <CTASection />

      {/* 14. FAQ */}
      <FAQSection />

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
