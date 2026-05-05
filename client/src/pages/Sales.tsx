import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reasons = [
  { title: 'Experience', description: 'Years of success in lettings and a growing portfolio of successful sales.' },
  { title: 'Local Knowledge', description: 'We know what sells and what buyers are looking for in your area.' },
  { title: 'Personal Service', description: 'Friendly, hands-on support throughout the entire process.' },
  { title: 'Clear Communication', description: 'No jargon, no surprises — just honest advice and regular updates.' },
];


export default function Sales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#04055e] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#FF8B7B] font-semibold uppercase tracking-widest mb-4 text-sm">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Sales</h1>
            <p className="text-xl text-gray-200 mb-4 leading-relaxed">
              0.5% of final sale price
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              We've built a solid reputation in lettings, and now we're bringing that same hands-on expertise to property sales. Whether you're a landlord or a homeowner ready to make your next move, you'll get the same personal service and results-driven approach we're known for.
            </p>
            <a href="/contact">
              <Button className="bg-white text-[#04055e] hover:bg-[#FF8B7B] hover:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                Book a Free Valuation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#04055e] mb-4">Why sell with us?</h2>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            We know the local market inside out. We understand how to present your property to attract the right buyers and we're with you every step of the way — from valuation to completion.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#7B5BA3] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#04055e] mb-1 uppercase text-sm tracking-wide">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#FF8B7B] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#04055e] mb-1 uppercase text-sm tracking-wide">Renovation Consultancy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We can help guide you through any improvements you need to make to your property before going to market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#04055e] to-[#FF8B7B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to sell your property?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Book a free valuation and let's get the ball rolling.
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
