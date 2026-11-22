import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { useReveal, img } from '@/lib/useReveal';

const services = [
  {
    title: 'Lettings & Management',
    desc: 'From finding the right tenant to managing the tenancy day to day. Choose the package that matches how involved you want to be.',
    points: ['Marketing on the major portals', 'Full tenant referencing', 'Tenancy agreement and compliance', 'Rent collection and arrears chasing', 'Maintenance coordination', 'Property inspections'],
    href: '/lettings', cta: 'View lettings packages',
    image: img('photo-1493809842364-78817add7ffb', 1000),
  },
  {
    title: 'Property Sales',
    desc: 'A complete sales service at 0.5% commission, with no extra marketing or admin charges.',
    points: ['Free valuation', 'Professional photography', 'Rightmove, Zoopla and PrimeLocation listing', 'Accompanied viewings', 'Offer negotiation', 'Sale progression to completion'],
    href: '/sales', cta: 'About selling with us',
    image: img('photo-1575335235571-2a0adbea59c6', 1000),
  },
  {
    title: 'Commercial Property',
    desc: 'Offices, retail units and mixed-use buildings across South West London, handled with the same care as our residential work.',
    points: ['Commercial tenant find', 'Lease management', 'Rent collection', 'Maintenance coordination', 'Compliance management', 'Regular reporting'],
    href: '/contact', cta: 'Enquire about commercial',
    image: img('photo-1497366216548-37526070297c', 1000),
  },
];

export default function Services() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero
        crumb="Services"
        title="Our services"
        text="Lettings, sales and commercial property, handled by one local team."
        image={img('photo-1560448204-e02f11c3d0e2', 1800)}
      />

      {services.map((s, i) => (
        <section key={s.title} className={`py-24 ${i % 2 === 1 ? 'bg-[#f7f7fb]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 1 ? 'lg:order-2' : ''} data-kre={i % 2 === 1 ? 'right' : 'left'}>
              <p className="text-sm font-semibold text-[#E8703A] mb-3">0{i + 1}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>{s.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E8703A]" /> {p}
                  </li>
                ))}
              </ul>
              <Link href={s.href} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded bg-[#04055e] hover:bg-[#0a0b8a] transition-colors">
                {s.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={i % 2 === 1 ? 'lg:order-1' : ''} data-kre={i % 2 === 1 ? 'left' : 'right'}>
              <img src={s.image} alt={s.title} className="w-full h-[400px] object-cover rounded-lg" loading="lazy" />
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Not sure which service you need?" text="Get in touch and we’ll talk through your options." />
    </div>
  );
}