import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-[#04055e] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-white rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493251197/FfCQuaqMk7kEEqghL7wv8V/hero-townhouses-PVze8eApHTJjfaeZyGZF7y.webp"
                    alt="London townhouses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Property management that actually works.
              </h1>
              <p className="text-lg mb-6 text-gray-100 leading-relaxed">
                We're a Tooting-based lettings and property management company
                that keeps things simple: clear fees, reliable service, and a team
                that picks up the phone.
              </p>
              <p className="text-base mb-8 text-gray-200 leading-relaxed">
                No call centres. No faceless portals. Just straightforward
                property management from people who know South West London inside out.
              </p>
              <a href="/about" className="inline-block">
                <Button className="bg-white text-[#04055e] hover:bg-[#FF8B7B] hover:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  FIND OUT MORE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#04055e]">Why Kreston Estates?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We do things differently to most agents — here's what that looks like in practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">NO HIDDEN FEES</h3>
              <p className="text-gray-700">
                Our pricing is fixed and published upfront. You'll know exactly what you're paying
                before you sign anything — no surprises at the end of the month.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">LOCAL EXPERTISE</h3>
              <p className="text-gray-700">
                We operate exclusively across South West London. That focus means we genuinely
                know the area — rental values, tenant demand, and what makes properties let quickly.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">SELECTIVE BY DESIGN</h3>
              <p className="text-gray-700">
                We deliberately keep our portfolio manageable so every landlord gets proper
                attention. We'd rather do fewer things well than spread ourselves too thin.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">DIRECT ACCESS</h3>
              <p className="text-gray-700">
                You deal with us directly — not a junior member of staff or an automated system.
                When something needs a decision, it gets made quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1B4D5C]">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#04055e] to-[#FF8B7B] flex items-center justify-center">
                <span className="text-white text-4xl">📋</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">LETTINGS</h3>
                <p className="text-gray-700 mb-4">
                  Full tenant-find and management service. We handle sourcing, referencing,
                  contracts, rent collection and maintenance so you don't have to.
                </p>
                <a href="/lettings" className="text-[#04055e] font-semibold hover:text-[#FF8B7B] transition-colors mt-auto">
                  Find Out More →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#7B5BA3] to-[#9B7BC3] flex items-center justify-center">
                <span className="text-white text-4xl">🏠</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">SALES</h3>
                <p className="text-gray-700 mb-4">
                  Selling your property? We offer a low 0.5% commission rate with the same
                  personal service and local knowledge you'd expect from us.
                </p>
                <a href="/sales" className="text-[#04055e] font-semibold hover:text-[#FF8B7B] transition-colors mt-auto">
                  Find Out More →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#1B4D5C] to-[#2B6D7C] flex items-center justify-center">
                <span className="text-white text-4xl">🔑</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">GUARANTEED RENT</h3>
                <p className="text-gray-700 mb-4">
                  A fixed monthly payment to your account — regardless of occupancy.
                  We take on the risk so you never have to worry about void periods.
                </p>
                <a href="/services" className="text-[#04055e] font-semibold hover:text-[#FF8B7B] transition-colors mt-auto">
                  Find Out More →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#2C3E50] to-[#4A6278] flex items-center justify-center">
                <span className="text-white text-4xl">🏢</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">COMMERCIAL</h3>
                <p className="text-gray-700 mb-4">
                  Office space, retail units or mixed-use buildings — we manage commercial
                  properties with the same care and attention as our residential portfolio.
                </p>
                <a href="/contact" className="text-[#04055e] font-semibold hover:text-[#FF8B7B] transition-colors mt-auto">
                  Get In Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-[#1B4D5C] mb-6 italic">
            "Kreston Estates made the whole letting process completely stress-free. Professional, responsive and great value."
          </blockquote>
          <p className="text-xl font-semibold text-[#04055e]">Charles Smith</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#04055e] to-[#FF8B7B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Drop us a message and we'll get back to you the same day.
          </p>
          <a href="/contact">
            <Button className="bg-white text-[#04055e] hover:bg-[#04055e] hover:text-white px-8 py-3 rounded-full font-semibold text-lg">
              CONTACT US
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}