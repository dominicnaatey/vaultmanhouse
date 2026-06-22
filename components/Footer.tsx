import Image from 'next/image';
import { Mail, ArrowDown } from 'lucide-react';

const SOCIAL_LINKS = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn'];
const USEFUL_LINKS = ['Company', 'Services', 'Features', 'FAQs', 'Getting Started'];

export default function Footer() {
  return (
    <footer className="relative bg-[#2D2926] text-white pt-40 pb-10 px-6 md:px-16 overflow-hidden min-h-[700px] flex flex-col justify-between">
      <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay">
        <Image
          src="https://placehold.co/1920x1080/2D2926/F3E287.webp?text=Dark+Hay"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-full mb-24 overflow-hidden flex justify-center -mt-10">
        <h1 className="font-serif text-[18vw] leading-[0.7] font-bold text-[#F3E287] text-center drop-shadow-2xl scale-y-110 tracking-tighter opacity-90">
          VerdaAgro
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full bg-[#3B3833]/80 backdrop-blur-xl rounded-4xl p-10 md:p-20 flex flex-col lg:flex-row justify-between gap-16 border border-white/10 shadow-2xl mb-12">
        {/* Contact */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          <p className="text-base text-white/80 leading-relaxed font-medium">
            Driven by passion. Grounded in purpose. Focused on results.
          </p>
          <div className="flex flex-col gap-2">
            <a href="mailto:verda@mail.com" className="text-3xl font-serif hover:text-[#F3E287] transition-colors inline-block w-max">
              verda@mail.com
            </a>
            <a href="tel:+18001234657" className="text-xl font-medium tracking-wide hover:text-[#F3E287] transition-colors inline-block w-max">
              +1 800 123 46 57
            </a>
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest text-white/80 hover:text-[#2D2926] hover:bg-white border border-white/20 rounded-full px-4 py-2 transition-all"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="lg:w-1/5">
          <h4 className="text-xl font-serif mb-8 text-[#F3E287]">Useful Links</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
            {USEFUL_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#F3E287] transition-colors inline-block">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className="lg:w-1/3">
          <h4 className="text-xl font-serif mb-8 text-[#F3E287]">Subscribe</h4>
          <form className="relative mb-6 group">
            <input
              type="email"
              placeholder="Get news & updates"
              className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-sm font-medium outline-none placeholder-white/50 focus:border-[#F3E287] transition-colors"
            />
            <button type="submit" className="absolute right-2 top-0 text-white/50 group-focus-within:text-[#F3E287] hover:text-[#F3E287] transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-white/50 leading-relaxed font-medium max-w-sm">
            Our expertise, as well as our passion for web design, sets us apart from other agencies.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full flex justify-between items-center max-w-7xl mx-auto text-[10px] font-bold uppercase tracking-widest text-white/50 px-4 md:px-8">
        <p>© 2025 VerdaAgro by WebGeniusLab. All Rights Reserved</p>
        <button className="bg-white/10 hover:bg-[#F3E287] hover:text-[#2D2926] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
          <ArrowDown className="rotate-180 w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
