import { useEffect, useRef } from 'react';

const logos = [
  { name: 'The Property Ombudsman', img: '/images/ThePropertyOmbudsman-logo.png' },
  { name: 'Approved Code', img: '/images/ApprovedCode-logo.png' },
  { name: 'Client Money Protect', img: '/images/clientMoneyProtect-logo.png' },
  { name: 'ICO', img: '/images/InformationCommissioners-logo.png' },
  { name: 'mydeposits', img: '/images/Mydeposit-logo.png' },
  { name: 'PrimeLocation', img: '/images/PRIMELOCATION-Logo-Vector.png' },
  { name: 'Zoopla', img: '/images/Zoopla-logo.png' },
  { name: 'GDPR', img: '/images/GDPR-Wide-logo.png' },
  { name: 'LoopNet', img: '/images/logo-loopnet-red-logo.png' },
];

const allLogos = [...logos, ...logos, ...logos];

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame: number;
    let pos = 0;

    function animate() {
      pos += 1.5;
      if (pos >= track!.scrollWidth / 3) pos = 0;
      track!.style.transform = `translateX(-${pos}px)`;
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '24px 0', overflow: 'hidden' }}>
      <div ref={trackRef} style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
        {allLogos.map((logo, i) => (
          <div key={i} style={{ flexShrink: 0, margin: '0 48px', width: '160px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={logo.img}
              alt={logo.name}
              style={{ maxWidth: '160px', maxHeight: '64px', width: 'auto', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}