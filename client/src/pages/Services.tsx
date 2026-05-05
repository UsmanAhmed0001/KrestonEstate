import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#04055e] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-100">
            Four ways we can help you get more from your property.
          </p>
        </div>
      </section>

      {/* Lettings */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493251197/FfCQuaqMk7kEEqghL7wv8V/modern-interior-CuC9jXoNyrjmvFYtd4nU5c.webp"
                alt="Modern interior"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">LETTINGS</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Finding good tenants takes time and know-how. We market your property
                across all major portals, conduct accompanied viewings, carry out thorough
                referencing, and manage the tenancy from day one.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From a one-off tenant find to full ongoing management — we have a package
                that fits. Visit our Lettings page for full pricing details.
              </p>
              <a href="/lettings">
                <Button className="text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  VIEW LETTINGS PACKAGES
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sales */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">SALES</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Thinking of selling? We offer a full sales service at just{' '}
                <span className="font-bold text-[#FF8B7B]">0.5% commission</span> — a fraction
                of what most high-street agents charge, with no reduction in service quality.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We handle valuation, photography, marketing, viewings and negotiation.
                Our knowledge of the South West London market means we know how to position
                your property to achieve the best outcome.
              </p>
              <a href="/sales">
                <Button className="text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  BOOK A FREE VALUATION
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493251197/FfCQuaqMk7kEEqghL7wv8V/elegant-entrance-YciGLot9sNg3iggRt2ruPs.webp"
                alt="London property entrance"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Rent */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Property keys"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">GUARANTEED RENT</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With our guaranteed rent scheme, you receive a fixed payment every month —
                whether the property is occupied or not. We take on the tenancy risk completely,
                giving you total income certainty for the duration of the contract.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We manage the property end-to-end: finding and vetting tenants, handling
                all communication, coordinating maintenance, and returning it to you in
                good condition at the end of the term.
              </p>
              <a href="/contact">
                <Button className="text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  ENQUIRE NOW
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">COMMERCIAL</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commercial offering covers offices, retail units and mixed-use buildings
                across South West London. We apply the same structured management approach
                to commercial tenancies as we do to residential — clear processes, regular
                communication, and issues dealt with promptly.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you need a tenant found or full ongoing management, get in touch
                to discuss what we can put in place for your commercial property.
              </p>
              <a href="/contact">
                <Button className="text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  GET IN TOUCH
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Commercial building"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#04055e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Not sure which service is right for you?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get in touch and we'll talk through your options — no pressure, no sales pitch.
          </p>
          <a href="/contact">
            <Button className="bg-white text-[#04055e] hover:bg-[#FF8B7B] hover:text-white px-8 py-3 rounded-full font-semibold text-lg">
              SPEAK TO US
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}