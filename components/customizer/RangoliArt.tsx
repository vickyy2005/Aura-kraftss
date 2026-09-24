'use client'

import React from 'react'
import { PatternType, ShapeType, ColorScheme } from './types'

interface RangoliArtProps {
  pattern: PatternType
  shape: ShapeType
  colors: ColorScheme
  width?: number
  height?: number
  isRotating?: boolean
  className?: string
}

export default function RangoliArt({
  pattern,
  shape,
  colors,
  isRotating = false,
  className = '',
}: RangoliArtProps) {
  const { base, primary, secondary, accent } = colors

  // Generate unique IDs for gradients & filters to avoid DOM collisions
  const baseGradId = 'base-grad'
  const primaryGradId = 'prim-grad'
  const goldGradId = 'gold-grad'
  const glowFilterId = 'glow-filter'
  const shadowFilterId = 'mat-shadow'

  // Standard viewBox coordinate system: 0 0 600 600 (center at 300, 300)
  const cx = 300
  const cy = 300

  // Rotation angles for 8-fold and 12-fold symmetry
  const angles8 = [0, 45, 90, 135, 180, 225, 270, 315]
  const angles12 = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
  const angles16 = [
    0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5,
    315, 337.5,
  ]

  // Render Pattern-Specific Central Artwork
  const renderPatternArt = () => {
    switch (pattern) {
      case 'lotus':
        return (
          <g className="rangoli-pattern-lotus">
            {/* Outer Layer: 16 Floating Lotus Petal Tips */}
            {angles16.map((deg, i) => (
              <g key={`l-outer-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 225} C ${cx - 18} ${cy - 180}, ${cx - 30} ${cy - 145}, ${cx} ${cy - 120} C ${cx + 30} ${cy - 145}, ${cx + 18} ${cy - 180}, Z`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="1.5"
                  opacity="0.92"
                />
                <circle cx={cx} cy={cy - 220} r="3.5" fill={accent} />
              </g>
            ))}

            {/* Middle Layer: 8 Grand Lotus Petals with Ribs */}
            {angles8.map((deg, i) => (
              <g key={`l-mid-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 170} C ${cx - 38} ${cy - 110}, ${cx - 50} ${cy - 65}, ${cx} ${cy - 40} C ${cx + 50} ${cy - 65}, ${cx + 38} ${cy - 110}, Z`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="2.5"
                  className="transition-colors duration-500"
                />
                {/* Petal Spine & Veins */}
                <path
                  d={`M ${cx} ${cy - 40} Q ${cx} ${cy - 110} ${cx} ${cy - 165}`}
                  stroke={accent}
                  strokeWidth="1.8"
                  fill="none"
                />
                <path
                  d={`M ${cx} ${cy - 90} Q ${cx - 20} ${cy - 110} ${cx - 28} ${cy - 130}`}
                  stroke={accent}
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d={`M ${cx} ${cy - 90} Q ${cx + 20} ${cy - 110} ${cx + 28} ${cy - 130}`}
                  stroke={accent}
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.8"
                />
              </g>
            ))}

            {/* Inner Layer: 8 Concentric Petals */}
            {angles8.map((deg, i) => (
              <g key={`l-inn-${i}`} transform={`rotate(${deg + 22.5} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 95} C ${cx - 22} ${cy - 55}, ${cx - 25} ${cy - 30}, ${cx} ${cy - 15} C ${cx + 25} ${cy - 30}, ${cx + 22} ${cy - 55}, Z`}
                  fill={secondary}
                  stroke={primary}
                  strokeWidth="2"
                />
              </g>
            ))}

            {/* Sacred Center Seed Pod / Sunburst Core */}
            <circle cx={cx} cy={cy} r="46" fill={primary} stroke={accent} strokeWidth="3" />
            <circle cx={cx} cy={cy} r="38" fill={secondary} stroke={accent} strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="26" fill={accent} />
            <circle cx={cx} cy={cy} r="14" fill={primary} />
            {angles8.map((deg, i) => (
              <circle
                key={`seed-${i}`}
                cx={cx + 31 * Math.cos((deg * Math.PI) / 180)}
                cy={cy + 31 * Math.sin((deg * Math.PI) / 180)}
                r="3"
                fill={accent}
              />
            ))}
          </g>
        )

      case 'peacock':
        return (
          <g className="rangoli-pattern-peacock">
            {/* 8 Radiating Regal Mayur Tail Plumes */}
            {angles8.map((deg, i) => (
              <g key={`pk-plume-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                {/* Large Outer Feather Eye */}
                <path
                  d={`M ${cx} ${cy - 235} C ${cx - 36} ${cy - 180}, ${cx - 40} ${cy - 120}, ${cx} ${cy - 80} C ${cx + 40} ${cy - 120}, ${cx + 36} ${cy - 180}, Z`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="2"
                />
                {/* Concentric Feather Ring 2 */}
                <path
                  d={`M ${cx} ${cy - 215} C ${cx - 26} ${cy - 170}, ${cx - 28} ${cy - 130}, ${cx} ${cy - 95} C ${cx + 28} ${cy - 130}, ${cx + 26} ${cy - 170}, Z`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="1.5"
                />
                {/* Feather Eye Jewel */}
                <ellipse cx={cx} cy={cy - 170} rx="16" ry="24" fill={base} stroke={accent} strokeWidth="2.5" />
                <ellipse cx={cx} cy={cy - 168} rx="9" ry="14" fill={accent} />
                <circle cx={cx} cy={cy - 166} r="5" fill={primary} />

                {/* Plume Barb Accents */}
                <path
                  d={`M ${cx - 32} ${cy - 175} Q ${cx - 52} ${cy - 190} ${cx - 48} ${cy - 205}`}
                  stroke={accent}
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={`M ${cx + 32} ${cy - 175} Q ${cx + 52} ${cy - 190} ${cx + 48} ${cy - 205}`}
                  stroke={accent}
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            ))}

            {/* Inner Radial Ring */}
            <circle cx={cx} cy={cy} r="85" fill={secondary} stroke={accent} strokeWidth="3" opacity="0.95" />

            {/* Imperial Dual Peacock Center Emblem */}
            <g transform={`translate(${cx - 70}, ${cy - 65}) scale(0.7)`}>
              {/* Left Peacock */}
              <path
                d="M 50 120 C 40 90, 45 60, 65 40 C 75 30, 90 25, 100 35 C 105 40, 100 55, 90 65 C 75 80, 85 110, 100 130 C 85 130, 65 130, 50 120 Z"
                fill={primary}
                stroke={accent}
                strokeWidth="2.5"
              />
              <circle cx="92" cy="40" r="3" fill={accent} />
              {/* Peacock Crest */}
              <path d="M 98 30 L 105 15 M 102 33 L 114 20 M 105 38 L 120 28" stroke={accent} strokeWidth="2" />
              <circle cx="105" cy="14" r="2.5" fill={accent} />
              <circle cx="114" cy="19" r="2.5" fill={accent} />
              <circle cx="120" cy="27" r="2.5" fill={accent} />

              {/* Right Peacock (Symmetrical Mirror) */}
              <path
                d="M 150 120 C 160 90, 155 60, 135 40 C 125 30, 110 25, 100 35 C 95 40, 100 55, 110 65 C 125 80, 115 110, 100 130 C 115 130, 135 130, 150 120 Z"
                fill={primary}
                stroke={accent}
                strokeWidth="2.5"
              />
              <circle cx="108" cy="40" r="3" fill={accent} />
              {/* Peacock Crest */}
              <path d="M 102 30 L 95 15 M 98 33 L 86 20 M 95 38 L 80 28" stroke={accent} strokeWidth="2" />
              <circle cx="95" cy="14" r="2.5" fill={accent} />
              <circle cx="86" cy="19" r="2.5" fill={accent} />
              <circle cx="80" cy="27" r="2.5" fill={accent} />
            </g>

            {/* Sacred Central Lotus Jewel */}
            <circle cx={cx} cy={cy} r="28" fill={primary} stroke={accent} strokeWidth="3" />
            <circle cx={cx} cy={cy} r="16" fill={accent} />
            <circle cx={cx} cy={cy} r="8" fill={base} />
          </g>
        )

      case 'floral':
        return (
          <g className="rangoli-pattern-floral">
            {/* 12 Auspicious Marigold & Jasmine Floral Arches */}
            {angles12.map((deg, i) => (
              <g key={`fl-arch-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx - 24} ${cy - 190} Q ${cx} ${cy - 235} ${cx + 24} ${cy - 190} Q ${cx} ${cy - 165} ${cx - 24} ${cy - 190} Z`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="2"
                />
                <circle cx={cx} cy={cy - 225} r="4" fill={accent} />
              </g>
            ))}

            {/* 8 Flowing Traditional Paisleys (Kalka / Ambi) */}
            {angles8.map((deg, i) => (
              <g key={`fl-paisley-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 60} C ${cx - 50} ${cy - 90}, ${cx - 65} ${cy - 145}, ${cx - 25} ${cy - 180} C ${cx - 5} ${cy - 200}, ${cx + 15} ${cy - 185}, ${cx + 5} ${cy - 160} C ${cx - 5} ${cy - 140}, ${cx + 35} ${cy - 110}, ${cx} ${cy - 60} Z`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="2"
                />
                {/* Paisley Core Florets */}
                <circle cx={cx - 15} cy={cy - 145} r="7" fill={secondary} stroke={accent} strokeWidth="1.5" />
                <circle cx={cx - 15} cy={cy - 145} r="3" fill={accent} />
              </g>
            ))}

            {/* Middle Rosette Petals */}
            {angles8.map((deg, i) => (
              <g key={`fl-rose-${i}`} transform={`rotate(${deg + 22.5} ${cx} ${cy})`}>
                <circle cx={cx} cy={cy - 85} r="18" fill={secondary} stroke={accent} strokeWidth="2" />
                <circle cx={cx} cy={cy - 85} r="9" fill={primary} />
                <circle cx={cx} cy={cy - 85} r="4" fill={accent} />
              </g>
            ))}

            {/* Center Multi-tier Blossom */}
            <circle cx={cx} cy={cy} r="48" fill={primary} stroke={accent} strokeWidth="3" />
            <circle cx={cx} cy={cy} r="32" fill={secondary} stroke={accent} strokeWidth="2" />
            <circle cx={cx} cy={cy} r="16" fill={accent} />
            <circle cx={cx} cy={cy} r="8" fill={primary} />
          </g>
        )

      case 'diya':
        return (
          <g className="rangoli-pattern-diya">
            {/* Glowing Aura Sunburst Rays Behind Diyas */}
            {angles16.map((deg, i) => (
              <line
                key={`diya-ray-${i}`}
                x1={cx}
                y1={cy - 160}
                x2={cx}
                y2={cy - 230}
                stroke={accent}
                strokeWidth={i % 2 === 0 ? '3' : '1.5'}
                strokeDasharray={i % 2 === 0 ? 'none' : '4 4'}
                transform={`rotate(${deg} ${cx} ${cy})`}
                opacity="0.85"
              />
            ))}

            {/* 8 Auspicious Golden Diyas Facing Outward */}
            {angles8.map((deg, i) => (
              <g key={`diya-lamp-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                {/* Decorative Diya Base Cushion */}
                <path
                  d={`M ${cx - 32} ${cy - 145} Q ${cx} ${cy - 165} ${cx + 32} ${cy - 145} Q ${cx} ${cy - 130} ${cx - 32} ${cy - 145} Z`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="1.5"
                />

                {/* Brass Diya Bowl (Clay Lamp) */}
                <path
                  d={`M ${cx - 38} ${cy - 165} Q ${cx - 40} ${cy - 140} ${cx} ${cy - 140} Q ${cx + 40} ${cy - 140} ${cx + 38} ${cy - 165} Q ${cx} ${cy - 170} ${cx - 38} ${cy - 165} Z`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="2.5"
                />

                {/* Outer Flame Glow */}
                <path
                  d={`M ${cx} ${cy - 215} C ${cx - 16} ${cy - 185}, ${cx - 18} ${cy - 168}, ${cx} ${cy - 165} C ${cx + 18} ${cy - 168}, ${cx + 16} ${cy - 185}, Z`}
                  fill={accent}
                  opacity="0.95"
                />

                {/* Inner Core Flame (Luminous Gold/Vermilion) */}
                <path
                  d={`M ${cx} ${cy - 205} C ${cx - 9} ${cy - 183}, ${cx - 10} ${cy - 168}, ${cx} ${cy - 166} C ${cx + 10} ${cy - 168}, ${cx + 9} ${cy - 183}, Z`}
                  fill={secondary}
                />
                <circle cx={cx} cy={cy - 175} r="3.5" fill="#FFFFFF" />
              </g>
            ))}

            {/* Sacred Center Auspicious Mandala & Swastik Ring */}
            <circle cx={cx} cy={cy} r="95" fill={primary} stroke={accent} strokeWidth="3" opacity="0.92" />
            <circle cx={cx} cy={cy} r="75" fill={secondary} stroke={accent} strokeWidth="2" />

            {/* Auspicious Center Swastik / Sacred Geometry */}
            <g transform={`translate(${cx}, ${cy})`}>
              <path
                d="M -30 -30 L -10 -30 L -10 10 L 30 10 L 30 30 M -10 -30 L -10 -10 L -30 -10 M 30 10 L 30 -10 L 10 -10 M 10 -10 L 10 30 L -10 30"
                stroke={accent}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="-20" cy="-20" r="3" fill={accent} />
              <circle cx="20" cy="-20" r="3" fill={accent} />
              <circle cx="-20" cy="20" r="3" fill={accent} />
              <circle cx="20" cy="20" r="3" fill={accent} />
            </g>
          </g>
        )

      case 'mandala':
        return (
          <g className="rangoli-pattern-mandala">
            {/* Outer Starlight Points (16-point sacred star) */}
            {angles16.map((deg, i) => (
              <g key={`m-point-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <polygon
                  points={`${cx},${cy - 235} ${cx - 16},${cy - 195} ${cx + 16},${cy - 195}`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="1.5"
                />
                <circle cx={cx} cy={cy - 232} r="3.5" fill={accent} />
              </g>
            ))}

            {/* Ornate Scalloped Jali Lattice Ring */}
            <circle
              cx={cx}
              cy={cy}
              r="195"
              fill="none"
              stroke={primary}
              strokeWidth="18"
              strokeDasharray="6 14"
            />
            <circle cx={cx} cy={cy} r="185" fill="none" stroke={accent} strokeWidth="2" />
            <circle cx={cx} cy={cy} r="205" fill="none" stroke={accent} strokeWidth="2" />

            {/* 12-Fold Sacred Chakra Petals with Diamond Jewels */}
            {angles12.map((deg, i) => (
              <g key={`m-petal-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 180} C ${cx - 30} ${cy - 130}, ${cx - 35} ${cy - 90}, ${cx} ${cy - 70} C ${cx + 35} ${cy - 90}, ${cx + 30} ${cy - 130}, Z`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="2"
                />
                <polygon
                  points={`${cx},${cy - 145} ${cx - 12},${cy - 125} ${cx},${cy - 105} ${cx + 12},${cy - 125}`}
                  fill={accent}
                />
                <circle cx={cx} cy={cy - 125} r="4" fill={base} />
              </g>
            ))}

            {/* Inner Sacred Star Medallion */}
            <circle cx={cx} cy={cy} r="72" fill={secondary} stroke={accent} strokeWidth="3" />
            {angles8.map((deg, i) => (
              <g key={`m-inn-star-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <polygon
                  points={`${cx},${cy - 72} ${cx - 15},${cy - 30} ${cx + 15},${cy - 30}`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="1.5"
                />
              </g>
            ))}

            {/* Radiant Center Jewel */}
            <circle cx={cx} cy={cy} r="32" fill={base} stroke={accent} strokeWidth="3" />
            <circle cx={cx} cy={cy} r="20" fill={accent} />
            <circle cx={cx} cy={cy} r="10" fill={primary} />
            <circle cx={cx} cy={cy} r="4" fill="#FFFFFF" />
          </g>
        )

      case 'ganesha':
        return (
          <g className="rangoli-pattern-ganesha">
            {/* Radiant Sacred Halo (Prabhavali) */}
            {angles16.map((deg, i) => (
              <g key={`g-ray-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 230} L ${cx - 10} ${cy - 195} L ${cx + 10} ${cy - 195} Z`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="1.5"
                />
                <circle cx={cx} cy={cy - 225} r="3" fill={accent} />
              </g>
            ))}

            {/* Concentric Temple Arch Borders */}
            <circle cx={cx} cy={cy} r="195" fill="none" stroke={primary} strokeWidth="12" />
            <circle cx={cx} cy={cy} r="188" fill="none" stroke={accent} strokeWidth="2" />
            <circle cx={cx} cy={cy} r="202" fill="none" stroke={accent} strokeWidth="2" />

            {/* 8 Auspicious Modaks & Kalash Petals */}
            {angles8.map((deg, i) => (
              <g key={`g-fl-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <path
                  d={`M ${cx} ${cy - 180} C ${cx - 24} ${cy - 145}, ${cx - 25} ${cy - 120}, ${cx} ${cy - 105} C ${cx + 25} ${cy - 120}, ${cx + 24} ${cy - 145}, Z`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="2"
                />
                <circle cx={cx} cy={cy - 145} r="5" fill={accent} />
              </g>
            ))}

            {/* Center Sacred Medallion for Lord Ganesha */}
            <circle cx={cx} cy={cy} r="105" fill={base} stroke={accent} strokeWidth="3.5" />
            <circle cx={cx} cy={cy} r="98" fill="none" stroke={primary} strokeWidth="2" strokeDasharray="4 4" />

            {/* Authentic Stylized Vakratunda Ganesha Motif */}
            <g transform={`translate(${cx - 50}, ${cy - 65}) scale(1.05)`}>
              {/* Crown / Mukut */}
              <polygon points="48,0 30,22 66,22" fill={accent} stroke={primary} strokeWidth="2" />
              <polygon points="48,6 36,22 60,22" fill={secondary} />
              <circle cx="48" cy="1" r="3" fill={accent} />

              {/* Sacred Forehead & Tilak (Trishul/Chandan) */}
              <path
                d="M 28 24 Q 48 18 68 24 Q 48 36 28 24 Z"
                fill={primary}
                stroke={accent}
                strokeWidth="1.8"
              />
              <path d="M 48 22 L 48 40" stroke={accent} strokeWidth="3" strokeLinecap="round" />
              <circle cx="48" cy="30" r="2.5" fill="#FFFFFF" />

              {/* Ganesha Ears (Supakarna) */}
              {/* Left Ear */}
              <path
                d="M 28 25 C 8 28, 5 55, 22 68 C 28 72, 32 60, 32 45 Z"
                fill={secondary}
                stroke={accent}
                strokeWidth="2"
              />
              {/* Right Ear */}
              <path
                d="M 68 25 C 88 28, 91 55, 74 68 C 68 72, 64 60, 64 45 Z"
                fill={secondary}
                stroke={accent}
                strokeWidth="2"
              />

              {/* Majestic Curved Trunk (Vakratunda) */}
              <path
                d="M 40 38 Q 48 45 48 65 Q 48 95 68 95 Q 84 95 82 78 Q 80 68 72 72 Q 68 76 74 84 Q 68 86 58 78 Q 54 68 54 48 Q 54 38 40 38 Z"
                fill={primary}
                stroke={accent}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Auspicious Modak on Palm / Trunk End */}
              <circle cx="74" cy="72" r="5" fill={accent} stroke={secondary} strokeWidth="1.5" />

              {/* Sacred Ekadanta (Single Tusk) */}
              <path d="M 36 50 L 26 56" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </g>
        )

      case 'custom':
      default:
        return (
          <g className="rangoli-pattern-custom">
            {/* Saptapadi Wedding Geometric Diamonds & Chevron Steps */}
            {angles8.map((deg, i) => (
              <g key={`cust-step-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                {/* Stepped Diamond Mosaic */}
                <polygon
                  points={`${cx},${cy - 235} ${cx - 28},${cy - 190} ${cx},${cy - 145} ${cx + 28},${cy - 190}`}
                  fill={primary}
                  stroke={accent}
                  strokeWidth="2"
                />
                <polygon
                  points={`${cx},${cy - 215} ${cx - 16},${cy - 190} ${cx},${cy - 165} ${cx + 16},${cy - 190}`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="1.5"
                />
                <circle cx={cx} cy={cy - 190} r="4" fill={accent} />
              </g>
            ))}

            {/* Diagonal Interlaced Diamonds (45 degree offset) */}
            {angles8.map((deg, i) => (
              <g key={`cust-dia-${i}`} transform={`rotate(${deg + 22.5} ${cx} ${cy})`}>
                <polygon
                  points={`${cx},${cy - 170} ${cx - 22},${cy - 130} ${cx},${cy - 90} ${cx + 22},${cy - 130}`}
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="2"
                />
                <polygon
                  points={`${cx},${cy - 150} ${cx - 10},${cy - 130} ${cx},${cy - 110} ${cx + 10},${cy - 130}`}
                  fill={primary}
                />
              </g>
            ))}

            {/* Inner Sacred Star Tessellation */}
            <circle cx={cx} cy={cy} r="85" fill={primary} stroke={accent} strokeWidth="3" />
            <circle cx={cx} cy={cy} r="65" fill={base} stroke={accent} strokeWidth="2" />
            {angles8.map((deg, i) => (
              <g key={`cust-star-${i}`} transform={`rotate(${deg} ${cx} ${cy})`}>
                <polygon
                  points={`${cx},${cy - 65} ${cx - 14},${cy - 20} ${cx + 14},${cy - 20}`}
                  fill={accent}
                />
              </g>
            ))}
            <circle cx={cx} cy={cy} r="25" fill={secondary} stroke={accent} strokeWidth="2.5" />
            <circle cx={cx} cy={cy} r="12" fill={accent} />
          </g>
        )
    }
  }

  // Render Outer Mat Border / Trim according to Selected Shape
  const renderMatBorderAndBase = () => {
    switch (shape) {
      case 'round':
        return (
          <>
            {/* Drop Shadow Outer Cushion */}
            <circle cx={cx} cy={cy} r="275" fill={base} filter={`url(#${shadowFilterId})`} />

            {/* Tufted Pom-Pom / Scalloped Woolen Outer Fringe */}
            {angles16.map((deg, i) => (
              <circle
                key={`fringe-${i}`}
                cx={cx + 274 * Math.cos((deg * Math.PI) / 180)}
                cy={cy + 274 * Math.sin((deg * Math.PI) / 180)}
                r="11"
                fill={accent}
                stroke={primary}
                strokeWidth="2"
              />
            ))}

            {/* Outer Mat Cloth Ring */}
            <circle cx={cx} cy={cy} r="268" fill={base} stroke={primary} strokeWidth="7" />
            {/* Concentric Gold Embroidered Stitch Line */}
            <circle
              cx={cx}
              cy={cy}
              r="256"
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
              strokeDasharray="5 5"
            />
            <circle cx={cx} cy={cy} r="248" fill="none" stroke={secondary} strokeWidth="3" />
          </>
        )

      case 'square':
        return (
          <>
            {/* Main Square Mat Body */}
            <rect
              x="30"
              y="30"
              width="540"
              height="540"
              rx="28"
              fill={base}
              filter={`url(#${shadowFilterId})`}
              stroke={primary}
              strokeWidth="7"
            />

            {/* Concentric Embroidered Square Inner Lines */}
            <rect
              x="46"
              y="46"
              width="508"
              height="508"
              rx="20"
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            <rect
              x="60"
              y="60"
              width="480"
              height="480"
              rx="16"
              fill="none"
              stroke={secondary}
              strokeWidth="3.5"
            />

            {/* 4 Ornate Traditional Corner Brackets (Kalka / Paisley Corners) */}
            {[
              { x: 70, y: 70, rot: 0 },
              { x: 530, y: 70, rot: 90 },
              { x: 530, y: 530, rot: 180 },
              { x: 70, y: 530, rot: 270 },
            ].map((c, i) => (
              <g key={`corner-${i}`} transform={`translate(${c.x}, ${c.y}) rotate(${c.rot})`}>
                <path
                  d="M 0 0 L 45 0 Q 30 30 0 45 Z"
                  fill={secondary}
                  stroke={accent}
                  strokeWidth="2"
                />
                <circle cx="16" cy="16" r="4.5" fill={accent} />
              </g>
            ))}

            {/* Outer Edge Woolen Tassel Pips */}
            {[
              // Top & Bottom edges
              ...[100, 180, 260, 340, 420, 500].map((pos) => ({ x: pos, y: 22 })),
              ...[100, 180, 260, 340, 420, 500].map((pos) => ({ x: pos, y: 578 })),
              // Left & Right edges
              ...[100, 180, 260, 340, 420, 500].map((pos) => ({ x: 22, y: pos })),
              ...[100, 180, 260, 340, 420, 500].map((pos) => ({ x: 578, y: pos })),
            ].map((pt, i) => (
              <circle key={`sq-tassel-${i}`} cx={pt.x} cy={pt.y} r="8" fill={accent} stroke={primary} strokeWidth="1.5" />
            ))}
          </>
        )

      case 'rectangle':
        return (
          <>
            {/* Runner Rectangle Base Mat (Landscape orientation) */}
            <rect
              x="20"
              y="70"
              width="560"
              height="460"
              rx="24"
              fill={base}
              filter={`url(#${shadowFilterId})`}
              stroke={primary}
              strokeWidth="7"
            />

            {/* Inner Border Stitches */}
            <rect
              x="36"
              y="86"
              width="528"
              height="428"
              rx="18"
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            <rect
              x="50"
              y="100"
              width="500"
              height="400"
              rx="14"
              fill="none"
              stroke={secondary}
              strokeWidth="3.5"
            />

            {/* Left & Right Aisle Runner Border Bands */}
            <line x1="120" y1="100" x2="120" y2="500" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
            <line x1="480" y1="100" x2="480" y2="500" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />

            {/* Top & Bottom Runner Fringe Tassels */}
            {[40, 90, 140, 190, 240, 290, 340, 390, 440, 490, 540, 560].map((x, i) => (
              <React.Fragment key={`rec-fringes-${i}`}>
                <circle cx={x} cy="62" r="7" fill={accent} stroke={primary} strokeWidth="1.5" />
                <circle cx={x} cy="538" r="7" fill={accent} stroke={primary} strokeWidth="1.5" />
              </React.Fragment>
            ))}
          </>
        )

      case 'custom':
      default:
        return (
          <>
            {/* Rounded Contour Base */}
            <rect
              x="25"
              y="25"
              width="550"
              height="550"
              rx="40"
              fill={base}
              filter={`url(#${shadowFilterId})`}
              stroke={primary}
              strokeWidth="7"
            />
            <rect
              x="42"
              y="42"
              width="516"
              height="516"
              rx="30"
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            <rect
              x="58"
              y="58"
              width="484"
              height="484"
              rx="22"
              fill="none"
              stroke={secondary}
              strokeWidth="3.5"
            />
          </>
        )
    }
  }

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      style={{
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full max-h-[520px] object-contain drop-shadow-2xl select-none"
        style={{
          filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.22))',
          transform: isRotating ? 'rotate(0deg)' : 'none',
        }}
      >
        <defs>
          {/* Mat Drop Shadow Filter */}
          <filter id={shadowFilterId} x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.35" />
          </filter>

          {/* Golden Shimmer Radial Glow */}
          <radialGradient id={glowFilterId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="70%" stopColor={primary} stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Linear Metallic Gold Sheen */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D4" />
            <stop offset="45%" stopColor={accent} />
            <stop offset="100%" stopColor="#A8771A" />
          </linearGradient>
        </defs>

        {/* 1. Mat Outer Border & Base Cloth according to Shape */}
        {renderMatBorderAndBase()}

        {/* 2. Soft Ambient Radial Floor Glow */}
        <circle cx={cx} cy={cy} r="240" fill={`url(#${glowFilterId})`} pointerEvents="none" />

        {/* 3. Central Symmetrical Indian Rangoli Art (With Optional Smooth Rotation) */}
        <g
          className={isRotating ? 'animate-spin' : ''}
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animationDuration: isRotating ? '48s' : '0s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {renderPatternArt()}
        </g>
      </svg>
    </div>
  )
}
