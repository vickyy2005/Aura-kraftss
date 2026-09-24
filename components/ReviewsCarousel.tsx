'use client'

import React, { useEffect, useRef } from 'react'
import {
  Sparkles,
  Star,
  Check,
} from 'lucide-react'

export interface Testimonial {
  name: string
  city: string
  avatar: string
  orderedItem: string
  stars: number
  quote: string
  time: string
}

export const defaultTestimonials: Testimonial[] = [
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

export default function ReviewsCarousel({
  items = defaultTestimonials,
}: {
  items?: Testimonial[]
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const set1Ref = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const singleSetWidthRef = useRef(0)
  const animFrameIdRef = useRef<number | null>(null)
  const speedRef = useRef(1.15)

  // Measure single set width accurately
  const updateWidth = () => {
    if (set1Ref.current) {
      singleSetWidthRef.current = set1Ref.current.scrollWidth
    } else if (trackRef.current) {
      singleSetWidthRef.current = trackRef.current.scrollWidth / 3
    }
  }

  // Continuous Hardware-Accelerated Right-to-Left Scroll Engine
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    updateWidth()
    const handleResize = () => updateWidth()
    window.addEventListener('resize', handleResize)

    const tick = () => {
      offsetRef.current += speedRef.current

      // Seamless infinite reset
      if (
        singleSetWidthRef.current > 0 &&
        offsetRef.current >= singleSetWidthRef.current
      ) {
        offsetRef.current -= singleSetWidthRef.current
      }

      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`
      animFrameIdRef.current = requestAnimationFrame(tick)
    }

    animFrameIdRef.current = requestAnimationFrame(tick)

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Card hover: gently slow down so patron can comfortably read without sudden jarring stop
  const handleCardMouseEnter = () => {
    speedRef.current = 0.28
  }

  const handleCardMouseLeave = () => {
    speedRef.current = 1.15
  }

  return (
    <div className="relative w-full overflow-hidden py-2 select-none">
      {/* Viewport with Soft Gradient Feathering on Left and Right */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks on sides */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FFF0F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FFF0F5] to-transparent z-10 pointer-events-none" />

        {/* Continuous Gliding Track */}
        <div
          ref={trackRef}
          className="flex flex-row"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {/* SET 1 (Measured for seamless infinite loop offset) */}
          <div ref={set1Ref} className="flex flex-row gap-5 pr-5">
            {items.map((item, idx) => (
              <div
                key={`cont-1-${idx}-${item.name}`}
                className="w-[340px] sm:w-[390px] flex-shrink-0"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div
                  className="testimonial-card h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ minHeight: '380px' }}
                >
                  <div className="testimonial-card-glow" />

                  <span
                    className="testimonial-quote-watermark"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <div className="testimonial-header mb-4">
                    <div className="testimonial-stars-wrap flex items-center gap-1">
                      {[...Array(item.stars)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          size={16}
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>
                    <span className="testimonial-ordered-badge text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FCE7F0] text-[#A82855] border border-[#E8A5BD]/60">
                      {item.orderedItem}
                    </span>
                  </div>

                  <p className="testimonial-quote-text text-sm sm:text-base leading-relaxed text-[#380D1D] mb-6 flex-grow font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="testimonial-author-row pt-4 border-t border-[#F8D0E0]/70 flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                      <span
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center border-2 border-white shadow-xs"
                        title="Verified Order"
                      >
                        <Check size={11} strokeWidth={3.5} />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#380D1D] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#8C5265] truncate">
                        {item.city}
                      </p>
                      <span className="text-[11px] font-medium text-[#2E7D32]">
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="testimonial-accent-line" />
                </div>
              </div>
            ))}
          </div>

          {/* SET 2 (Clone for infinite wrap) */}
          <div className="flex flex-row gap-5 pr-5" aria-hidden="true">
            {items.map((item, idx) => (
              <div
                key={`cont-2-${idx}-${item.name}`}
                className="w-[340px] sm:w-[390px] flex-shrink-0"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div
                  className="testimonial-card h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ minHeight: '380px' }}
                >
                  <div className="testimonial-card-glow" />

                  <span
                    className="testimonial-quote-watermark"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <div className="testimonial-header mb-4">
                    <div className="testimonial-stars-wrap flex items-center gap-1">
                      {[...Array(item.stars)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          size={16}
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>
                    <span className="testimonial-ordered-badge text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FCE7F0] text-[#A82855] border border-[#E8A5BD]/60">
                      {item.orderedItem}
                    </span>
                  </div>

                  <p className="testimonial-quote-text text-sm sm:text-base leading-relaxed text-[#380D1D] mb-6 flex-grow font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="testimonial-author-row pt-4 border-t border-[#F8D0E0]/70 flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                      <span
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center border-2 border-white shadow-xs"
                        title="Verified Order"
                      >
                        <Check size={11} strokeWidth={3.5} />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#380D1D] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#8C5265] truncate">
                        {item.city}
                      </p>
                      <span className="text-[11px] font-medium text-[#2E7D32]">
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="testimonial-accent-line" />
                </div>
              </div>
            ))}
          </div>

          {/* SET 3 (Safety clone for ultra-wide displays) */}
          <div className="flex flex-row gap-5 pr-5" aria-hidden="true">
            {items.map((item, idx) => (
              <div
                key={`cont-3-${idx}-${item.name}`}
                className="w-[340px] sm:w-[390px] flex-shrink-0"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div
                  className="testimonial-card h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ minHeight: '380px' }}
                >
                  <div className="testimonial-card-glow" />

                  <span
                    className="testimonial-quote-watermark"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <div className="testimonial-header mb-4">
                    <div className="testimonial-stars-wrap flex items-center gap-1">
                      {[...Array(item.stars)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          size={16}
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>
                    <span className="testimonial-ordered-badge text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FCE7F0] text-[#A82855] border border-[#E8A5BD]/60">
                      {item.orderedItem}
                    </span>
                  </div>

                  <p className="testimonial-quote-text text-sm sm:text-base leading-relaxed text-[#380D1D] mb-6 flex-grow font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="testimonial-author-row pt-4 border-t border-[#F8D0E0]/70 flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                      <span
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center border-2 border-white shadow-xs"
                        title="Verified Order"
                      >
                        <Check size={11} strokeWidth={3.5} />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#380D1D] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#8C5265] truncate">
                        {item.city}
                      </p>
                      <span className="text-[11px] font-medium text-[#2E7D32]">
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="testimonial-accent-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 mt-6 text-center">
        <p className="text-xs text-[#8C5265] flex items-center justify-center gap-1.5 font-medium">
          <Sparkles size={13} className="text-[#D4AF37]" />
          <span>Gliding automatically from right to left • Hover over any review card to slow down and read</span>
        </p>
      </div>
    </div>
  )
}
