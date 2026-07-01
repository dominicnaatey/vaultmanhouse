'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import Button from './ui/Button';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Commodities', href: '#commodities' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact-us' },
];

export default function Header() {
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isCompact, setIsCompact] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY <= 10;

      setIsAtTop(isNearTop);
      setIsCompact(!isNearTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        height: isCompact ? 64 : 80,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`sticky top-0 z-50 flex items-center justify-between overflow-hidden px-6 will-change-transform ${
        isAtTop
          ? 'bg-[#F9F7F2]'
          : 'bg-[#F9F7F2]/75 backdrop-blur-md border-b border-[#2D2926]/10'
      }`}
    >
      <div className="relative h-10 w-38 cursor-pointer transition-transform hover:scale-105">
        <Image
          src="/vault-logo-yellow-3.svg"
          alt="Vaultman House logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      <nav className="font-ui hidden lg:flex items-center gap-8 text-sm normal-case">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-[#8F9A80] transition-colors capitalize"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* <button className="p-2 hover:bg-[#Eae7de] rounded-full transition-colors hidden sm:block">
          <ShoppingBag className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-[#Eae7de] rounded-full transition-colors hidden sm:block">
          <Search className="w-5 h-5" />
        </button> */}
        <Button className="hidden md:inline-flex">Get in Touch</Button>
        <button className="lg:hidden p-2 hover:bg-[#Eae7de] rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
}
