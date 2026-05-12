import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('kre-revealed'); }), { threshold: 0.12 });
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const services = [
  {
    icon: '🏠', title: 'Lettings & Management',
    desc: 'Our full lettings service covers everything from finding the right tenant to managing the relationship end-to-end. Choose the package that fits your level of involvement.',
    points: ['Marketing across all major portals', 'Full tenant referencing', 'Tenancy agreement & legal compliance', 'Rent collection & arrears chasing', 'Maintenance coordination', 'Property inspections'],
    href: '/lettings', cta: 'View Lettings Packages',
  },
  {
    icon: '🔑', title: 'Property Sales',
    desc: 'Sell your property with a full, professional service at just 0.5% commission. Everything included — nothing extra.',
    points: ['Free honest valuation', 'Professional photography', 'Rightmove, Zoopla & PrimeLocation listing', 'Accompanied viewings', 'Offer negotiation', 'Sale progression through to completion'],
    href: '/sales', cta: 'Book a Valuation',
  },
  {
    icon: '🏢', title: 'Commercial Property',
    desc: 'We manage offices, retail units and mixed-use buildings across South West London with the same hands-on approach as our residential portfolio.',
    points: ['Commercial tenant find', 'Lease management', 'Rent collection', 'Maintenance coordination', 'Compliance management', 'Regular communication'],
    href: '/contact', cta: 'Enquire Now',
  },
];

export default function Services() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #04055e, #060870)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>›</span><span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl">Three services, one standard of care. Everything you need from a property company.</p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.title} className={`py-20 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 1 ? 'order-2' : ''} data-kre={i % 2 === 1 ? 'right' : 'left'}>
              <div className="text-5xl mb-4">{s.icon}</div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>0{i + 1}</p>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>{s.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#E8703A' }} />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <Link href={s.href} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded transition-opacity hover:opacity-90" style={{ background: '#E8703A' }}>
                {s.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={`${i % 2 === 1 ? 'order-1' : ''} relative`} data-kre={i % 2 === 1 ? 'left' : 'right'}>
              <div className="rounded-2xl overflow-hidden shadow-xl img-zoom">
                <img src={['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80','https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80','https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80'][i]}
                  alt={s.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20" style={{ background: '#E8703A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center" data-kre>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Not sure which service is right for you?</h2>
          <p className="text-white/80 mb-8">Get in touch and we'll talk through your options — no pressure, no pitch.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-[#04055e] bg-white rounded hover:bg-gray-50 transition-colors">
            Speak to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}