'use client'

import React from 'react'
import { PatternType, ColorScheme } from './types'
import { PATTERN_OPTIONS } from './constants'
import { Check } from 'lucide-react'

interface PatternSelectorProps {
  selectedPattern: PatternType
  onSelectPattern: (pattern: PatternType) => void
  colors: ColorScheme
}

export default function PatternSelector({
  selectedPattern,
  onSelectPattern,
  colors,
}: PatternSelectorProps) {
  // Render miniature visual SVG icon for each pattern option
  const renderPatternThumbnail = (id: PatternType, isActive: boolean) => {
    const iconPrim = isActive ? '#E5B248' : colors.primary
    const iconSec = isActive ? '#FFF2D6' : colors.secondary
    const iconAcc = isActive ? '#FFF' : colors.accent

    switch (id) {
      case 'lotus':
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* Lotus Petals */}
            <path d="M 30 10 C 22 25, 20 40, 30 50 C 40 40, 38 25, 30 10 Z" fill={iconPrim} />
            <path d="M 30 20 C 16 28, 14 42, 30 50 C 46 42, 44 28, 30 20 Z" fill={iconSec} opacity="0.85" />
            <path d="M 30 28 C 8 36, 12 48, 30 50 C 48 48, 52 36, 30 28 Z" fill={iconPrim} opacity="0.7" />
            <circle cx="30" cy="46" r="4" fill={iconAcc} />
          </svg>
        )

      case 'peacock':
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* Peacock Plumes */}
            <circle cx="30" cy="20" r="10" fill={iconPrim} />
            <circle cx="30" cy="20" r="6" fill={iconSec} />
            <circle cx="30" cy="20" r="3" fill={iconAcc} />
            {/* Radial Plume Sprays */}
            <path d="M 30 30 L 15 15 M 30 30 L 45 15 M 30 30 L 30 8" stroke={iconPrim} strokeWidth="2.5" />
            <circle cx="15" cy="15" r="4" fill={iconSec} />
            <circle cx="45" cy="15" r="4" fill={iconSec} />
            {/* Body */}
            <path d="M 24 35 Q 30 52 36 35 Z" fill={iconPrim} />
            <circle cx="30" cy="34" r="5" fill={iconAcc} />
          </svg>
        )

      case 'floral':
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* 6-fold flower */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <circle
                key={i}
                cx={30 + 12 * Math.cos((deg * Math.PI) / 180)}
                cy={30 + 12 * Math.sin((deg * Math.PI) / 180)}
                r="7"
                fill={i % 2 === 0 ? iconPrim : iconSec}
              />
            ))}
            <circle cx="30" cy="30" r="7" fill={iconAcc} />
          </svg>
        )

      case 'diya':
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* Golden Flame */}
            <path d="M 30 8 C 24 20, 24 28, 30 30 C 36 28, 36 20, 30 8 Z" fill={iconAcc} />
            <path d="M 30 15 C 27 22, 27 28, 30 30 C 33 28, 33 22, 30 15 Z" fill="#FFE599" />
            {/* Clay Diya Base */}
            <path d="M 12 30 Q 14 48 30 48 Q 46 48 48 30 Q 30 34 12 30 Z" fill={iconPrim} stroke={iconSec} strokeWidth="1.5" />
            <line x1="16" y1="52" x2="44" y2="52" stroke={iconSec} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )

      case 'mandala':
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* Concentric Chakra Medallion */}
            <circle cx="30" cy="30" r="24" fill="none" stroke={iconPrim} strokeWidth="3" strokeDasharray="3 3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <polygon
                key={i}
                points="30,12 26,24 34,24"
                fill={iconSec}
                transform={`rotate(${deg} 30 30)`}
              />
            ))}
            <circle cx="30" cy="30" r="10" fill={iconPrim} />
            <circle cx="30" cy="30" r="5" fill={iconAcc} />
          </svg>
        )

      case 'ganesha':
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* Mukut Crown */}
            <polygon points="30,8 22,20 38,20" fill={iconAcc} />
            {/* Forehead */}
            <path d="M 20 22 Q 30 18 40 22" stroke={iconSec} strokeWidth="2.5" fill="none" />
            <circle cx="30" cy="21" r="2" fill="#FFF" />
            {/* Trunk & Ears */}
            <path d="M 20 22 C 12 26, 12 38, 22 40" stroke={iconPrim} strokeWidth="2" fill="none" />
            <path d="M 40 22 C 48 26, 48 38, 38 40" stroke={iconPrim} strokeWidth="2" fill="none" />
            <path d="M 28 26 Q 32 38 32 44 Q 32 50 38 48 Q 42 46 39 42" stroke={iconPrim} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <circle cx="39" cy="42" r="2" fill={iconAcc} />
          </svg>
        )

      case 'custom':
      default:
        return (
          <svg viewBox="0 0 60 60" className="w-9 h-9">
            {/* Diamond Saptapadi Tessellation */}
            <polygon points="30,8 48,26 30,44 12,26" fill={iconPrim} />
            <polygon points="30,16 40,26 30,36 20,26" fill={iconSec} />
            <circle cx="30" cy="26" r="4" fill={iconAcc} />
            <circle cx="12" cy="26" r="2.5" fill={iconAcc} />
            <circle cx="48" cy="26" r="2.5" fill={iconAcc} />
            <circle cx="30" cy="50" r="3" fill={iconSec} />
          </svg>
        )
    }
  }

  return (
    <div className="rangoli-customizer-step">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="step-number-badge">03</span>
          <div>
            <h3 className="text-base md:text-lg font-serif font-bold text-[#5E1D28] leading-tight m-0">
              Select Pattern Motif
            </h3>
            <p className="text-xs text-[#785A60] m-0">Authentic Indian handcrafted motifs &amp; sacred geometry</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-[#AA771C] bg-[#FFF8EB] border border-[rgba(229,178,72,0.4)] px-2.5 py-0.5 rounded-full capitalize">
          {selectedPattern}
        </span>
      </div>

      {/* Visual Pattern Grid with Miniature SVG Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {PATTERN_OPTIONS.map((opt) => {
          const isActive = selectedPattern === opt.id

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectPattern(opt.id)}
              className={`group relative p-2.5 rounded-xl border text-left transition-all duration-300 flex flex-col items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-[#5E1D28] text-[#FFF4DE] border-[#E5B248] shadow-md shadow-[#5E1D28]/20 ring-2 ring-[#E5B248]/30 -translate-y-0.5'
                  : 'bg-white/80 hover:bg-white text-[#3D1017] border-[rgba(158,86,100,0.2)] hover:border-[#C5A059] hover:shadow-sm'
              }`}
            >
              {/* Thumbnail Container */}
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 ${
                  isActive ? 'bg-[#3D1017]/80' : 'bg-[#FAF6F4]'
                }`}
              >
                {renderPatternThumbnail(opt.id, isActive)}
              </div>

              {/* Title & Description */}
              <div className="text-center w-full">
                <div className="flex items-center justify-center gap-1">
                  <span className={`text-xs font-bold tracking-tight ${isActive ? 'text-[#FFF2D6]' : 'text-[#3D1017]'}`}>
                    {opt.label}
                  </span>
                </div>
                <span className={`text-[10px] block mt-0.5 leading-snug line-clamp-1 ${isActive ? 'text-[#E5B248]' : 'text-[#785A60]'}`}>
                  {opt.desc}
                </span>
              </div>

              {isActive && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#E5B248] text-[#3D1017] rounded-full flex items-center justify-center">
                  <Check size={11} strokeWidth={3} />
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
