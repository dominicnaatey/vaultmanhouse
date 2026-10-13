'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import MobileMenu from './ui/MobileMenu';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Commodities', href: '/services/commodity-trading#commodities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact us', href: '/contact' },
];

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
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = React.useState(68);

  /* Track scroll */
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Measure actual header height so the popup starts exactly below it */
  React.useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [scrolled]); // re-measure when scrolled state changes height

  /* Lock body scroll while menu is open */
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Sticky header bar ──────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className={`sticky top-0 flex items-center px-6 md:px-16 transition-all duration-300 ${
          scrolled
            ? 'h-[60px] bg-white/80 backdrop-blur-md border-b border-black/10'
            : 'h-[68px] bg-white'
        }`}
        style={{ zIndex: 9998 }} /* above the popup so logo stays on top */
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo — always visible */}
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
            {/* Desktop-only CTA */}
            <div className="hidden lg:block">
              <Button className="text-xs">Get in Touch</Button>
            </div>

            {/* Hamburger / X — mobile & tablet only */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-1"
            >
              {mobileOpen ? <X size={24} strokeWidth={1.8} /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu popup — starts below the header ─────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            headerHeight={headerHeight}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
