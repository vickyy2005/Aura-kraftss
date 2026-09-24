'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Sparkles,
  MessageCircle,
  Eye,
  X,
  ArrowRight,
  Heart,
  Palette,
} from 'lucide-react'

function InstagramIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const waNumber = '919607778013'
const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

interface GalleryItem {
  id: string
  title: string
  category: 'Aisle Runners' | 'Rangoli Mats' | 'Handmade Rugs' | 'Chowki & Decor'
  image: string
  desc: string
  details: string
  tags: string[]
  studio?: string
}

const galleryData: GalleryItem[] = [
  {
    id: 'aisle-1',
    title: 'Grand Saptpadi Wedding Entry Aisle Runner',
    category: 'Aisle Runners',
    image: '/attachments/1000379962.jpg',
    desc: 'Majestic wedding entryway and Saptapadi runner featuring vibrant geometric floral diamond steps in auspicious turmeric yellow, ruby red, emerald green, and lotus pink.',
    details: 'Customizable length • Traditional 7-step bridal motifs • Heavy anti-slip textured backing',
    tags: ['Saptpadi Wedding Step', 'Anti-Slip Backing', 'Bridal Entry Runner'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rug-1',
    title: 'Royal 3D Embossed Dancing Peacock Circular Floor Rug',
    category: 'Handmade Rugs',
    image: '/attachments/1000379968.jpg',
    desc: 'Exquisite sculpted 3D relief peacock rug with a velvety royal blue body and radiating iridescent emerald, gold, orange, and sapphire feathers.',
    details: 'Hand-tufted sculpted wool • Dimensional feather relief • Soft plush pile floor art',
    tags: ['Sculpted 3D Plumes', 'Plush Wool Texture', 'Statement Floor Art'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rangoli-1',
    title: 'Royal White Swan Floral Petal Rangoli Centerpiece',
    category: 'Rangoli Mats',
    image: '/attachments/1000379970.jpg',
    desc: 'Grand royal swan arrangement handcrafted with pristine white jasmine petals, blush pink wing accents, deep crimson rose bed, and floating brass diyas.',
    details: 'Signature swan floral composition • Brass diya integration • Grand festive entrance focal piece',
    tags: ['Swan Motif', 'Brass Diya Accents', 'Grand Centerpiece'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rangoli-2',
    title: 'Sacred Sunflower & Lotus Petal Round Rangoli Mat',
    category: 'Rangoli Mats',
    image: '/attachments/1000379971.jpg',
    desc: 'Artisanal circular mandala rangoli with layered marigold petals, scalloped cream arches, and deep crimson borders, perfectly paired with brass urli candles.',
    details: 'Reusable durable base • Sunburst lotus mandala pattern • Brass urli candle compatible',
    tags: ['Sunflower Medallion', 'Urli Diya Placement', 'Reusable Mat'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'aisle-2',
    title: 'Diamond Medallion Festive Hallway Runner',
    category: 'Aisle Runners',
    image: '/attachments/1000379964.jpg',
    desc: 'Stunning full-hallway runner mat with diamond concentric medallions in vibrant turmeric yellow, saffron, and fuchsia with rich emerald borders.',
    details: 'Full-length passage runner • Concentric diamond medallions • Festive wedding hallway decor',
    tags: ['Geometric Diamond', 'Festive Entryway', 'Heavy Duty Base'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'chowki-1',
    title: 'Hand-Knotted Auspicious Swastik Chowki Mat with Tassels',
    category: 'Chowki & Decor',
    image: '/attachments/1000379973.jpg',
    desc: 'Sacred ceremonial puja chowki cover featuring a bold white and red Swastik emblem surrounded by stepped multi-color borders and long cascading fringe tassels.',
    details: 'Hand-knotted textured wool • Sacred Swastik geometry • Cascading vertical fringe tassels',
    tags: ['Auspicious Swastik', 'Fringe Tassels', 'Puja Chowki Seat'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'aisle-3',
    title: 'Royal Peacock Crest Saptapadi Wedding Runner',
    category: 'Aisle Runners',
    image: '/attachments/1000379967.jpg',
    desc: 'Regal bridal aisle runner with an auspicious twin peacock motif at the entrance and jewel-toned diamond steps on a radiant saffron orange carpet.',
    details: 'Twin peacock entrance crest • Jewel diamond medallions • Bespoke length made to order',
    tags: ['Twin Peacocks', 'Saffron & Gold', 'Bespoke Length'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rug-2',
    title: 'Artisan Crochet Peacock Wall & Floor Accent Mat',
    category: 'Handmade Rugs',
    image: '/attachments/1000379969.jpg',
    desc: 'Charming artisanal crochet peacock floor mat handcrafted with royal blue body, emerald green plumes, and metallic gold concentric eyelets.',
    details: 'Pure cotton crochet yarn • Intricate fanned tail stitches • Dual-use floor mat or wall tapestry',
    tags: ['Handmade Crochet', 'Peacock Tail', 'Boho Artisan Decor'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'aisle-4',
    title: 'Royal Maroon & Golden Yellow Diamond Entry Runner',
    category: 'Aisle Runners',
    image: '/attachments/1000379966.jpg',
    desc: 'Opulent palace wedding runner with rich golden yellow center, royal blue and maroon diamond medallions, and triangular saw-tooth borders.',
    details: 'Palace wedding entryway • Sapphire & maroon diamond accents • Heavyweight non-slip build',
    tags: ['Maroon & Gold', 'Palace Wedding', 'Traditional Elegance'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rangoli-3',
    title: 'Vibrant Blossom Entryway Rangoli Mat',
    category: 'Rangoli Mats',
    image: '/attachments/1000379972.jpg',
    desc: 'Eight-petal festive blossom rangoli mat featuring sunny marigold yellow, ruby red, and leaf green petals, illuminated by balcony fairy lights.',
    details: 'Multi-petal floral symmetry • Washable & weather-tolerant • Evening fairy-light ambiance',
    tags: ['Balcony & Threshold', 'Festive Glow', 'Durable Base'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rug-3',
    title: 'Hand-Tufted Floral Mandala Circular Wool Rug',
    category: 'Handmade Rugs',
    image: '/attachments/1000379957.webp',
    desc: 'Round 8-petal mandala rug hand-tufted in premium wool, featuring contrasting jade green, crisp white, marigold yellow, and crimson red facets.',
    details: 'Circular mandala diameter • High-density tufted wool • Durable cotton canvas backing',
    tags: ['Hand-Tufted Wool', 'Floral Mandala', 'Premium Living Decor'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rug-4',
    title: 'Hand-Tufted Geometric Starburst Circular Rug',
    category: 'Handmade Rugs',
    image: '/attachments/1000379958.webp',
    desc: 'Dynamic circular starburst floor rug crafted with rich ruby red, saffron orange, turquoise, and white radiating faceted triangles.',
    details: 'Circular geometric sunburst • Thick cushioned pile • Vibrant focal rug for modern & ethnic spaces',
    tags: ['Geometric Starburst', 'Modern Traditional', 'Plush Pile'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'aisle-5',
    title: 'Floral Mosaic Grand Wedding Aisle Carpet Runner',
    category: 'Aisle Runners',
    image: '/attachments/1000379959.webp',
    desc: 'Grand full-scale wedding hall runner showcasing a breathtaking continuous floral diamond mosaic in marigold, rose, white jasmine, and emerald.',
    details: 'Extra-long grand hall coverage • Rich floral mosaic pattern • Ideal for bridal and groom processions',
    tags: ['Grand Aisle Carpet', 'Floral Mosaic', 'Wedding Ceremony'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'chowki-2',
    title: 'Floral Pom-Pom Candle Border Mats & Diya Runner',
    category: 'Chowki & Decor',
    image: '/attachments/1000379955.jpg',
    desc: 'Modular festive border mats crafted with purple and pink ombré floral pom-poms with brass tealight candle cups for ambient pathway lighting.',
    details: 'Modular pathway border pieces • Integrated candle holders • Glowing hallway decor',
    tags: ['Hallway Border', 'Tealight Candle Mats', 'Festive Ambiance'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'rangoli-4',
    title: 'Festive Corner Diya Rangoli Art Mat',
    category: 'Rangoli Mats',
    image: '/attachments/1000379956.webp',
    desc: 'Specialized corner-fit floral rangoli mat designed to accentuate entrance corners, accompanied by a traditional tall brass oil lamp and lit diyas.',
    details: 'Corner quarter-round geometry • Traditional brass samai placement • Vivid multi-color floral curves',
    tags: ['Corner Rangoli', 'Brass Samai Diya', 'Festive Sand Craft'],
    studio: 'aura.kraftss Studio',
  },
  {
    id: 'aisle-6',
    title: 'Celebration Saptapadi Heritage Runner Mat',
    category: 'Aisle Runners',
    image: '/attachments/1000379960.jpg',
    desc: 'Celebration edition of our signature Saptpadi aisle runner styled in an authentic home celebration setting with brass lamps and flower garlands.',
    details: 'Home celebration edition • Traditional 7 sacred wedding steps • Easy roll-up storage',
    tags: ['Heritage Saptapadi', 'Reusable Craft', 'Home Ceremony'],
    studio: 'aura.kraftss Studio',
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
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14H35C45 14 56 18 64 26C72 34 76 45 76 56V86"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="6" cy="6" r="3.5" fill="url(#cornerGoldDot)" />
      <circle cx="28" cy="14" r="2" fill="#D8C9AE" />
      <circle cx="48" cy="22" r="2.5" fill="#D8C9AE" />
      <circle cx="94" cy="94" r="3" fill="#575757" />
      <path
        d="M6 35C15 35 22 28 22 19"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.2"
      />
      <path
        d="M35 6C35 15 28 22 19 22"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id="cornerGoldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8C9AE" />
          <stop offset="0.4" stopColor="#A89678" />
          <stop offset="0.8" stopColor="#575757" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="cornerGoldDot" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
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
        fill="url(#crestGoldGrad)"
      />
      <circle cx="80" cy="22" r="3" fill="#D8C9AE" />
      <path
        d="M38 22C52 22 62 15 68 10C64 17 57 22 38 22Z"
        fill="url(#crestGoldGrad)"
      />
      <path
        d="M122 22C108 22 98 15 92 10C96 17 103 22 122 22Z"
        fill="url(#crestGoldGrad)"
      />
      <path
        d="M8 22H52"
        stroke="url(#crestGoldLineL)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M108 22H152"
        stroke="url(#crestGoldLineR)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="18" cy="22" r="2.5" fill="#D8C9AE" />
      <circle cx="142" cy="22" r="2.5" fill="#D8C9AE" />
      <defs>
        <linearGradient id="crestGoldGrad" x1="62" y1="4" x2="98" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#D8C9AE" />
          <stop offset="1" stopColor="#575757" />
        </linearGradient>
        <linearGradient id="crestGoldLineL" x1="8" y1="22" x2="52" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="0.6" stopColor="#D8C9AE" />
          <stop offset="1" stopColor="#575757" />
        </linearGradient>
        <linearGradient id="crestGoldLineR" x1="108" y1="22" x2="152" y2="22" gradientUnits="userSpaceOnUse">
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
        <line x1="10" y1="12" x2="105" y2="12" stroke="url(#divGoldL)" strokeWidth="1.5" />
        <circle cx="112" cy="12" r="2" fill="#D8C9AE" />
        <path
          d="M130 3L133 9.5L140 12L133 14.5L130 21L127 14.5L120 12L127 9.5L130 3Z"
          fill="url(#divGoldC)"
        />
        <circle cx="148" cy="12" r="2" fill="#D8C9AE" />
        <line x1="155" y1="12" x2="250" y2="12" stroke="url(#divGoldR)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="divGoldL" x1="10" y1="12" x2="105" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.6" stopColor="#D8C9AE" />
            <stop offset="1" stopColor="#575757" />
          </linearGradient>
          <linearGradient id="divGoldR" x1="155" y1="12" x2="250" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#575757" />
            <stop offset="0.4" stopColor="#D8C9AE" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="divGoldC" x1="120" y1="3" x2="140" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.45" stopColor="#D8C9AE" />
            <stop offset="1" stopColor="#575757" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | 'Aisle Runners' | 'Rangoli Mats' | 'Handmade Rugs' | 'Chowki & Decor'
  >('All')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory)

  const aisleRunnersCount = galleryData.filter((i) => i.category === 'Aisle Runners').length
  const rangoliMatsCount = galleryData.filter((i) => i.category === 'Rangoli Mats').length
  const handmadeRugsCount = galleryData.filter((i) => i.category === 'Handmade Rugs').length
  const chowkiDecorCount = galleryData.filter((i) => i.category === 'Chowki & Decor').length

  return (
    <main className="min-h-screen bg-[#F7F2E9] text-[#262626]">
      <Navbar currentPath="/gallery" />

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
            <span className="text-[#575757] opacity-50">/</span>
            <span className="royal-breadcrumb-active">Studio Archive</span>
          </div>

          {/* Royal Gold Crest Emblem */}
          <RoyalGoldCrest />

          {/* Eyebrow Badge */}
          <div className="royal-eyebrow-badge">
            <span>✦</span>
            <span>Royal Handcraft Archive</span>
            <span>✦</span>
          </div>

          {/* Royal Heading */}
          <h1 className="royal-gold-heading">
            A Glimpse into Our Art &amp; Stories
          </h1>

          {/* Italic Subtitle */}
          <p className="royal-hero-italic-subtitle">
            Explore our curated portfolio of handcrafted woolen carpets, rangoli mats &amp; wedding runners.
          </p>

          {/* Description Paragraph */}
          <p className="royal-hero-desc">
            Every creation in our studio archive was handcrafted with traditional artistry — from grand wedding Saptapadi runners and sacred floral rangoli mats to sculpted 3D peacock rugs and ceremonial chowki mats.
          </p>

          {/* Royal Gold Divider Ornament */}
          <RoyalGoldDivider />

          {/* Royal Promise Highlights in White/Glass Pills */}
          <div className="royal-promise-bar">
            <span className="royal-promise-pill">
              <Sparkles size={14} className="text-[#575757]" /> 100% Handcrafted
            </span>
            <span className="royal-promise-pill">
              <Heart size={14} className="text-[#575757]" /> Reusable &amp; Durable
            </span>
            <span className="royal-promise-pill">
              <Palette size={14} className="text-[#575757]" /> Custom Sizes &amp; Colors
            </span>
            <span className="royal-promise-pill">
              <MessageCircle size={14} className="text-[#575757]" /> By aura.kraftss Studio
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="section-pad cream-bg !pt-12 !pb-20">
        <div className="max-w-[1240px] mx-auto">
          {/* Top Filter Pill Bar */}
          <div className="gallery-filter-pill-bar">
            {(
              [
                ['All', `All (${galleryData.length})`],
                ['Aisle Runners', `Aisle Runners (${aisleRunnersCount})`],
                ['Rangoli Mats', `Rangoli Mats (${rangoliMatsCount})`],
                ['Handmade Rugs', `Handmade Rugs (${handmadeRugsCount})`],
                ['Chowki & Decor', `Chowki & Decor (${chowkiDecorCount})`],
              ] as const
            ).map(([catKey, label]) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey as any)}
                className={`gallery-filter-pill ${
                  selectedCategory === catKey ? 'active' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Full-Image Gallery Grid with Hover Pop Detail Cards */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card group"
                onClick={() => setActiveItem(item)}
              >
                {/* Full Image Display */}
                <div className="gallery-card-img-wrap">
                  <img src={item.image} alt={item.title} />

                  {/* Floating Pop-Up Detail Card on Hover (Matching Reference) */}
                  <div className="gallery-pop-card">
                    <div className="gallery-pop-header">
                      <span className="gallery-pop-badge">
                        {item.category.toUpperCase()}
                      </span>
                      <span className="gallery-pop-studio">
                        {item.studio || 'aura.kraftss'}
                      </span>
                    </div>

                    <h3 className="gallery-pop-title">{item.title}</h3>
                    <p className="gallery-pop-desc">{item.desc}</p>

                    <div className="gallery-pop-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="gallery-pop-tag">
                          {tag}
                        </span>
                      ))}
                      <span className="gallery-pop-inquire">
                        View &amp; Inquire &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="lightbox-backdrop" onClick={() => setActiveItem(null)}>
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveItem(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="lightbox-grid">
              <div className="lightbox-img-wrap">
                <img src={activeItem.image} alt={activeItem.title} />
              </div>
              <div className="lightbox-info">
                <span className="lightbox-category-tag">
                  {activeItem.category}
                </span>
                <h2>{activeItem.title}</h2>
                <p className="lightbox-desc">{activeItem.desc}</p>

                <div className="lightbox-spec-box">
                  <h4>Craft Specifications</h4>
                  <p>{activeItem.details}</p>
                </div>

                <div className="lightbox-actions">
                  <a
                    className="btn-primary w-full justify-center"
                    href={getWaLink(
                      `Hi! I saw the "${activeItem.title}" in your gallery archive. Can I order a similar custom piece?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} /> Inquire This Style on WhatsApp
                  </a>
                  <Link
                    href="/custom-orders"
                    className="text-link-olive text-sm inline-flex items-center justify-center gap-1.5 pt-2"
                  >
                    Or open full custom order form <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Feed Showcase Section */}
      <section className="olive-deep-bg section-pad text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="eyebrow !text-[#E6D7BD]">Studio Daily Life</p>
          <h2 className="text-white">Follow Behind the Art</h2>
          <p className="text-[#E6D7BD] mt-2 mb-8">
            Watch our daily botanical resin pouring reels, bridal mehandi designs, and studio stories on Instagram.
          </p>
          <a
            className="btn-primary btn-cream inline-flex"
            href="https://instagram.com/aura.kraftss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={18} /> @aura.kraftss on Instagram
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
