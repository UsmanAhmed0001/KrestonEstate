import { Link } from 'wouter';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { useReveal, img } from '@/lib/useReveal';

const principles = [
  { n: '01', title: 'Straight talking', desc: 'No jargon and no hidden fees. You always know where things stand and what you are paying for.' },
  { n: '02', title: 'Hands on', desc: 'We deal with things directly and keep you updated, so you are not left chasing us for news.' },
  { n: '03', title: 'Local', desc: 'We work in South West London every day, and that local knowledge shapes the advice we give.' },
];

const accreditations = [
  ['The Property Ombudsman', 'Independent redress scheme for customers of estate and letting agents.'],
  ['Client Money Protect', 'Protects rent and deposits we hold on behalf of landlords and tenants.'],
  ['mydeposits', 'Government-authorised tenancy deposit protection scheme.'],
  ['Information Commissioner’s Office', 'Registered for handling personal data under UK GDPR.'],
];

export default function About() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero
        crumb="About us"
        title="About Kreston Estates"
        text="An independent lettings, sales and property management company on Tooting High Street."
        image={img('photo-1575335235571-2a0adbea59c6', 1800)}
      />

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-kre="left">
            <p className="text-sm font-semibold text-[#E8703A] mb-3">Our story</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Built by landlords, for landlords
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started as landlords ourselves. After years of dealing with agents who charged a lot and
              communicated very little, we decided to do things differently. Kreston Estates grew out of that.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Based in Tooting, we focus on the area we know best. We keep our client base small on purpose,
              so every landlord gets proper attention rather than a reference number in a queue.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our approach is simple: clear fees, honest communication and following through on what we say.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm text-[#04055e] border-b-2 border-[#E8703A] pb-1 hover:text-[#E8703A] transition-colors">
              Get in touch
            </Link>
          </div>
          <div data-kre="right">
            <img src={img('photo-1502672260266-1c1ef2d93688', 1000)} alt="Living room in a London flat" className="w-full h-[460px] object-cover rounded-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-[#f7f7fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14" data-kre>
            <p className="text-sm font-semibold text-[#E8703A] mb-3">How we work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>What you can expect from us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {principles.map(p => (
              <div key={p.n} className="border-t-2 border-[#04055e] pt-6" data-kre>
                <p className="text-sm font-semibold text-[#E8703A] mb-2">{p.n}</p>
                <h3 className="text-lg font-bold text-[#04055e] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div data-kre>
            <p className="text-sm font-semibold text-[#E8703A] mb-3">Accreditations</p>
            <h2 className="text-3xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>Regulated and protected</h2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8" data-kre>
            {accreditations.map(([name, desc]) => (
              <div key={name} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-[#04055e] mb-1">{name}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s talk about your property" text="No obligation. Call us or visit the office at 163 Tooting High Street." />
    </div>
  );
}