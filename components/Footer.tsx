import Image from 'next/image';
import { Mail, ArrowDown, MapPin } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/vaultman.house/' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/uuyZGjdEyqGqqYL7/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vaultman-house' },
];

const USEFUL_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Services', href: '#services' },
  { label: 'Commodities', href: '#commodities' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact-us' },
];

export default function Footer() {
  return (
    <footer className="relative text-white bg-[#2e3521] pt-40 pb-2 px-6 md:px-16 overflow-hidden min-h-175 flex flex-col justify-between">
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay">
        <Image
          src="/images/soybeans.webp"
          fill
          alt="Vaultman House background"
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-[#2B3521]/90 mix-blend-overlay" /> */}
      </div>

      <div className="relative z-10 w-full mb-2 overflow-hidden flex justify-center -mt-10">
        <h1 className="font-hero text-[11vw] leading-[0.7] text-[#FDF3C8] text-center drop-shadow-2xl scale-y-110 tracking-tighter opacity-90">
          VaultmanHouse
        </h1>
        {/* <h1 className="font-hero text-[15vw] leading-[0.7] text-[#F3E287] text-center drop-shadow-2xl scale-y-110 tracking-tighter opacity-90">
          House
        </h1> */}
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto w-full bg-white/20 backdrop-blur-3xl rounded-4xl p-10 md:p-25 flex flex-col lg:flex-row justify-between gap-16 border border-white/10 shadow-2xl mb-12">
        {/* Contact */}
        <div className="flex flex-col gap-8 lg:w-1/3 max-w-100">
          <p className="text-xl text-white/80 leading-relaxed font-medium">
            The future rests on agribusiness and its supply chain network.
          </p>
          <div className="flex flex-col gap-2 text-[#F3E287]">
            <a href="mailto:info@vaultmanhouse.com" className="text-3xl hover:text-[#FDF3C8] transition-colors inline-block w-max">
              info@vaultmanhouse.com
            </a>
            <a href="tel:+233551495336" className="text-3xl font-medium tracking-wide hover:text-[#FDF3C8] transition-colors inline-block w-max">
              +233 55 149 5336
            </a>
            <div className="flex items-start gap-2 max-w-sm mt-3 text-white/85">
              {/* <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> */}
              <p className="text-base font-normal leading-relaxed">
                No.7 Zeus Street, Otu Adzin Road Spintex - Kotobabi, Tema - Accra
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest text-white/80 hover:text-[#2D2926] hover:bg-white border border-white/20 rounded-full px-4 py-2 transition-all"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-[55%] lg:border-l lg:border-white/15 lg:pl-15 flex flex-col justify-between gap-16">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-12">
            {/* Useful Links */}
            <div>
              <h4 className="font-hero text-2xl mb-8 text-white">Useful Links</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                {USEFUL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-[#F3E287] transition-colors inline-block">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="font-hero text-2xl mb-8 text-white">Subscribe</h4>
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
                Sign up to receive updates on commodity trading, export opportunities, and agribusiness developments from Vaultman House.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-sm font-light tracking-widest text-white/80">
            <p>© 2026 Vaultman House. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
