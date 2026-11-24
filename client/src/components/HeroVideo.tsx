import { useEffect, useRef } from 'react';

/*
  Hero background: one short walkthrough of a home from several angles (client/public/hero.mp4).
  Footage: Kindel Media on Pexels (free to use under the Pexels licence).
*/
export default function HeroVideo({ poster }: { poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Safari only autoplays if the video is definitely muted
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => {
      // Autoplay blocked (e.g. Low Power Mode): start on the first scroll, tap or key press
      const start = () => { v.play().catch(() => {}); };
      ['pointerdown', 'touchstart', 'scroll', 'keydown'].forEach(e =>
        window.addEventListener(e, start, { once: true, passive: true }));
    });
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover"
      src="/hero.mp4"
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
      aria-hidden="true"
    />
  );
}