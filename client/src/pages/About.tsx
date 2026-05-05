/**
 * About Page — 100% original content, no third-party resemblance
 */
export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#04055e] to-[#FF8B7B] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-100">
            A South West London property company built differently.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#04055e] mb-8">Our Story</h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <span className="font-bold text-[#04055e]">Kreston Estates</span> is your trusted partner in real estate.
            </p>

            <p>
              We started out as landlords ourselves. After years of dealing with letting agents who
              charged high fees, communicated poorly, and showed little genuine interest in our
              properties, we decided to do things differently. Kreston Estates was born out of that
              frustration — and a conviction that landlords deserve better.
            </p>

            <p>
              Based in Tooting, South West London, we focus on a local area we know inside out.
              That means we understand the rental market here, we know what tenants are looking for,
              and we know how to position your property to attract the right people at the right price.
            </p>

            <p>
              We keep our client base selective by design. We only take on properties we can manage
              properly, which means you always get our full attention — not a ticket number in a
              queue. When something needs sorting, we sort it. No chasing, no excuses.
            </p>

            <p>
              Our approach is straightforward: clear fees, honest communication, and consistent
              follow-through. We don't make promises we can't keep, and we don't disappear once
              you've signed on. From your first enquiry through to long-term management, we're with
              you every step of the way.
            </p>

            <p>
              Whether you have a single flat or a growing portfolio, we'll put together a management
              plan built around your goals — not a one-size-fits-all package. That's what makes
              working with <span className="font-bold text-[#04055e]">Kreston Estates</span> different.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#04055e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-3">STRAIGHT TALKING</h3>
              <p className="text-gray-200">
                No jargon, no hidden fees, no runaround. You'll always know exactly where things
                stand with us.
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-3">HANDS ON</h3>
              <p className="text-gray-200">
                We don't outsource your problems. Our team handles things directly and keeps you
                informed without you needing to ask.
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-3">LOCALLY ROOTED</h3>
              <p className="text-gray-200">
                We live and work in South West London. That local knowledge is something no
                national agency can replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">Let's have a conversation</h2>
          <p className="text-xl text-gray-700 mb-8">
            If you're tired of the usual letting agent experience, come and speak to us.
            No obligation, no hard sell — just a straightforward chat about what we can do for you.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-[#04055e] hover:bg-[#E55B4B] text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              GET IN TOUCH
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}