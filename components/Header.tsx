'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShoppingBag, Search, Menu } from 'lucide-react';
import Button from './ui/Button';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Commodities', href: '#commodities' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact-us' },
];

export default function Header() {
  const [isHidden, setIsHidden] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY <= 10;

      setIsAtTop(isNearTop);

      if (isNearTop) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY + 4) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }

        hideTimeout = setTimeout(() => {
          setIsHidden(true);
        }, 140);
      } else if (currentScrollY < lastScrollY - 4) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        y: isHidden ? '-100%' : '0%',
      }}
      transition={{
        duration: isHidden ? 0.35 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md will-change-transform ${
        isAtTop
          ? 'bg-[#F9F7F2]/90 border-b border-[#2D2926]/5'
          : 'bg-[#F9F7F2]/95 border-b border-[#2D2926]/10 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-2 font-serif text-2xl font-bold cursor-pointer transition-transform hover:scale-105">
        <Leaf className="w-8 h-8 text-[#41533B]" />
        <span>VerdaAgro</span>
      </div>

      <nav className="font-ui hidden lg:flex items-center gap-8 text-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-[#8F9A80] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#Eae7de] rounded-full transition-colors hidden sm:block">
          <ShoppingBag className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-[#Eae7de] rounded-full transition-colors hidden sm:block">
          <Search className="w-5 h-5" />
        </button>
        <Button className="hidden md:inline-flex">Get in Touch</Button>
        <button className="lg:hidden p-2 hover:bg-[#Eae7de] rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
}
