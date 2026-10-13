'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Commodities', href: '/services/commodity-trading#commodities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact us', href: '/contact' },
];

interface MobileMenuProps {
  /** Height of the sticky header in px so the overlay starts below it */
  headerHeight: number;
  onClose: () => void;
}

export default function MobileMenu({ headerHeight, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: headerHeight,   // sits directly below the header
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '28px',
      }}
    >
      {/* Nav links */}
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClose}
          style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            color: '#1a1a1a',
            textDecoration: 'none',
          }}
        >
          {item.label}
        </a>
      ))}

      {/* X close button below the links */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        style={{
          marginTop: '12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
        }}
      >
        <X size={28} strokeWidth={1.5} color="#1a1a1a" />
      </button>
    </motion.div>
  );
}
