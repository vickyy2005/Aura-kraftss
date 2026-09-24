'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Sparkles,
  Send,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  Gift,
  Heart,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react'

const waNumber = '919607778013'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

const occasions = [
  'Wedding Entry & Bridal Aisle Walk',
  'Royal Reception & Sangeet Entry',
  'Diwali & Festive Celebration',
  'Housewarming & Griha Pravesh Puja',
  'Temple & Mandir Chowki Setup',
  'Anniversary & Couple Keepsake',
  'Other Bespoke Craft Request',
]

const craftStyles = [
  'Wedding Aisle Runner (Custom Names & Verses)',
  'Floral Rangoli Mat (Swan / Peacock / Lotus)',
  '3D Floral Peacock Handcrafted Rug',
  'Swastik / Shubh Labh Chowki Mat',
  'Bespoke Mandir Aasan / Floor Mat',
  'Personalized Family Heirloom Keepsake',
]

const sizes = [
  'Wedding Aisle Runner — 20 ft (Standard Passage)',
  'Wedding Aisle Runner — 35 ft (Grand Venue Entry)',
  'Wedding Aisle Runner — 50+ ft (Royal Ballroom Walk)',
  'Rangoli Mat — Medium (2.5 ft Diameter)',
  'Rangoli Mat — Grand (4 ft to 5 ft Diameter)',
  'Chowki Mat — 12" x 12" to 18" x 18"',
  '3D Peacock Rug — Custom Floor Dimensions',
  'Custom Dimensions (Specify in Notes)',
]

const palettes = [
  'Royal Maroon & Gold Foil',
  'Traditional Red & Emerald Green',
  'Pastel Peach & Ivory White',
  'Peacock Cyan & Royal Blue',
  'Turmeric Yellow & Sunset Orange',
  'Custom Theme (Share in Notes)',
]

const faqs = [
  {
    q: 'How long does a custom wedding aisle runner or rangoli mat take?',
    a: 'Each aisle runner and floral rangoli mat is handcrafted to order. Crafting takes 5 to 9 business days depending on size and intricate lettering. Shipping across India takes 3 to 5 business days with insured tracking.',
  },
  {
    q: 'Can I see a preview/draft of the names and verses before production?',
    a: 'Yes! Once you submit your inquiry and connect on WhatsApp, we provide a digital design draft of the couple names, Sanskrit shlokas, and floral border layout for your approval before crafting begins.',
  },
  {
    q: 'Can you customize dimensions for unique wedding venue aisles or mandap entries?',
    a: 'Absolutely. We custom tailor runner lengths from 15 ft up to 60+ ft, as well as round rangoli mats from 2 ft up to 6 ft diameter to perfectly match your wedding walkway or puja stage.',
  },
  {
    q: 'How are the runners and craft mats packaged for transport?',
    a: 'Every aisle runner is rolled crease-free around sturdy protective cores and secured in heavy-duty moisture-proof packaging with insured courier delivery across India.',
  },
  {
    q: 'Do you accept urgent / express event orders?',
    a: 'Depending on our studio production queue, express crafting (3–5 days rush) may be arranged. Please message us on WhatsApp with your wedding/event date and city to check rush slot availability.',
  },
]

function RoyalCornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`royal-corner-ornament ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6H40C55 6 70 12 80 22C90 32 94 48 94 62V94"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14H35C45 14 56 18 64 26C72 34 76 45 76 56V86"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="6" cy="6" r="3.5" fill="url(#cornerGoldDotOrder)" />
      <circle cx="28" cy="14" r="2" fill="#D8C9AE" />
      <circle cx="48" cy="22" r="2.5" fill="#D8C9AE" />
      <circle cx="94" cy="94" r="3" fill="#575757" />
      <path
        d="M6 35C15 35 22 28 22 19"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1.2"
      />
      <path
        d="M35 6C35 15 28 22 19 22"
        stroke="url(#cornerGoldGradOrder)"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id="cornerGoldGradOrder" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8C9AE" />
          <stop offset="0.4" stopColor="#A89678" />
          <stop offset="0.8" stopColor="#575757" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="cornerGoldDotOrder" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8C9AE" />
          <stop offset="1" stopColor="#575757" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function RoyalGoldCrest() {
  return (
    <svg
      className="royal-gold-crest"
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M80 4L85 18L98 22L85 26L80 40L75 26L62 22L75 18L80 4Z"
        fill="url(#crestGoldGradOrder)"
      />
      <circle cx="80" cy="22" r="3" fill="#D8C9AE" />
      <path
        d="M38 22C52 22 62 15 68 10C64 17 57 22 38 22Z"
        fill="url(#crestGoldGradOrder)"
      />
      <path
        d="M122 22C108 22 98 15 92 10C96 17 103 22 122 22Z"
        fill="url(#crestGoldGradOrder)"
      />
      <path
        d="M8 22H52"
        stroke="url(#crestGoldLineLOrder)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M108 22H152"
        stroke="url(#crestGoldLineROrder)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="18" cy="22" r="2.5" fill="#D8C9AE" />
      <circle cx="142" cy="22" r="2.5" fill="#D8C9AE" />
      <defs>
        <linearGradient id="crestGoldGradOrder" x1="62" y1="4" x2="98" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#D8C9AE" />
          <stop offset="1" stopColor="#575757" />
        </linearGradient>
        <linearGradient id="crestGoldLineLOrder" x1="8" y1="22" x2="52" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="0.6" stopColor="#D8C9AE" />
          <stop offset="1" stopColor="#575757" />
        </linearGradient>
        <linearGradient id="crestGoldLineROrder" x1="108" y1="22" x2="152" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#575757" />
          <stop offset="0.4" stopColor="#D8C9AE" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function RoyalGoldDivider() {
  return (
    <div className="royal-gold-divider" aria-hidden="true">
      <svg
        className="royal-gold-divider-svg"
        viewBox="0 0 260 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10" y1="12" x2="105" y2="12" stroke="url(#divGoldLOrder)" strokeWidth="1.5" />
        <circle cx="112" cy="12" r="2" fill="#D8C9AE" />
        <path
          d="M130 3L133 9.5L140 12L133 14.5L130 21L127 14.5L120 12L127 9.5L130 3Z"
          fill="url(#divGoldCOrder)"
        />
        <circle cx="148" cy="12" r="2" fill="#D8C9AE" />
        <line x1="155" y1="12" x2="250" y2="12" stroke="url(#divGoldROrder)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="divGoldLOrder" x1="10" y1="12" x2="105" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.6" stopColor="#D8C9AE" />
            <stop offset="1" stopColor="#575757" />
          </linearGradient>
          <linearGradient id="divGoldROrder" x1="155" y1="12" x2="250" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#575757" />
            <stop offset="0.4" stopColor="#D8C9AE" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="divGoldCOrder" x1="120" y1="3" x2="140" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.45" stopColor="#D8C9AE" />
            <stop offset="1" stopColor="#575757" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function CustomOrdersPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [occasion, setOccasion] = useState(occasions[0])
  const [craftStyle, setCraftStyle] = useState(craftStyles[0])
  const [size, setSize] = useState(sizes[1])
  const [palette, setPalette] = useState(palettes[0])
  const [details, setDetails] = useState('')
  const [deadline, setDeadline] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Format WhatsApp message with all consultation details
    const message = `*Custom Order Consultation Request - aura.kraftss*

*Client Details:*
• Name: ${name || 'Valued Customer'}
• Phone: ${phone || 'Not provided'}
• Email: ${email || 'Not provided'}

*Craft Specifications:*
• Occasion: ${occasion}
• Craft Category: ${craftStyle}
• Preferred Dimensions: ${size}
• Color Palette Theme: ${palette}
• Target Event Deadline: ${deadline || 'Flexible'}

*Customization Details, Names & Notes:*
"${details || 'I would like to discuss custom names, dates, motifs, and dimensions.'}"

_Sent via aura.kraftss Custom Order Consultation Form._`

    const waUrl = getWaLink(message)
    window.open(waUrl, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#F7F2E9] text-[#262626]">
      <Navbar currentPath="/custom-orders" />

      {/* Royal Gold Luxury Atelier Hero Banner */}
      <section className="royal-gallery-hero section-pad">
        {/* Soft Center Gold Radial Glow */}
        <div className="royal-gold-bg-glow" aria-hidden="true" />

        {/* 4 Corner Baroque Filigree Gold Ornaments */}
        <RoyalCornerOrnament className="royal-corner-top-left" />
        <RoyalCornerOrnament className="royal-corner-top-right" />
        <RoyalCornerOrnament className="royal-corner-bottom-left" />
        <RoyalCornerOrnament className="royal-corner-bottom-right" />

        {/* Hero Content Container */}
        <div className="max-w-[1020px] mx-auto px-4 text-center relative z-10">
          {/* Royal Glass Breadcrumb */}
          <div className="royal-breadcrumb-pill">
            <Link href="/">Home</Link>
            <span className="text-[#FDE68A] opacity-60">/</span>
            <span className="royal-breadcrumb-active">Custom Orders &amp; Contact</span>
          </div>

          {/* Royal Gold Crest Emblem */}
          <RoyalGoldCrest />

          {/* Eyebrow Badge */}
          <div className="royal-eyebrow-badge">
            <span>⚜</span>
            <span>Bespoke Craft Consultation</span>
            <span>⚜</span>
          </div>

          {/* Royal Metallic Gold Heading */}
          <h1 className="royal-gold-heading">
            Let&apos;s Shape Your Story Into a Cherished Keepsake.
          </h1>

          {/* Royal Gold Divider Ornament */}
          <RoyalGoldDivider />

          {/* Subtitle */}
          <p className="royal-gold-subtitle">
            Every custom creation is tailored from scratch. Share your names, dates, venue dimensions, or motifs below to start crafting your personalized heirloom piece.
          </p>

          {/* Royal Promise Highlights in Gold Glass */}
          <div className="royal-promise-bar">
            <span className="royal-promise-pill">
              <Sparkles size={13} className="text-[#FDE68A]" /> Direct WhatsApp Draft
            </span>
            <span className="royal-promise-pill">
              <Heart size={13} className="text-[#FDE68A]" /> 100% Artisanal Handcrafted
            </span>
            <span className="royal-promise-pill">
              <Gift size={13} className="text-[#FDE68A]" /> Signature Safe Packaging
            </span>
            <span className="royal-promise-pill">
              <ShieldCheck size={13} className="text-[#FDE68A]" /> Pan-India Insured Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section: Neumorphic Form + Studio Info */}
      <section className="section-pad neu-section !pt-12 !pb-20">
        <div className="custom-order-layout">
          {/* Column 1: Consultation & Inquiry Form (Neumorphic Card) */}
          <div className="neu-card">
            <div className="form-header">
              <div className="neu-badge">
                <span>⚜</span>
                <span>Direct Atelier Inquiry</span>
                <span>⚜</span>
              </div>
              <h2>Custom Order Consultation</h2>
              <p>
                Fill out your details below in our soft-touch consultation form. We will instantly format your order request and connect you directly with our artisan on WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="neu-success-card">
                <CheckCircle2 size={46} className="text-[#6D1A2A] mb-2" />
                <h3>Thank You, {name || 'Friend'}!</h3>
                <p>
                  Your custom order inquiry has been prepared. If your WhatsApp chat didn&apos;t open automatically, please click below:
                </p>
                <a
                  className="neu-btn-submit mt-4 !inline-flex !w-auto"
                  href={getWaLink(
                    `Hi! I just submitted a custom order inquiry for "${craftStyle}" on your website.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> Open WhatsApp Chat
                </a>
                <button
                  className="text-xs text-[#B86835] hover:underline mt-4 cursor-pointer"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="custom-inquiry-form">
                {/* Neumorphic Interactive Category Quick-Select Pills */}
                <div className="neu-pill-tray">
                  <div className="neu-pill-label">Quick Select Craft Style:</div>
                  {craftStyles.slice(0, 4).map((style) => (
                    <button
                      key={style}
                      type="button"
                      className={`neu-pill-btn ${craftStyle === style ? 'active' : ''}`}
                      onClick={() => setCraftStyle(style)}
                    >
                      <Sparkles
                        size={12}
                        className={craftStyle === style ? 'text-[#6D1A2A]' : 'text-[#8A6753]'}
                      />
                      <span>{style.split(' (')[0]}</span>
                    </button>
                  ))}
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="neu-input"
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp / Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="neu-input"
                      placeholder="e.g. +91 96077 78013"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input
                    id="email"
                    type="email"
                    className="neu-input"
                    placeholder="e.g. priya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion / Celebration *</label>
                    <select
                      id="occasion"
                      className="neu-select"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="craftStyle">Craft Category *</label>
                    <select
                      id="craftStyle"
                      className="neu-select"
                      value={craftStyle}
                      onChange={(e) => setCraftStyle(e.target.value)}
                    >
                      {craftStyles.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="size">Preferred Size / Dimensions</label>
                    <select
                      id="size"
                      className="neu-select"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="palette">Color Palette Theme</label>
                    <select
                      id="palette"
                      className="neu-select"
                      value={palette}
                      onChange={(e) => setPalette(e.target.value)}
                    >
                      {palettes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="deadline">Target Delivery Date / Event Deadline</label>
                  <input
                    id="deadline"
                    type="text"
                    className="neu-input"
                    placeholder="e.g. By next month 15th, or Flexible"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="details">
                    Customization Details, Names, Dates &amp; Notes *
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    required
                    className="neu-textarea"
                    placeholder="Tell us what names/dates to include (e.g. 'Aarav & Meera, 24th Dec 2024'), specific Sanskrit shlokas, venue runner length, or custom colors..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="neu-btn-submit">
                    <Send size={18} /> Submit Custom Inquiry on WhatsApp
                  </button>
                  <p className="form-note">
                    <ShieldCheck size={14} className="text-[#B86835] inline mr-1" />
                    You can share reference venue pictures &amp; invitations directly on WhatsApp after submitting.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Studio Information & Craft Process Card (Neumorphic) */}
          <div className="studio-info-col">
            {/* Direct Studio Contact Card */}
            <div className="neu-card studio-contact-card">
              <div className="neu-badge">
                <span>👑</span>
                <span>Direct Connect</span>
              </div>
              <h3>Direct Studio Contacts</h3>
              <p className="subtitle">
                Prefer talking directly? Connect with our craft studio through any channel below:
              </p>

              <div className="contact-items-list">
                <a
                  href={getWaLink("Hi! I'd like to discuss a custom order directly with aura.kraftss.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-contact-item group"
                >
                  <div className="neu-icon-well">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="contact-label">WhatsApp Quick Chat</span>
                    <span className="contact-val group-hover:text-[#6D1A2A]">
                      +91 96077 78013 &rarr;
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:aurakraftss09@gmail.com"
                  className="neu-contact-item group"
                >
                  <div className="neu-icon-well">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Email Concierge</span>
                    <span className="contact-val text-[#6D1A2A] hover:text-[#B86835]">
                      aurakraftss09@gmail.com
                    </span>
                  </div>
                </a>

                <div className="neu-contact-item">
                  <div className="neu-icon-well">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Instagram Atelier</span>
                    <a
                      href="https://instagram.com/aura.kraftss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-val text-[#6D1A2A] hover:text-[#B86835]"
                    >
                      @aura.kraftss
                    </a>
                  </div>
                </div>

                <div className="neu-contact-item">
                  <div className="neu-icon-well">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Studio &amp; Workshop</span>
                    <span className="contact-val">Jaipur, Rajasthan, India</span>
                  </div>
                </div>

                <div className="neu-contact-item">
                  <div className="neu-icon-well">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="contact-label">Studio Hours &amp; Response</span>
                    <span className="contact-val">Mon &ndash; Sat, 10 AM &ndash; 7 PM (within 2-4 hrs)</span>
                  </div>
                </div>
              </div>

              <div className="studio-perks-badge">
                <div className="neu-perk-pill">
                  <Gift size={14} className="text-[#6D1A2A]" /> Gift Boxed
                </div>
                <div className="neu-perk-pill">
                  <ShieldCheck size={14} className="text-[#6D1A2A]" /> Pan-India Delivery
                </div>
                <div className="neu-perk-pill">
                  <Heart size={14} className="text-[#6D1A2A]" /> 100% Handcrafted
                </div>
              </div>
            </div>

            {/* How It Works Card */}
            <div className="neu-card custom-journey-card">
              <div className="neu-badge">
                <span>✨</span>
                <span>Crafting Journey</span>
              </div>
              <h3>How Custom Orders Work</h3>
              <div className="journey-steps">
                <div className="journey-step">
                  <span className="neu-step-num">1</span>
                  <div>
                    <h4>Consultation &amp; Idea</h4>
                    <p>Share your wedding theme, aisle dimensions, names, or festival motifs with us.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <span className="neu-step-num">2</span>
                  <div>
                    <h4>Digital Layout Draft</h4>
                    <p>We review custom typography, floral borders, and color swatches together before crafting.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <span className="neu-step-num">3</span>
                  <div>
                    <h4>Handcrafted With Devotion</h4>
                    <p>Every floral element is placed and stitched with slow, attentive care.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <span className="neu-step-num">4</span>
                  <div>
                    <h4>Wrapped &amp; Shipped</h4>
                    <p>Safely packed in moisture-resistant craft boxing and dispatched with pan-India insured tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Royal Gold Theme */}
      <section className="royal-faq-section section-pad relative overflow-hidden">
        {/* Soft Center Gold Radial Glow */}
        <div className="royal-gold-bg-glow" aria-hidden="true" />

        {/* Ornate Gold Filigree Corner Accents */}
        <RoyalCornerOrnament className="royal-corner-top-left" />
        <RoyalCornerOrnament className="royal-corner-top-right" />

        <div className="max-w-[840px] mx-auto relative z-10">
          <div className="text-center mb-9">
            <div className="royal-eyebrow-badge mb-2.5">
              <span>⚜</span>
              <span>Clear Answers &amp; Craft Details</span>
              <span>⚜</span>
            </div>
            <h2 className="royal-gold-faq-heading">
              Frequently Asked Questions
            </h2>
            <RoyalGoldDivider />
            <p className="text-[#E6D7BD] text-sm md:text-base max-w-[620px] mx-auto opacity-90 leading-relaxed">
              Everything you need to know about our custom aisle runners, rangoli mats, preview drafts, and insured delivery.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <button className="faq-question" type="button" aria-expanded={openFaq === idx}>
                  <div className="faq-q-content">
                    <span className="faq-q-badge">0{idx + 1}</span>
                    <span>{faq.q}</span>
                  </div>
                  <div className={`faq-chevron-bubble ${openFaq === idx ? 'active' : ''}`}>
                    <ChevronDown
                      size={17}
                      className={`faq-chevron ${openFaq === idx ? 'rotated' : ''}`}
                    />
                  </div>
                </button>
                {openFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-pad cream-bg text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="eyebrow">Ready To Start?</p>
          <h2>Have an urgent question or specific theme?</h2>
          <p className="text-[#8A6753] mt-2 mb-6">
            Message us anytime on WhatsApp and we will guide you through wedding aisle runners, rangoli mat sizes, and custom estimates.
          </p>
          <a
            className="btn-primary inline-flex justify-center"
            href={getWaLink("Hi! I have a question about custom handmade orders with aura.kraftss.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Chat with Artist on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
