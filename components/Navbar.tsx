'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'

interface NavbarProps {
  currentPath?: string
}

const waNumber = '919607778013'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
const defaultWaLink = getWaLink("Hi! I'd like to discuss a custom craft or order with aura.kraftss.")

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo-brand flex items-center gap-2.5">
        <img
          src="/aura-kraftss-logo.png"
          alt="aura.kraftss Logo"
          width={44}
          height={44}
          style={{
            width: '44px',
            height: '44px',
            minWidth: '44px',
            minHeight: '44px',
            maxWidth: '44px',
            maxHeight: '44px',
            aspectRatio: '1 / 1',
            borderRadius: '8px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
          className="rounded-lg shadow-sm border border-[rgba(232,165,189,0.65)] hover:scale-105 transition-transform shrink-0"
        />
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#A82855] leading-none">
            aura.kraftss
          </span>
          <span className="text-[0.62rem] uppercase tracking-wider text-[#8C4660] font-semibold leading-tight mt-0.5">
            Woolen Rangoli Mats
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <Link href="/" className={currentPath === '/' ? 'active-nav-link' : ''}>
          Home
        </Link>
        <Link
          href="/design-rangoli"
          className={`font-semibold flex items-center gap-1 ${
            currentPath === '/design-rangoli'
              ? 'active-nav-link text-[#A82855]'
              : 'text-[#5C1D33] hover:text-[#A82855]'
          }`}
        >
          <span>Design Rangoli</span>
          <span className="text-[9px] bg-gradient-to-r from-[#A82855] to-[#80173D] text-[#FFF0F5] border border-[#E8A5BD] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider shadow-xs">
            AI Studio
          </span>
        </Link>
        <Link
          href="/gallery"
          className={currentPath === '/gallery' ? 'active-nav-link' : ''}
        >
          Gallery
        </Link>
        <Link href="/#about">Our Story</Link>
        <Link
          href="/custom-orders"
          className={currentPath === '/custom-orders' ? 'active-nav-link' : ''}
        >
          Custom Orders &amp; Contact
        </Link>
        <a
          className="btn-primary btn-sm"
          href={defaultWaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={15} /> Order Now
        </a>
      </nav>

      {/* Mobile Hamburger Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <Link
            href="/"
            className="text-base font-semibold text-[#5C1D33] hover:text-[#A82855] py-1 border-b border-[rgba(168,40,85,0.12)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/design-rangoli"
            className="text-base font-semibold text-[#5C1D33] hover:text-[#A82855] py-1 border-b border-[rgba(168,40,85,0.12)] flex items-center justify-between"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Design Rangoli</span>
            <span className="text-[10px] bg-gradient-to-r from-[#A82855] to-[#80173D] text-[#FFF0F5] border border-[#E8A5BD] px-2 py-0.5 rounded-full font-bold">
              AI Studio
            </span>
          </Link>
          <Link
            href="/gallery"
            className="text-base font-semibold text-[#5C1D33] hover:text-[#A82855] py-1 border-b border-[rgba(168,40,85,0.12)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/#about"
            className="text-base font-semibold text-[#5C1D33] hover:text-[#A82855] py-1 border-b border-[rgba(168,40,85,0.12)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/custom-orders"
            className="text-base font-semibold text-[#5C1D33] hover:text-[#A82855] py-1 border-b border-[rgba(168,40,85,0.12)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Custom Orders &amp; Contact
          </Link>
          <a
            className="btn-primary mt-2 justify-center"
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle size={17} /> Order Now on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
