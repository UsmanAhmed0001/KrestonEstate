import { useEffect } from 'react';

/* Fade sections in once as they scroll into view */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('kre-revealed'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
