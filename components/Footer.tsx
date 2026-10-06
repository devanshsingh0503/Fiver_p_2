'use client';

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a',
      padding: '32px 16px',
    }}>
      <div className="container">
        <div className="footer-inner" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <p style={{ color: '#555', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Savage Interactive Pty Ltd. All rights reserved.
          </p>
          <div className="footer-links" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
              { label: 'App Store', href: 'https://apps.apple.com/app/apple-store/id1595520602' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                className="footer-link"
                style={{ color: '#555', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
