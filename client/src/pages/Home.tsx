import { useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'wouter';

/* Fade sections in once as they scroll into view */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('kre-revealed'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const img = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const services = [
  {
    title: 'Lettings & Management',
    desc: 'Tenant find, rent collection or full management. Three clearly priced packages, so you only pay for what you need.',
    href: '/lettings',
    image: img('photo-1493809842364-78817add7ffb', 800),
  },
  {
    title: 'Property Sales',
    desc: 'Valuation, photography, portal listings, accompanied viewings and negotiation through to completion, at 0.5% commission.',
    href: '/sales',
    image: img('photo-1575335235571-2a0adbea59c6', 800),
  },
  {
    title: 'Commercial Property',
    desc: 'Offices, retail units and mixed-use buildings across South West London, managed with the same hands-on approach.',
    href: '/services',
    image: img('photo-1497366216548-37526070297c', 800),
  },
];

const steps = [
  { n: '01', title: 'Valuation', desc: 'We visit the property and give you an honest rental or sale figure, in writing.' },
  { n: '02', title: 'Marketing', desc: 'Professional photos and listings on Rightmove, Zoopla and PrimeLocation.' },
  { n: '03', title: 'Viewings & checks', desc: 'We host every viewing, then reference and Right to Rent check all applicants.' },
  { n: '04', title: 'Move-in & beyond', desc: 'Tenancy agreement, deposit registration, inventory, then ongoing management if you need it.' },
];

const fees = [
  { name: 'Tenant Find', price: "1 week's rent", note: 'One-off fee' },
  { name: 'Rent Collection', price: '8% + VAT', note: 'Of monthly rent' },
  { name: 'Full Management', price: '12% + VAT', note: 'Of monthly rent' },
  { name: 'Sales', price: '0.5%', note: 'Of the agreed sale price' },
];

const areas = ['Tooting', 'Balham', 'Streatham', 'Colliers Wood', 'Wimbledon', 'Earlsfield', 'Mitcham', 'Wandsworth'];

export default function Home() {
  useReveal();

  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative bg-[#04055e] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(4,5,94,0.92) 0%, rgba(4,5,94,0.75) 45%, rgba(4,5,94,0.25) 100%), url('${img('photo-1560448204-e02f11c3d0e2', 1800)}')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#E8703A] mb-4">Lettings · Sales · Property Management — Tooting, SW17</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Independent estate agents for South West London
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              We let, manage and sell homes and commercial property from our office on Tooting High Street.
              One point of contact, fees agreed in writing, and a team that answers the phone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-colors bg-[#E8703A] hover:bg-[#d4612e]">
                Book a free valuation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+447577561103"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded border border-white/40 hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" /> 07577 561103
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATION STRIP */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <p><span className="font-semibold text-[#04055e]">The Property Ombudsman</span> — registered member</p>
          <p><span className="font-semibold text-[#04055e]">Client Money Protect</span> — client funds protected</p>
          <p><span className="font-semibold text-[#04055e]">mydeposits</span> — tenancy deposits protected</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-kre="left">
            <p className="text-sm font-semibold text-[#E8703A] mb-3">About Kreston Estates</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>
              A local agency, run the way we would want our own property handled
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kreston Estates is an independent lettings, sales and management company based in Tooting.
              We look after landlords, tenants, buyers and sellers across SW17 and the surrounding areas.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We deliberately keep our portfolio manageable. Landlords deal with the same person from
              valuation to move-out, and tenants get repairs dealt with promptly.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-sm text-[#04055e] border-b-2 border-[#E8703A] pb-1 hover:text-[#E8703A] transition-colors">
              More about us
            </Link>
          </div>
          <div data-kre="right">
            <img src={img('photo-1502672260266-1c1ef2d93688', 1000)}
              alt="Living room in a London flat" className="w-full h-[460px] object-cover rounded-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#f7f7fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12" data-kre>
            <div>
              <p className="text-sm font-semibold text-[#E8703A] mb-3">Our services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>How we can help</h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-[#04055e] hover:text-[#E8703A] transition-colors">
              View all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <Link href={s.href} key={s.title} className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow" data-kre>
                <div className="overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold mb-3 text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <span className="text-sm font-semibold text-[#E8703A]">Find out more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14" data-kre>
            <p className="text-sm font-semibold text-[#E8703A] mb-3">For landlords</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>Letting your property with us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map(s => (
              <div key={s.n} className="border-t-2 border-[#04055e] pt-6" data-kre>
                <p className="text-sm font-semibold text-[#E8703A] mb-2">{s.n}</p>
                <h3 className="text-lg font-bold text-[#04055e] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="py-24 bg-[#04055e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12" data-kre>
            <div>
              <p className="text-sm font-semibold text-[#E8703A] mb-3">Transparent pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Our fees</h2>
            </div>
            <p className="text-white/60 text-sm max-w-sm">No admin charges or marketing add-ons. Full terms are provided in writing before you instruct us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/15 rounded-lg overflow-hidden">
            {fees.map((f, i) => (
              <div key={f.name} className={`p-8 ${i > 0 ? 'border-t sm:border-t-0 lg:border-l border-white/15' : ''} ${i === 2 ? 'sm:border-t lg:border-t-0' : ''} ${i === 3 ? 'sm:border-l sm:border-t lg:border-t-0' : ''} ${i === 1 ? 'sm:border-l' : ''}`}>
                <p className="text-white/60 text-sm mb-3">{f.name}</p>
                <p className="text-2xl xl:text-3xl font-bold text-white mb-1 whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>{f.price}</p>
                <p className="text-white/50 text-sm">{f.note}</p>
              </div>
            ))}
          </div>
          <Link href="/lettings" className="inline-block mt-8 text-sm font-semibold text-white border-b-2 border-[#E8703A] pb-1 hover:text-[#E8703A] transition-colors">
            Compare lettings packages
          </Link>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div data-kre>
            <p className="text-sm font-semibold text-[#E8703A] mb-3">Where we work</p>
            <h2 className="text-3xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>Areas we cover</h2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4" data-kre>
            {areas.map(a => (
              <p key={a} className="text-gray-700 border-b border-gray-200 pb-3">{a}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7fb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#04055e] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Thinking of letting or selling?
            </h2>
            <p className="text-gray-600">Call us or visit the office at 163 Tooting High Street, SW17 0SY.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded bg-[#04055e] hover:bg-[#0a0b8a] transition-colors">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+447577561103" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#04055e] rounded border border-[#04055e] hover:bg-white transition-colors">
              <Phone className="w-4 h-4" /> 07577 561103
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}