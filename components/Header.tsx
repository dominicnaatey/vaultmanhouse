'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import Button from './ui/Button';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Commodities', href: '/services/commodity-trading#commodities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact us', href: '/contact' },
];

/* Hamburger icon — three lines */
function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="3" y1="7"  x2="21" y2="7" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="3" y1="19" x2="21" y2="19" />
    </svg>
  );
}

export default function Header() {
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isCompact, setIsCompact] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
      setIsCompact(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll while menu is open */
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Sticky header bar ──────────────────────────────────────────── */}
      <motion.header
        initial={false}
        animate={{ height: isCompact ? 60 : 68 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-40 flex items-center px-6 md:px-16 will-change-transform ${
          isAtTop
            ? 'bg-white'
            : 'bg-white/80 backdrop-blur-md border-b border-[#2D2926]/10'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-32">
            <Image
              src="/vault-logo-yellow-3.svg"
              alt="Vaultman House logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-light uppercase tracking-wide hover:text-[#8F9A80] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Button className="hidden text-xs lg:inline-flex">Get in Touch</Button>

            {/* Hamburger — mobile & tablet only */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-1"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen mobile menu overlay ────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white flex flex-col lg:hidden"
          >
            {/* Top bar — mirrors the header */}
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" onClick={() => setMobileOpen(false)} className="relative h-10 w-32">
                <Image
                  src="/vault-logo-yellow-3.svg"
                  alt="Vaultman House logo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
            </div>

            {/* Centred nav links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.2 }}
                  className="text-2xl font-normal text-[#1a1a1a] hover:text-[#8F9A80] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              {/* X close button below links */}
              <motion.button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.2 }}
                className="mt-4 p-2"
              >
                <X className="w-7 h-7 stroke-[1.5]" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
