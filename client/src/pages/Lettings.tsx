import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { useReveal, img } from '@/lib/useReveal';

const plans = [
  {
    name: 'Tenant Find', price: "1 week's rent", note: 'One-off fee',
    desc: 'We find and reference the tenant, then hand over to you.',
    features: ['Rightmove and Zoopla listing', 'Accompanied viewings', 'Full referencing and Right to Rent checks', 'Tenancy agreement', 'Deposit registration', 'Move-in coordination'],
  },
  {
    name: 'Rent Collection', price: '8% + VAT', note: 'Of monthly rent',
    desc: 'Tenant find, plus we collect the rent and chase any arrears.',
    features: ['Everything in Tenant Find', 'Monthly rent collection', 'Arrears chasing', 'Monthly statements', 'Annual rent review', 'End-of-tenancy handover'],
  },
  {
    name: 'Full Management', price: '12% + VAT', note: 'Of monthly rent',
    desc: 'We look after the property and the tenant day to day.',
    features: ['Everything in Rent Collection', 'Repairs and maintenance arranged', 'Tenant queries handled', 'Regular property inspections', 'Contractor liaison', 'Safety certificate reminders'],
  },
];

const compliance = [
  ['Gas Safety Certificate', 'Every 12 months, by a Gas Safe registered engineer.'],
  ['Electrical (EICR)', 'At least every 5 years for private rented homes.'],
  ['EPC', 'Minimum rating of E required to let a property.'],
  ['Smoke & CO alarms', 'Checked and working on the first day of each tenancy.'],
  ['Deposit protection', 'Registered within 30 days, with prescribed information served.'],
  ['Right to Rent', 'Immigration status checks for every adult occupier.'],
];

export default function Lettings() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero
        crumb="Lettings"
        title="Lettings & property management"
        text="Renting out a London property takes more time and care than most people expect. We find the right tenant, check them properly and look after the tenancy from start to finish."
        image={img('photo-1493809842364-78817add7ffb', 1800)}
      >
        <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded bg-[#E8703A] hover:bg-[#d4612e] transition-colors">
          Book a free rental valuation <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      {/* Packages */}
      <section className="py-24 bg-[#f7f7fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12" data-kre>
            <div>
              <p className="text-sm font-semibold text-[#E8703A] mb-3">Landlord packages</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>Choose the level of service you need</h2>
            </div>
            <p className="text-gray-600 text-sm max-w-sm">Fees are fixed and agreed in writing before you instruct us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map(p => (
              <div key={p.name} className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col" data-kre>
                <h3 className="text-xl font-bold text-[#04055e] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>{p.name}</h3>
                <p className="text-3xl font-bold text-[#04055e]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.price}</p>
                <p className="text-sm text-gray-500 mb-4">{p.note}</p>
                <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">{p.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E8703A]" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center py-3 rounded font-semibold text-sm border border-[#04055e] text-[#04055e] hover:bg-[#04055e] hover:text-white transition-colors">
                  Enquire about {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div data-kre>
            <p className="text-sm font-semibold text-[#E8703A] mb-3">Staying compliant</p>
            <h2 className="text-3xl font-bold text-[#04055e] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What a landlord needs in place</h2>
            <p className="text-gray-600 text-sm leading-relaxed">We arrange and keep track of these for managed properties, and remind Tenant Find landlords before anything expires.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6" data-kre>
            {compliance.map(([t, d]) => (
              <div key={t} className="border-b border-gray-200 pb-5">
                <h3 className="font-bold text-[#04055e] mb-1">{t}</h3>
                <p className="text-gray-600 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to discuss your property?" text="We’ll give you an honest rental figure and recommend the right package." />
    </div>
  );
}