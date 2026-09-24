'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AiRangoliStudio from '@/components/ai-customizer/AiRangoliStudio'
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Truck,
  Layers,
  Palette,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Scissors,
  CheckCircle2,
} from 'lucide-react'

const waNumber = '919607778013'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

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
        stroke="url(#cornerGoldGradStudio)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 14H35C45 14 56 18 64 26C72 34 76 45 76 56V86"
        stroke="url(#cornerGoldGradStudio)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <circle cx="6" cy="6" r="3.5" fill="url(#cornerGoldDotStudio)" />
      <circle cx="28" cy="14" r="2.2" fill="#D4AF37" />
      <circle cx="48" cy="22" r="2.5" fill="#E5B942" />
      <circle cx="94" cy="94" r="3" fill="#D4AF37" />
      <path
        d="M6 35C15 35 22 28 22 19"
        stroke="url(#cornerGoldGradStudio)"
        strokeWidth="1.5"
      />
      <path
        d="M35 6C35 15 28 22 19 22"
        stroke="url(#cornerGoldGradStudio)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="cornerGoldGradStudio" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF2B2" />
          <stop offset="0.3" stopColor="#E5B942" />
          <stop offset="0.7" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#B38018" />
        </linearGradient>
        <linearGradient id="cornerGoldDotStudio" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF4BD" />
          <stop offset="0.5" stopColor="#E5B942" />
          <stop offset="1" stopColor="#A67414" />
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
        fill="url(#crestGoldGradStudio)"
      />
      <circle cx="80" cy="22" r="3" fill="#D4AF37" />
      <path
        d="M38 22C52 22 62 15 68 10C64 17 57 22 38 22Z"
        fill="url(#crestGoldGradStudio)"
      />
      <path
        d="M122 22C108 22 98 15 92 10C96 17 103 22 122 22Z"
        fill="url(#crestGoldGradStudio)"
      />
      <path
        d="M8 22H52"
        stroke="url(#crestGoldLineLStudio)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M108 22H152"
        stroke="url(#crestGoldLineRStudio)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="18" cy="22" r="2.5" fill="#D4AF37" />
      <circle cx="142" cy="22" r="2.5" fill="#D4AF37" />
      <defs>
        <linearGradient id="crestGoldGradStudio" x1="62" y1="4" x2="98" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF6C7" />
          <stop offset="0.45" stopColor="#E5B942" />
          <stop offset="1" stopColor="#A67414" />
        </linearGradient>
        <linearGradient id="crestGoldLineLStudio" x1="8" y1="22" x2="52" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="0.6" stopColor="#E5B942" />
          <stop offset="1" stopColor="#B38018" />
        </linearGradient>
        <linearGradient id="crestGoldLineRStudio" x1="108" y1="22" x2="152" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B38018" />
          <stop offset="0.4" stopColor="#E5B942" />
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
        <line x1="10" y1="12" x2="105" y2="12" stroke="url(#divGoldLStudio)" strokeWidth="1.5" />
        <circle cx="112" cy="12" r="2" fill="#D4AF37" />
        <path
          d="M130 3L133 9.5L140 12L133 14.5L130 21L127 14.5L120 12L127 9.5L130 3Z"
          fill="url(#divGoldCStudio)"
        />
        <circle cx="148" cy="12" r="2" fill="#D4AF37" />
        <line x1="155" y1="12" x2="250" y2="12" stroke="url(#divGoldRStudio)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="divGoldLStudio" x1="10" y1="12" x2="105" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.6" stopColor="#E5B942" />
            <stop offset="1" stopColor="#B38018" />
          </linearGradient>
          <linearGradient id="divGoldRStudio" x1="155" y1="12" x2="250" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B38018" />
            <stop offset="0.4" stopColor="#E5B942" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="divGoldCStudio" x1="120" y1="3" x2="140" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF8D1" />
            <stop offset="0.45" stopColor="#E5B942" />
            <stop offset="1" stopColor="#A67414" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function DesignRangoliPage() {
  const customProcessSteps = [
    {
      step: '01',
      title: 'AI Visualization & Concept',
      desc: 'Type your ideas in plain words, select shapes, sizes, and sacred Indian motifs, then generate a realistic 3D woolen preview in seconds.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Yarn Matching & Dyeing',
      desc: 'Our Jaipur atelier color-matches premium plush wool yarns to your exact festive palette, wedding theme, and interior decor.',
      icon: Palette,
    },
    {
      step: '03',
      title: 'Hand-Tufting & 3D Sculpting',
      desc: 'Master artisans hand-knot plush wool loops with multi-level sculpted relief for peacocks, lotus petals, and sacred mandala chakras.',
      icon: Scissors,
    },
    {
      step: '04',
      title: 'Zari Embroidery & Delivery',
      desc: 'Finished with metallic gold zari borders, non-slip backing, and pom-pom fringe, safely packaged with pan-India insured shipping.',
      icon: Truck,
    },
  ]

  const faqs = [
    {
      q: 'How does the AI Rangoli Designer work?',
      a: 'The studio combines advanced generative design with real product photography of our woolen crafts. You can type any custom vision (e.g. “round 4×4 ft peacock in royal blue and gold”) or select options to preview a realistic 3D textile mat before ordering.',
    },
    {
      q: 'Can any design generated here actually be handmade?',
      a: 'Yes! Every pattern, shape, and palette offered in this studio is crafted within our Jaipur workshop capabilities. Our master weavers will translate your digital preview into a tangible heirloom rug.',
    },
    {
      q: 'What materials are used for the physical mats?',
      a: 'We use 100% premium plush wool and cotton blended yarns with high knot-density, reinforced anti-slip cotton canvas backing, and hand-embroidered metallic gold zari threads.',
    },
    {
      q: 'Can I order custom sizes larger than 4×4 ft?',
      a: 'Absolutely. We regularly handcraft extra-long Saptapadi wedding aisle runners up to 25 ft and grand banquet hall carpets. Select “Custom Size” or message us on WhatsApp with your exact room dimensions.',
    },
    {
      q: 'How long does handcrafting and delivery take?',
      a: 'Standard mats (2×2 to 4×4 ft) take approximately 7–12 business days to hand-knot and detail. Custom grand runners take 14–21 days. We provide insured pan-India tracking.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF0F5] text-[#380D1D]">
      {/* Global Navigation */}
      <Navbar currentPath="/design-rangoli" />

      {/* Royal Gold Luxury Atelier Hero Banner */}
      <section className="royal-gallery-hero">
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
            <span className="text-[#D4AF37] opacity-60">/</span>
            <span className="royal-breadcrumb-active">AI Rangoli Studio</span>
          </div>

          {/* Royal Gold Crest Emblem */}
          <RoyalGoldCrest />

          {/* Eyebrow Badge */}
          <div className="royal-eyebrow-badge">
            <span className="text-[#D4AF37]">✦</span>
            <span>Aura Kraftss Generative Atelier</span>
            <span className="text-[#D4AF37]">✦</span>
          </div>

          {/* Royal Heading */}
          <h1 className="royal-gold-heading">
            Design Your Own Rangoli
          </h1>

          {/* Italic Subtitle matching reference screenshot */}
          <p className="royal-hero-italic-subtitle">
            Turn your imagination into a photorealistic 3D handcrafted woolen rangoli mat.
          </p>

          {/* Description Paragraph matching reference screenshot */}
          <p className="royal-hero-desc">
            Type what you envision, choose your shapes, sizes, motifs, and colors, then watch our AI studio generate a realistic woolen textile preview with plush 3D depth and authentic studio lighting.
          </p>

          {/* Royal Gold Divider Ornament */}
          <RoyalGoldDivider />

          {/* Royal Promise Highlights in White/Glass Pills */}
          <div className="royal-promise-bar">
            <span className="royal-promise-pill">
              <Sparkles size={14} className="text-[#B38018]" /> Real 3D Textile Preview
            </span>
            <span className="royal-promise-pill">
              <Heart size={14} className="text-[#B38018]" /> 100% Hand-knotted Wool
            </span>
            <span className="royal-promise-pill">
              <ShieldCheck size={14} className="text-[#B38018]" /> Jaipur Master Craft
            </span>
            <span className="royal-promise-pill">
              <Truck size={14} className="text-[#B38018]" /> Pan-India Insured Shipping
            </span>
          </div>
        </div>
      </section>

      {/* Main AI Designer Studio Section */}
      <AiRangoliStudio />

      {/* The Crafting Process: From AI Screen to Physical Loom */}
      <section className="py-20 px-4 md:px-8 bg-white border-y border-[rgba(87,87,87,0.2)] relative">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#575757] mb-2">
              <Sparkles size={13} className="text-[#575757]" />
              <span>From Digital Vision to Physical Heirloom</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#575757] tracking-tight">
              How Your Custom Rangoli is Handcrafted
            </h2>
            <p className="text-sm text-[#6E6E6E] mt-2">
              Every design generated in our AI studio is translated by master weavers into high-density woolen floor art.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customProcessSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className="bg-[#F7F2E9] p-6 rounded-2xl border border-[rgba(87,87,87,0.2)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-bold text-[#575757]">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#D8C9AE] flex items-center justify-center text-[#575757] shadow-xs group-hover:bg-[#575757] group-hover:text-[#F7F2E9] transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#575757] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[rgba(87,87,87,0.18)] flex items-center gap-1.5 text-[11px] font-semibold text-[#575757]">
                    <CheckCircle2 size={12} />
                    <span>Artisan Certified</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 md:px-8 bg-[#F7F2E9] relative">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#575757] mb-2">
              <HelpCircle size={14} className="text-[#575757]" />
              <span>Studio FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#575757]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#6E6E6E] mt-2">
              Everything you need to know about customizing and ordering your AI-designed rangoli mat.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-5 md:p-6 rounded-2xl border border-[rgba(87,87,87,0.18)] shadow-xs"
              >
                <h4 className="text-base font-serif font-bold text-[#575757] mb-2 flex items-start gap-2.5">
                  <span className="text-[#575757] text-sm shrink-0">⚜</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed pl-6 m-0">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#3D0C1D] via-[#52132A] to-[#3D0C1D] text-[#FFF0F5] text-center relative overflow-hidden border-t-2 border-b-2 border-[#D4AF37]/40">
        <div
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[720px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#E5B942' }}>
            <Sparkles size={14} className="text-[#E5B942]" />
            <span>Direct Artist Consultation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-3 drop-shadow-sm" style={{ color: '#FFFFFF' }}>
            Have a Specific Wedding Hall or Entrance in Mind?
          </h2>

          <p className="text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: '#FCE7F0' }}>
            Send us your hall dimensions, decor themes, or ceremony dates on WhatsApp and our artisans will tailor custom digital sketches and yarn swatches for your auspicious day.
          </p>

          <a
            href={getWaLink("Hi! I was designing a custom rangoli mat on your website and would like to consult with an artisan directly.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#A82855] hover:bg-[#8A1A42] font-bold text-sm md:text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border border-[#E8A5BD] cursor-pointer"
            style={{ backgroundColor: '#A82855', color: '#FFFFFF', borderColor: '#E8A5BD' }}
          >
            <MessageCircle size={18} />
            <span>Chat Directly on WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  )
}
