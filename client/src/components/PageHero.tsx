import { Link } from 'wouter';
import type { ReactNode } from 'react';

type Props = {
  crumb: string;
  title: string;
  text: string;
  image: string;
  children?: ReactNode;
};

/* Shared photo header used at the top of every inner page */
export default function PageHero({ crumb, title, text, image, children }: Props) {
  return (
    <section
      className="bg-[#04055e] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(4,5,94,0.92) 0%, rgba(4,5,94,0.75) 50%, rgba(4,5,94,0.35) 100%), url('${image}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">{crumb}</span>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
            {title}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">{text}</p>
          {children && <div className="flex flex-wrap gap-4 mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}