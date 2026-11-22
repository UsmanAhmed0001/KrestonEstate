import { Link } from 'wouter';
import { ArrowRight, Phone } from 'lucide-react';

type Props = { title: string; text: string; button?: string };

/* Closing call-to-action used at the bottom of every page */
export default function CtaBand({ title, text, button = 'Get in touch' }: Props) {
  return (
    <section className="bg-[#f7f7fb] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#04055e] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{title}</h2>
          <p className="text-gray-600">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded bg-[#04055e] hover:bg-[#0a0b8a] transition-colors">
            {button} <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:+447577561103" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#04055e] rounded border border-[#04055e] hover:bg-white transition-colors">
            <Phone className="w-4 h-4" /> 07577 561103
          </a>
        </div>
      </div>
    </section>
  );
}
