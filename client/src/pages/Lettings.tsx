import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Lettings Page
 * Showcases Kreston Estates lettings service with portfolio and process
 */



const pricingTiers = [
  {
    name: 'Tenant Finder',
    price: '5%',
    priceLabel: 'of gross annual rent',
    highlight: false,
    includes: [
      'Site visit and consultation with assessment on rent maximisation',
      'Rental valuation',
      'Photography',
      'Marketing of your property across major portals to attract quality tenants',
      'Accompanied viewings',
      'Tenant assessment and selection',
      'Arranging credit checks and referencing',
      'Agreeing and signing the tenancy agreement',
      'Deposit registration',
    ],
  },
  {
    name: 'Tenant Finder Plus',
    price: '7%',
    priceLabel: 'of gross annual rent',
    highlight: true,
    includes: [
      'Everything in Tenant Finder',
      'Managing the lease agreements and renewals',
      'Handling tenant communication and addressing concerns promptly',
    ],
  },
  {
    name: 'Full Management',
    price: '10%',
    priceLabel: 'of gross annual rent',
    highlight: false,
    includes: [
      'Everything in Tenant Finder Plus',
      'Property maintenance and repairs using our experienced contractors',
      'Carrying out inspections every six months to maintain property standards',
      'Arranging EICR, EPC and gas safety certification to ensure compliance with renting standards',
    ],
  },
  {
    name: 'Guaranteed Rent',
    price: 'Fixed',
    priceLabel: 'monthly income — guaranteed',
    highlight: false,
    includes: [
      'Guaranteed rent paid to you every month — occupied or not',
      'No void periods, no chasing tenants for rent',
      'We take full management responsibility for the property',
      'Fixed term contract giving you complete income certainty',
      'Hands-off — we handle everything from start to finish',
    ],
  },
];

export default function Lettings() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#04055e] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#FF8B7B] font-semibold uppercase tracking-widest mb-4 text-sm">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Lettings
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Whether you're struggling to find a decent tenant or simply don't have time to manage a tenancy — we're here to help. Let us take the stress out of tenant finding and management.
            </p>
            {/* <a href="/contact">
              <Button className="bg-white text-[#04055e] hover:bg-[#FF8B7B] hover:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a> */}
          </div>
        </div>
      </section>

      {/* Our Services / Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#04055e] mb-4">Our Services</h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Transparent, straightforward pricing with no hidden fees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col border ${tier.highlight
                  ? 'bg-[#04055e] border-[#04055e] text-white'
                  : 'bg-white border-gray-200 text-[#04055e]'
                  }`}
              >
                <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${tier.highlight ? 'text-[#FF8B7B]' : 'text-[#FF8B7B]'}`}>
                  {tier.name}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${tier.highlight ? 'text-white' : 'text-[#04055e]'}`}>{tier.price}</span>
                  <span className={`text-sm ml-2 ${tier.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{tier.priceLabel}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#FF8B7B]' : 'text-[#FF8B7B]'}`} />
                      <span className={`text-sm leading-relaxed ${tier.highlight ? 'text-gray-200' : 'text-gray-600'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <a href="/contact" className="mt-8 block">
                  <button className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                    tier.highlight
                      ? 'bg-white text-[#04055e] hover:bg-[#FF8B7B] hover:text-white'
                      : 'bg-[#04055e] text-white hover:bg-[#FF8B7B]'
                  }`}>
                    Get Started
                  </button>
                </a> */}
              </div>
            ))}
          </div>
          <a href="/contact" className="mt-8 block">
            <button className={`w-full py-3 rounded-full font-semibold text-sm transition-colors bg-[#04055e] text-white hover:bg-[#FF8B7B]`}>
              Contact Us
            </button>
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#04055e] mb-4">Our Portfolio</h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            A selection of properties we've successfully let across South West London and beyond.
          </p>
          
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#04055e] to-[#FF8B7B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to let your property?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Book a free valuation and let's get started.
          </p>
          <a href="/contact">
            <Button className="bg-white text-[#04055e] hover:bg-[#04055e] hover:text-white px-8 py-3 rounded-full font-semibold text-lg">
              GET IN TOUCH
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
