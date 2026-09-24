'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import {
  ArrowDown,
  ArrowRight,
  Check,
  Heart,
  MessageCircle,
  Sparkles,
  Gift,
  Palette,
  Clock,
  ShieldCheck,
  Star,
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

function HandDrawnHeart({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 31.5 C16.5 29.8 6.5 21.5 5.5 14.5 C4.8 9.5 8.2 5.5 13.2 5.5 C16 5.5 18.5 7 19.8 9.2 C21.1 7 23.6 5.5 26.4 5.5 C31.4 5.5 34.8 9.5 34.1 14.5 C33.1 21.5 23.1 29.8 21.6 31.5 L19.8 33 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BotanicalBranch({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Stem Line */}
      <line x1="8" y1="18" x2="152" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* Leaf Pair 1 (Leftmost) */}
      <path d="M 22 18 C 18 10 12 7 9 11 C 7 15 14 17 22 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 22 18 C 18 26 12 29 9 25 C 7 21 14 19 22 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 2 */}
      <path d="M 46 18 C 42 10 36 7 33 11 C 31 15 38 17 46 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 46 18 C 42 26 36 29 33 25 C 31 21 38 19 46 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 3 */}
      <path d="M 70 18 C 66 10 60 7 57 11 C 55 15 62 17 70 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 70 18 C 66 26 60 29 57 25 C 55 21 62 19 70 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 4 */}
      <path d="M 94 18 C 90 10 84 7 81 11 C 79 15 86 17 94 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 94 18 C 90 26 84 29 81 25 C 79 21 86 19 94 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Leaf Pair 5 */}
      <path d="M 118 18 C 114 10 108 7 105 11 C 103 15 110 17 118 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 118 18 C 114 26 108 29 105 25 C 103 21 110 19 118 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

      {/* Tip Leaf (Rightmost) */}
      <path d="M 142 18 C 146 14 153 14 155 18 C 153 22 146 22 142 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

const waNumber = '919607778013'

const getWaLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

const defaultWaLink = getWaLink("Hi! I'd like to discuss a custom Wedding Runner / Rangoli Mat with aura.kraftss.")

const images = {
  stitch: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=85',
  artist: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
}

const heroBackgrounds = [
  {
    url: '/hero-craft-1.jpg',
    alt: 'Handcrafted circular peacock art rug by aura.kraftss',
  },
  {
    url: '/hero-craft-2.jpg',
    alt: 'Handcrafted floral mandala circular rug by aura.kraftss',
  },
  {
    url: '/hero-craft-3.jpg',
    alt: 'Handmade pom-pom border floral rangoli mat by aura.kraftss',
  },
]

interface CategoryItem {
  title: string
  desc: string
  image: string
  tag: string
  badge: string
  highlight: string
}

const categories: CategoryItem[] = [
  {
    title: 'Wedding Saptapadi & Aisle Runners',
    desc: 'Grand ceremonial entry runners crafted with traditional geometric floral motifs for auspicious wedding steps.',
    image: '/attachments/1000379962.jpg',
    tag: 'Aisle Runners',
    badge: 'Wedding Bestseller',
    highlight: 'Traditional Saptapadi Steps',
  },
  {
    title: 'Royal 3D Peacock & Tufted Rugs',
    desc: 'Exquisite hand-embossed 3D peacock floor rugs with sculpted vibrant feathers and plush wool texture.',
    image: '/attachments/1000379968.jpg',
    tag: 'Tufted Rugs',
    badge: 'Artisan Masterpiece',
    highlight: 'Sculpted 3D Relief',
  },
  {
    title: 'Festive Floral Rangoli Mats',
    desc: 'Intricate mandala and lotus flower rangoli mats designed for Diwali, weddings, and welcoming entrance decor.',
    image: '/attachments/1000379971.jpg',
    tag: 'Rangoli Mats',
    badge: 'Reusable & Durable',
    highlight: 'Everlasting Floral Rangoli',
  },
  {
    title: 'Ceremonial Chowki & Puja Mats',
    desc: 'Handcrafted sacred Swastik puja chowki covers embellished with cascading colorful pom-pom fringe tassels.',
    image: '/attachments/1000379973.jpg',
    tag: 'Puja Decor',
    badge: 'Auspicious Swastik',
    highlight: 'Cascading Fringe Tassels',
  },
  {
    title: 'Grand Floral Swan Heritage Art',
    desc: 'Opulent white swan floral compositions surrounded by fresh rose petals, betel leaves, and glowing brass diyas.',
    image: '/attachments/1000379970.jpg',
    tag: 'Heritage Art',
    badge: 'Festive Centerpiece',
    highlight: 'Sacred Swan & Diyas',
  },
  {
    title: 'Handcrafted Crochet & Fiber Decor',
    desc: 'Intricate artisan crochet peacock mats and textured wool wall & floor hangings made with love.',
    image: '/attachments/1000379969.jpg',
    tag: 'Fiber Art',
    badge: 'Handmade Crochet',
    highlight: 'Artisan Needlecraft',
  },
]

const galleryImages = [
  {
    image: '/attachments/1000379968.jpg',
    title: 'Royal 3D Embossed Dancing Peacock Circular Rug',
    badge: 'HANDMADE RUG',
    desc: 'Sculpted high-density wool rug featuring a majestic dancing peacock with vivid eye plumage.',
    tags: ['Sculpted 3D Plumes', 'Plush Wool Texture', 'Statement Floor Art'],
  },
  {
    image: '/attachments/1000379970.jpg',
    title: 'Royal White Swan Floral Petal Rangoli',
    badge: 'RANGOLI ART',
    desc: 'Signature swan floral arrangement adorned with pristine white petals, crimson rose base, and warm brass diyas.',
    tags: ['Swan Motif', 'Brass Diya Accents', 'Grand Centerpiece'],
  },
  {
    image: '/attachments/1000379962.jpg',
    title: 'Grand Saptpadi Wedding Entry Aisle Runner Mat',
    badge: 'AISLE RUNNER',
    desc: 'Festive ceremonial entry carpet featuring floral diamond steps for a royal bridal entrance.',
    tags: ['Saptpadi Wedding Step', 'Anti-Slip Backing', 'Rich Festive Hues'],
  },
  {
    image: '/attachments/1000379971.jpg',
    title: 'Sacred Sunflower & Lotus Petal Round Rangoli Mat',
    badge: 'RANGOLI MAT',
    desc: 'Concentric floral medallion rangoli with rich yellow petals, ivory arches, and brass urli pairing.',
    tags: ['Sunflower Medallion', 'Diya Urli Placement', 'Reusable Mat'],
  },
  {
    image: '/attachments/1000379973.jpg',
    title: 'Auspicious Swastik Chowki Mat with Tassels',
    badge: 'PUJA CHOWKI',
    desc: 'Hand-knotted sacred Swastik ceremonial seat cover with dense multi-color hanging fringe tassels.',
    tags: ['Auspicious Swastik', 'Fringe Tassels', 'Puja Ceremonial'],
  },
  {
    image: '/attachments/1000379967.jpg',
    title: 'Peacock Crest Multicolored Wedding Runner',
    badge: 'WEDDING RUNNER',
    desc: 'Radiant saffron orange bridal aisle runner highlighted with twin peacock medallions and jewel diamonds.',
    tags: ['Twin Peacocks', 'Saffron & Gold', 'Custom Length'],
  },
]

const occasions = [
  'Wedding & Reception',
  'Anniversary Milestone',
  'Birthday Surprise',
  'Baby Shower & Birth',
  'Housewarming Blessing',
  'Graduation & Success',
  'Festive & Diwali Gifting',
  'Just Because Love',
]

const customChips = [
  'Wedding Aisle Runners',
  'Floral Rangoli Mats',
  'Custom Dimensions',
  '3D Peacock Floor Rugs',
  'Swastik Chowki Mats',
  'Festive Color Themes',
  'Diya & Urli Setups',
]

const valueProps = [
  {
    icon: Sparkles,
    title: '100% Handcrafted',
    desc: 'Zero machine prints. Every resin preservation, mehandi stroke, and thread piece is made by artisan hands.',
  },
  {
    icon: Palette,
    title: 'Custom To Your Taste',
    desc: 'Choose from a soothing palette of warm creams, olive greens, and earthy tones.',
  },
  {
    icon: Gift,
    title: 'Gift-Ready Packaging',
    desc: 'Arrives in signature craft boxing with butter paper and handwritten note cards.',
  },
  {
    icon: ShieldCheck,
    title: 'Keepsake Durability',
    desc: 'Made with high-clarity UV-resistant resin, organic sojat henna, and archival materials.',
  },
]

const testimonials = [
  {
    name: 'Priya & Rohan Sharma',
    city: 'Jaipur, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Anniversary Floral Resin Disc',
    stars: 5,
    quote:
      'Sachi bolu toh anniversary resin keepsake dekh ke meri wife almost emotional ho gayi thi! Real preserved petals aur couple photo crystal resin mein itne neatly set hain. Packaging was super premium with handwritten card!',
    time: 'Verified Order • 2 weeks ago',
  },
  {
    name: 'Ananya Deshmukh',
    city: 'Bandra, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Royal 3D Peacock Woolen Rug',
    stars: 5,
    quote:
      'Living room ke liye Peacock 3D woolen rug order kiya tha, and trust me, photos don’t do justice! Real mein room lighting ke sath itna classy aur luxurious look deta hai. WhatsApp pe design discussion bhi super smooth tha.',
    time: 'Verified Order • 1 month ago',
  },
  {
    name: 'Riya & Kabir Sen',
    city: 'Koramangala, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Dulhan Storyline Bridal Mehandi',
    stars: 5,
    quote:
      'Wedding ke liye Radha Krishna aur doli theme bridal mehandi lagwayi thi, aur har guest ne poochha ki kahan se lagwayi! Deep dark stain aur intricate jali detailing 10/10 hai. Truly unforgettable!',
    time: 'Verified Order • 3 weeks ago',
  },
  {
    name: 'Meera & Aditya Singhania',
    city: 'Udaipur, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Grand Saptapadi Wedding Aisle Runner',
    stars: 5,
    quote:
      'Hamari grand wedding entry ke liye 22-foot Saptapadi runner customize karwaya. The plush woolen softness, rich festive red border, and anti-slip backing were top-notch. Photographers aur guests sabhi mesmerized the!',
    time: 'Verified Order • 5 days ago',
  },
  {
    name: 'Kavita Chawla',
    city: 'Civil Lines, Delhi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Sacred Sunflower & Lotus Rangoli Mat',
    stars: 5,
    quote:
      'Har saal Diwali pe powder rangoli bikharti thi. Ye reusable floral woolen mat liya aur problem solve! Center urli aur brass diyas ke sath bilkul royal mandir jaisa festive setup ban gaya. Super easy to store!',
    time: 'Verified Order • 2 weeks ago',
  },
  {
    name: 'Sneha & Varun Nair',
    city: 'Kochi, Kerala',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Handcrafted Swastik Chowki Mat',
    stars: 5,
    quote:
      'Grah Pravesh puja ke liye sacred Swastik chowki mat with colorful hanging tassels order kiya. Knotting density aur wool quality exceptional hai. Handcrafted in India product at its absolute finest!',
    time: 'Verified Order • 1 month ago',
  },
  {
    name: 'Pooja Agarwal',
    city: 'Park Street, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Royal White Swan Heritage Mat',
    stars: 5,
    quote:
      'Reception stage entrance pe White Swan floral mat lagwaya tha. Pristine white petals and rose contrast look so opulent in person. Packing safe aayi aur shipment tracking bhi regular milti rahi.',
    time: 'Verified Order • 3 weeks ago',
  },
  {
    name: 'Tanvi & Harsh Vardhan',
    city: 'Banjara Hills, Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=240&h=240&q=80',
    orderedItem: 'Twin Peacock Crest Bridal Runner',
    stars: 5,
    quote:
      'Custom aisle runner with saffron diamonds and twin peacocks was the highlight of our varmala ceremony! It feels so royal underfoot and looked spectacular in wedding videos. Thank you aura.kraftss!',
    time: 'Verified Order • 1 week ago',
  },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroReady, setHeroReady] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)


  useEffect(() => {
    // 1. Trigger hero entrance animation smoothly on mount
    const heroTimer = setTimeout(() => {
      setHeroReady(true)
    }, 80)

    // 2. Auto-cycle through the 3 hero background images
    const slideTimer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroBackgrounds.length)
    }, 5000)

    // 3. Setup IntersectionObserver for scroll-triggered reveals (animates once per page load)
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elementsToObserve = document.querySelectorAll(
      '.reveal-section, .reveal-card, .reveal-steps, .reveal-split-left, .reveal-split-right, .reveal-cta'
    )
    elementsToObserve.forEach((el) => observer.observe(el))

    // 4. Navbar scroll listener & subtle desktop parallax
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 50)

          // Subtle desktop parallax (clamped to max 12px)
          if (window.innerWidth > 820) {
            const slides = document.querySelectorAll('.hero-bg-slide') as NodeListOf<HTMLElement>
            if (slides.length && scrollY < 800) {
              slides.forEach((slide) => {
                slide.style.backgroundPositionY = `${scrollY * 0.12}px`
              })
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      clearTimeout(heroTimer)
      clearInterval(slideTimer)
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#FFF0F5] text-[#380D1D]">
      {/* Sticky Header with Smooth Scroll Blur & Shadow */}
      <Navbar currentPath="/" />

      {/* Hero Section with Auto-Changing 3-Image Background Slider */}
      <section className={`hero section-pad cream-bg ${heroReady ? 'hero-ready' : ''}`} id="home">
        {/* Background 3-Image Slider Layer with Smooth Crossfade */}
        <div className="hero-bg-slider" aria-hidden="true">
          {heroBackgrounds.map((bg, idx) => (
            <div
              key={bg.url}
              className={`hero-bg-slide ${currentHeroIndex === idx ? 'active' : ''}`}
            >
              <img
                src={bg.url}
                alt={bg.alt}
                className="hero-bg-slide-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className="hero-bg-gradient-overlay" />
        </div>

        {/* Hero Content Copy */}
        <div className="hero-copy">
          <div className="hero-eyebrow-badge hero-reveal-1">
            <span>WEDDING AISLE RUNNERS</span>
            <span className="hero-dot">•</span>
            <span>FESTIVE RANGOLI MATS</span>
            <span className="hero-dot">•</span>
            <span>HANDCRAFTED RUGS</span>
          </div>

          <h1 className="hero-heading hero-reveal-2">
            <span>Your Floor. Your Art.</span>
            <span className="hero-heading-line2">
              Your Aura.
              <HandDrawnHeart className="hero-heart-icon" />
            </span>
          </h1>

          <div className="hero-divider hero-reveal-3" />

          <p className="hero-subtitle hero-reveal-4">
            Grand Saptapadi wedding aisle runners, reusable floral rangoli mats, sculpted 3D peacock floor rugs, and ceremonial chowki covers handcrafted with timeless devotion.
          </p>

          <div className="hero-botanical-wrap hero-reveal-5">
            <BotanicalBranch className="hero-botanical-icon" />
          </div>

          <div className="btn-row hero-reveal-6">
            <a className="btn-primary" href="#categories">
              Explore Collection <ArrowDown size={17} />
            </a>
            <Link
              className="text-link-olive"
              href="/design-rangoli"
            >
              Design Your Rangoli <Sparkles size={16} />
            </Link>
          </div>
        </div>

      </section>

      {/* Collection Categories Section (Olive Green Background) */}
      <section className="olive-bg section-pad reveal-section" id="categories">
        <div className="section-heading">
          <p className="eyebrow">
            <Sparkles size={14} className="text-[#F8B4C9]" /> The Collection
          </p>
          <h2>
            Made by hand, <br />
            <em className="text-[#F8B4C9] italic font-normal">curated for moments.</em>
          </h2>
          <p>
            Explore our curated collections of botanical hoops, custom name frames, delicate crochet crafts, and milestone keepsakes.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((cat, idx) => (
            <Link
              className="category-card reveal-card group"
              key={cat.title}
              style={{ '--stagger-idx': idx } as React.CSSProperties}
              href="/gallery"
            >
              {/* Full Artwork Image */}
              <div className="category-card-img-wrap">
                <img src={cat.image} alt={cat.title} />
                <div className="category-card-sheen" />
              </div>

              {/* Floating Top Badges */}
              <div className="category-card-top-tags">
                <span className="category-tag-top-left">{cat.tag}</span>
                <div className="category-card-badge">
                  <span className="category-badge-dot" />
                  <span>{cat.badge}</span>
                </div>
              </div>

              {/* Glassmorphic Animated Bottom Drawer */}
              <div className="category-card-glass-drawer">
                <span className="category-highlight-txt">{cat.highlight}</span>
                <h3 className="category-card-title">{cat.title}</h3>
                <p className="category-card-desc">{cat.desc}</p>
                <div className="category-card-cta">
                  <span>Explore Collection</span>
                  <div className="action-arrow-circle">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Custom Orders Interactive Section (Split Entrance) */}
      <section className="section-pad cream-bg reveal-section" id="custom-orders">
        <div className="custom-order-wrapper">
          <img
            src="/attachments/1000379970.jpg"
            alt="Royal White Swan Floral Petal Rangoli with glowing brass diyas by aura.kraftss"
            className="custom-order-image object-cover reveal-split-left"
          />
          <div className="custom-order-content reveal-split-right">
            <p className="eyebrow">Custom Creations</p>
            <h2>
              Have an idea in mind? <br />
              <em className="text-[#A82855] italic font-normal">We&apos;ll craft your vision.</em>
            </h2>
            <p className="text-[#783F53] my-4 leading-relaxed">
              Every detail is made just for you. Share your wedding theme, entrance dimensions, festive color palette, or custom motif, and we will handcraft bespoke aisle runners, floral rangoli mats, and ceremonial decor tailored for your special celebration.
            </p>

            <div className="pills-cloud">
              {customChips.map((chip) => (
                <span key={chip} className="pill-item">
                  {chip}
                </span>
              ))}
            </div>

            <div className="btn-row">
              <Link className="btn-primary" href="/custom-orders">
                <Sparkles size={16} /> Custom Order &amp; Consultation Page <ArrowRight size={16} />
              </Link>
              <a
                className="text-link-olive"
                href={getWaLink("Hi! I have a custom Resin Keepsake or Bridal Mehandi design in mind that I'd like to order.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> Direct WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section (Shop by Occasion Stagger) */}
      <section className="olive-bg section-pad reveal-section">
        <div className="section-heading">
          <p className="eyebrow">For Every Chapter</p>
          <h2>Crafted for Every Little Milestone</h2>
          <p>
            Whether it is a wedding, anniversary, festive celebration, or bridal mehandi ceremony, our handmade creations add sentimental warmth to any celebration.
          </p>
        </div>

        <div className="occasion-grid">
          {occasions.map((occ, idx) => (
            <a
              href={getWaLink(`Hi! I want to create a personalized handmade gift for a ${occ}.`)}
              key={occ}
              className="occasion-tile reveal-card group"
              style={{ '--stagger-idx': idx } as React.CSSProperties}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles size={18} className="text-[#F8B4C9] shrink-0" />
              <span>{occ}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Gallery Section (Artistic Staggered Entrance) */}
      <section className="olive-deep-bg section-pad reveal-section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Studio Showcase</p>
          <h2>A Glimpse into Our Creations</h2>
          <p>
            A visual chronicle of our botanical resin preservation, bridal mehandi storytelling, and handcrafted keepsakes.
          </p>
        </div>

        <div className="gallery-masonry-grid">
          {galleryImages.map((item, idx) => (
            <Link
              href="/gallery"
              className="gallery-card group reveal-card"
              key={idx}
              style={{ '--stagger-idx': idx } as React.CSSProperties}
            >
              <div className="gallery-card-img-wrap">
                <img src={item.image} alt={item.title} />

                {/* Floating Pop-Up Detail Card on Hover */}
                <div className="gallery-pop-card">
                  <div className="gallery-pop-header">
                    <span className="gallery-pop-badge">{item.badge}</span>
                    <span className="gallery-pop-studio">aura.kraftss</span>
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
                      View Piece &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            className="btn-primary btn-cream"
            href="/gallery"
          >
            <Sparkles size={16} /> View Full Studio Gallery (18+ Works) <ArrowRight size={15} />
          </Link>
          <a
            className="text-link-cream"
            href="https://instagram.com/aura.kraftss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={17} /> @aura.kraftss on Instagram <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Why Handmade Value Props */}
      <section className="cream-bg section-pad reveal-section">
        <div className="section-heading">
          <p className="eyebrow">The Artisan Promise</p>
          <h2>Why Choose Handmade?</h2>
          <p>
            Every piece is created with mindfulness, enduring materials, and genuine passion.
          </p>
        </div>

        <div className="features-grid">
          {valueProps.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                className="feature-box reveal-card group"
                key={feat.title}
                style={{ '--stagger-idx': idx } as React.CSSProperties}
              >
                {/* Background Ambient Glow */}
                <div className="feature-box-glow" />

                {/* Top Row: Floating Icon + Watermark Number */}
                <div className="feature-box-top">
                  <div className="feature-icon-circle">
                    <Icon size={22} className="feature-icon-svg" />
                  </div>
                  <span className="feature-watermark-num">0{idx + 1}</span>
                </div>

                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>

                {/* Bottom Thread Accent Line */}
                <div className="feature-accent-line" />
              </div>
            )
          })}
        </div>
      </section>

      {/* Kind Words Testimonials - Royal Infinite Carousel Animation */}
      <section className="cream-warm-bg section-pad reveal-section overflow-hidden" id="reviews">
        <div className="section-heading text-center mx-auto mb-6">
          <p className="eyebrow justify-center">
            <Sparkles size={14} className="text-[#A82855]" /> Kind Words
          </p>
          <h2>Loved by Givers &amp; Receivers</h2>
          <p>Real experiences from patrons across India who trusted us with their cherished celebrations.</p>
        </div>

        {/* Royal Infinite Carousel with Seamless Auto-Sliding, Arrow Controls & Touch Gestures */}
        <ReviewsCarousel items={testimonials} />
      </section>

      {/* About The Maker / Artist Section (Split Entrance) */}
      <section className="olive-bg section-pad reveal-section" id="about">
        <div className="about-grid">
          <div className="about-img-wrap reveal-split-left relative">
            <img
              src="/attachments/1000379971.jpg"
              alt="aura.kraftss handcrafted floral rangoli mats and wedding aisle runners"
              className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[460px] border border-[rgba(232,165,189,0.5)]"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#A82855] p-1.5 rounded-2xl shadow-2xl border-2 border-[#F8B4C9] z-10">
              <img
                src="/aura-kraftss-logo.png"
                alt="aura.kraftss logo"
                width={72}
                height={72}
                style={{
                  width: '72px',
                  height: '72px',
                  minWidth: '72px',
                  minHeight: '72px',
                  aspectRatio: '1 / 1',
                  borderRadius: '12px',
                  objectFit: 'cover',
                }}
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="about-badge">
              <span>aura.kraftss • Woolen Rangoli Mats</span>
              <Heart size={18} className="text-[#F8B4C9] fill-[#F8B4C9]" />
            </div>
          </div>

          <div className="about-content reveal-split-right">
            <p className="eyebrow">Our Story</p>
            <h2>
              Crafted slowly, <br />
              <em className="text-[#F8B4C9] italic font-normal">made with pure devotion.</em>
            </h2>
            <p>
              aura.kraftss was born out of a deep passion for handcrafted wedding aisle runners, traditional Saptapadi entry carpets, reusable floral rangoli mats, and sculpted 3D peacock floor rugs. We believe every wedding, festival, and auspicious milestone deserves heirloom decor crafted with patience, precision, and heartfelt artistry.
            </p>
            <p>
              From hand-knotting ceremonial Swastik chowki mats with vibrant tassels to weaving expansive floral aisle runners, our studio is dedicated to creating timeless festive treasures that bring beauty and blessings to your home.
            </p>
            <div className="btn-row pt-2">
              <Link
                className="btn-primary btn-cream"
                href="/custom-orders"
              >
                <Sparkles size={17} /> Request Custom Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner (Olive Green with Decorative Thread) */}
      <section className="section-pad cream-bg reveal-section" id="contact">
        <div className="cta-banner reveal-cta">
          <div className="cta-thread-decoration" />
          <div className="cta-banner-content">
            <p className="eyebrow !text-[#F8B4C9]">Let&apos;s Create Something Special</p>
            <h2>Ready to Craft Your Idea?</h2>
            <p>
              Have a favorite couple date, floral preservation idea, or bridal mehandi in mind? Send us a quick inquiry and let&apos;s craft something unforgettable.
            </p>
            <div className="btn-row">
              <Link
                className="btn-primary btn-cream"
                href="/custom-orders"
              >
                <Sparkles size={18} /> Custom Order Form
              </Link>
              <a
                className="btn-primary btn-outline-cream"
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Site Footer & Floating WhatsApp Button */}
      <Footer />
    </main>
  )
}
