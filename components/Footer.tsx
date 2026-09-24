'use client'

import React from 'react'
import Link from 'next/link'
import {
  MessageCircle,
  Sparkles,
  Heart,
  ShieldCheck,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

const waNumber = '919607778013'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
const defaultWaLink = getWaLink(
  "Hi! I'd like to discuss a custom craft or order with aura.kraftss."
)

export default function Footer() {
  return (
    <>
      <footer className="royal-site-footer relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="royal-footer-gold-glow" aria-hidden="true" />

        {/* Top Gold Foil Accent Border */}
        <div className="royal-footer-top-accent" />

        <div className="max-w-[1240px] mx-auto relative z-10 px-4 md:px-8 pt-8 md:pt-10 pb-4 md:pb-6">
          {/* Main 4-Column Luxury Grid */}
          <div className="royal-footer-grid">
            {/* Col 1: Royal Brand & Atelier Heritage */}
            <div className="royal-footer-brand-col">
              <Link href="/" className="royal-footer-logo flex items-center gap-2.5">
                <img
                  src="/aura-kraftss-logo.png"
                  alt="aura.kraftss Logo"
                  width={40}
                  height={40}
                  style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    minHeight: '40px',
                    maxWidth: '40px',
                    maxHeight: '40px',
                    aspectRatio: '1 / 1',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                  className="rounded-lg shadow-md border border-[#E8A5BD] shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[#FFF0F5] font-serif text-xl font-bold tracking-tight">aura.kraftss</span>
                  <span className="text-[#F8B4C9] text-[0.6rem] uppercase tracking-wider font-semibold">Woolen Rangoli Mats</span>
                </div>
              </Link>

              <div className="royal-footer-badge">
                <span>⚜</span>
                <span>Woolen Rangoli Mats &amp; Craft Studio</span>
                <span>⚜</span>
              </div>

              <p className="royal-footer-desc">
                Handcrafted botanical resin keepsakes, artisanal mehandi, and luxury woolen rangoli mats made with love by Bhumi &amp; Nidhi in Jaipur.
              </p>

              {/* Trust Badges */}
              <div className="royal-footer-perks">
                <span className="royal-footer-perk-pill">
                  <Sparkles size={11} className="text-[#F8B4C9]" /> 100% Handcrafted
                </span>
                <span className="royal-footer-perk-pill">
                  <ShieldCheck size={11} className="text-[#F8B4C9]" /> Pan-India Insured
                </span>
                <span className="royal-footer-perk-pill">
                  <Heart size={11} className="text-[#F8B4C9]" /> Keepsakes
                </span>
              </div>
            </div>

            {/* Col 2: Studio Navigation */}
            <div className="royal-footer-nav-col">
              <h4 className="royal-footer-heading">
                <span>Explore Studio</span>
                <div className="royal-footer-heading-line" />
              </h4>
              <ul className="royal-footer-links">
                <li>
                  <Link href="/">Home Archive</Link>
                </li>
                <li>
                  <Link href="/design-rangoli" className="text-[#F8B4C9] font-semibold flex items-center gap-1">
                    <span>Design Your Rangoli</span>
                    <span className="text-[8px] bg-gradient-to-r from-[#A82855] to-[#80173D] text-[#FFF0F5] border border-[#E8A5BD] px-1 py-0.1 rounded-full font-bold">AI</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">Studio Gallery</Link>
                </li>
                <li>
                  <Link href="/#about">Our Story</Link>
                </li>
                <li>
                  <Link href="/custom-orders">Custom Orders &amp; Contact</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Craft Collections */}
            <div className="royal-footer-nav-col">
              <h4 className="royal-footer-heading">
                <span>Craft Archives</span>
                <div className="royal-footer-heading-line" />
              </h4>
              <ul className="royal-footer-links">
                <li>
                  <Link href="/gallery">Botanical Resin Art</Link>
                </li>
                <li>
                  <Link href="/gallery">Minimalist Thread Portraits</Link>
                </li>
                <li>
                  <Link href="/gallery">Artisanal Bridal Mehandi</Link>
                </li>
                <li>
                  <Link href="/gallery">Couple Memory Discs</Link>
                </li>
                <li>
                  <Link href="/gallery">Rajasthani Jali Mehandi</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Atelier Concierge */}
            <div className="royal-footer-contact-col">
              <h4 className="royal-footer-heading">
                <span>Direct Concierge</span>
                <div className="royal-footer-heading-line" />
              </h4>
              <p className="royal-footer-contact-desc">
                Have a bespoke design in mind or want to book a custom craft? Connect directly with aura.kraftss.
              </p>

              <div className="royal-footer-contact-list">
                <a
                  href={defaultWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="royal-footer-contact-item royal-footer-wa-item group"
                >
                  <div className="royal-footer-icon-circle">
                    <MessageCircle size={13} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Instant Atelier Chat</span>
                    <span className="royal-footer-contact-val text-[#FFF0F5] group-hover:text-[#F8B4C9] transition-colors">
                      +91 96077 78013 &rarr;
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:aurakraftss09@gmail.com"
                  className="royal-footer-contact-item group"
                >
                  <div className="royal-footer-icon-circle">
                    <Mail size={13} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Email Concierge</span>
                    <span className="royal-footer-contact-val text-[#FFF0F5] group-hover:text-[#F8B4C9] transition-colors">
                      aurakraftss09@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/aura.kraftss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="royal-footer-contact-item group"
                >
                  <div className="royal-footer-icon-circle">
                    <Sparkles size={13} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Instagram Atelier</span>
                    <span className="royal-footer-contact-val text-[#FFF0F5] group-hover:text-[#F8B4C9] transition-colors">
                      @aura.kraftss
                    </span>
                  </div>
                </a>

                <div className="royal-footer-contact-item">
                  <div className="royal-footer-icon-circle">
                    <MapPin size={13} />
                  </div>
                  <div>
                    <span className="royal-footer-contact-lbl">Atelier &amp; Studio</span>
                    <span className="royal-footer-contact-val">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Symmetrical Center Gold Divider */}
          <div className="royal-footer-divider-wrap">
            <svg className="royal-footer-divider-svg" viewBox="0 0 300 24" fill="none" aria-hidden="true">
              <line x1="0" y1="12" x2="120" y2="12" stroke="url(#footDivL)" strokeWidth="1" />
              <circle cx="130" cy="12" r="2" fill="#E8A5BD" />
              <path d="M150 4L152.5 10L158 12L152.5 14L150 20L147.5 14L142 12L147.5 10L150 4Z" fill="url(#footDivC)" />
              <circle cx="170" cy="12" r="2" fill="#E8A5BD" />
              <line x1="180" y1="12" x2="300" y2="12" stroke="url(#footDivR)" strokeWidth="1" />
              <defs>
                <linearGradient id="footDivL" x1="0" y1="12" x2="120" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="transparent" />
                  <stop offset="1" stopColor="#E8A5BD" />
                </linearGradient>
                <linearGradient id="footDivR" x1="180" y1="12" x2="300" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E8A5BD" />
                  <stop offset="1" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="footDivC" x1="142" y1="4" x2="158" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF0F5" />
                  <stop offset="0.5" stopColor="#E8A5BD" />
                  <stop offset="1" stopColor="#A82855" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom Copyright & Atelier Love Note */}
          <div className="royal-footer-bottom-bar">
            <p className="royal-footer-copyright">
              &copy; {new Date().getFullYear()} <span className="text-[#FFF0F5] font-semibold">aura.kraftss</span>. All rights reserved.
            </p>
            <p className="royal-footer-tagline">
              <span>Handcrafted with love in</span>
              <span className="royal-footer-gold-tag">Jaipur, Rajasthan ⚜</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        className="floating-wa-btn"
        href={defaultWaLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle size={26} />
      </a>
    </>
  )
}
