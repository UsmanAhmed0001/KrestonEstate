import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { useReveal, img } from '@/lib/useReveal';

const included = [
  'Free market valuation',
  'Professional photography and floor plan',
  'Listing on Rightmove, Zoopla and PrimeLocation',
  'Accompanied viewings',
  'Offer negotiation',
  'Sale progression through to completion',
];

const steps = [
  { n: '01', title: 'Valuation', desc: 'We visit, look at recent local sales and give you a realistic asking price.' },
  { n: '02', title: 'Go to market', desc: 'Photos, floor plan and listings go live once you have approved them.' },
  { n: '03', title: 'Viewings & offers', desc: 'We host viewings, qualify buyers and negotiate offers on your behalf.' },
  { n: '04', title: 'Through to completion', desc: 'We work with both solicitors to keep the sale moving until the keys are handed over.' },
];

export default function Sales() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero
        crumb="Sales"
        title="Selling your property"
        text="A full sales service, from valuation to completion, for 0.5% of the agreed sale price."
        image={img('photo-1575335235571-2a0adbea59c6', 1800)}
      >
        <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded bg-[#E8703A] hover:bg-[#d4612e] transition-colors">
          Book a free valuation <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      {/* What's included */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div data-kre="left">
            <p className="text-sm font-semibold text-[#E8703A] mb-3">What’s included</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>One fee, everything covered</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our 0.5% fee covers the whole sales process. There are no separate marketing charges or admin fees.
            </p>
            <ul className="space-y-4">
              {included.map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-700 border-b border-gray-200 pb-4">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E8703A]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-kre="right">
            <img src={img('photo-1502672260266-1c1ef2d93688', 1000)} alt="Living room in a London home" className="w-full h-80 object-cover rounded-lg mb-6" loading="lazy" />
            <div className="p-8 rounded-lg bg-[#04055e]">
              <p className="text-white/60 text-sm mb-2">Our commission</p>
              <p className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>0.5%</p>
              <p className="text-white/60 text-sm">of the agreed sale price. For example, £2,000 on a £400,000 sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#f7f7fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14" data-kre>
            <p className="text-sm font-semibold text-[#E8703A] mb-3">The process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>How selling with us works</h2>
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

      <CtaBand title="Thinking of selling?" text="Book a free valuation and we’ll give you an honest figure, with no obligation." button="Book a valuation" />
    </div>
  );
}