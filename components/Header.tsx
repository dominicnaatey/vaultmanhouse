'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Commodities', href: '/services/commodity-trading#commodities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

/* Renders children directly into document.body via a portal */
function BodyPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function Header() {
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isCompact, setIsCompact] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY <= 10);
      setIsCompact(currentScrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll while drawer is open */
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
        className={`sticky top-0 z-50 flex items-center overflow-hidden px-6 md:px-16 will-change-transform ${
          isAtTop
            ? 'bg-white'
            : 'bg-white/75 backdrop-blur-md border-b border-[#2D2926]/10'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-8 w-30">
            <Image
              src="/vault-logo-yellow-3.svg"
              alt="Vaultman House logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="font-ui hidden lg:flex items-center gap-8 text-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#8F9A80] font-light transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Button className="hidden text-xs lg:inline-flex">Get in Touch</Button>

            {/* Hamburger — mobile & tablet only */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 rounded-full hover:bg-[#Eae7de] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer — rendered via portal so z-index is never trapped ── */}
      <BodyPortal>
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
              />

              {/* Drawer panel */}
              <motion.div
                key="drawer"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 left-0 z-[9999] flex w-72 flex-col bg-white shadow-2xl"
              >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="relative h-7 w-28"
                  >
                    <Image
                      src="/vault-logo-yellow-3.svg"
                      alt="Vaultman House logo"
                      fill
                      className="object-contain object-left"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close navigation menu"
                    className="p-2 rounded-full hover:bg-[#Eae7de] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.05, duration: 0.22 }}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-[#2D2926] hover:bg-[#F5F2EB] transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA pinned to the bottom */}
                <div className="px-6 pb-10 pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center justify-center rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-[#1d1d1d] transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </BodyPortal>
    </>
  );
}
