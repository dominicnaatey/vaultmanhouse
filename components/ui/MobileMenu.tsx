'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar — logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 24px',
        }}
      >
        <Link
          href="/"
          onClick={onClose}
          style={{ position: 'relative', height: 40, width: 128, display: 'block' }}
        >
          <Image
            src="/vault-logo-yellow-3.svg"
            alt="Vaultman House logo"
            fill
            className="object-contain object-left"
          />
        </Link>
      </div>

      {/* Nav links + close button — vertically & horizontally centred */}
      <nav
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
        }}
      >
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

        {/* Close — X icon below the links */}
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
      </nav>
    </motion.div>
  );
}
