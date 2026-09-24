'use client'

import React from 'react'
import { RangoliDesignState } from './types'
import { COLOR_PRESETS, PATTERN_OPTIONS, SHAPE_OPTIONS, SIZE_OPTIONS } from './constants'
import { RotateCcw, Sparkles, MessageCircle, Heart, ArrowRight } from 'lucide-react'

interface DesignSummaryProps {
  state: RangoliDesignState
  onReset: () => void
  onSurpriseMe: () => void
  onOpenEnquiry: () => void
}

export default function DesignSummary({
  state,
  onReset,
  onSurpriseMe,
  onOpenEnquiry,
}: DesignSummaryProps) {
  const { shape, size, pattern, paletteId, colors, customWidthFt, customHeightFt } = state

  const shapeLabel = SHAPE_OPTIONS.find((s) => s.id === shape)?.label || shape
  const sizeLabel =
    size === 'custom'
      ? `${customWidthFt} × ${customHeightFt} ft`
      : SIZE_OPTIONS.find((s) => s.id === size)?.label || size
  const patternLabel = PATTERN_OPTIONS.find((p) => p.id === pattern)?.label || pattern
  const paletteName =
    paletteId === 'custom'
      ? 'Custom Palette'
      : COLOR_PRESETS.find((p) => p.id === paletteId)?.name || 'Custom'

  return (
    <div className="w-full space-y-4">
      {/* Compact "Your Design" Summary Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-[rgba(229,178,72,0.4)] shadow-md">
        <div className="flex items-center justify-between border-b border-[rgba(158,86,100,0.15)] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[#E5B248]">⚜</span>
            <h4 className="text-base font-serif font-bold text-[#5E1D28] m-0">
              Your Design
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-[#8B1E2D] bg-[#FFF8EB] px-2.5 py-0.5 rounded-full border border-[rgba(229,178,72,0.4)]">
            Aura Kraftss Atelier
          </span>
        </div>

        {/* 4 Key Specifications */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="bg-[#FAF6F4] p-2.5 rounded-xl border border-[rgba(158,86,100,0.12)]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#785A60] block mb-0.5">
              Shape
            </span>
            <span className="text-sm font-bold text-[#3D1017] capitalize">
              {shapeLabel}
            </span>
          </div>

          <div className="bg-[#FAF6F4] p-2.5 rounded-xl border border-[rgba(158,86,100,0.12)]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#785A60] block mb-0.5">
              Size
            </span>
            <span className="text-sm font-bold text-[#3D1017]">
              {sizeLabel}
            </span>
          </div>

          <div className="bg-[#FAF6F4] p-2.5 rounded-xl border border-[rgba(158,86,100,0.12)]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#785A60] block mb-0.5">
              Pattern
            </span>
            <span className="text-sm font-bold text-[#3D1017] capitalize">
              {patternLabel}
            </span>
          </div>

          <div className="bg-[#FAF6F4] p-2.5 rounded-xl border border-[rgba(158,86,100,0.12)]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#785A60] block mb-0.5">
              Color Theme
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-sm font-bold text-[#3D1017]">
                {paletteName}
              </span>
              <div className="flex items-center -space-x-1 ml-auto">
                <span className="w-3.5 h-3.5 rounded-full border border-white shadow-xs" style={{ backgroundColor: colors.base }} />
                <span className="w-3.5 h-3.5 rounded-full border border-white shadow-xs" style={{ backgroundColor: colors.primary }} />
                <span className="w-3.5 h-3.5 rounded-full border border-white shadow-xs" style={{ backgroundColor: colors.secondary }} />
                <span className="w-3.5 h-3.5 rounded-full border border-white shadow-xs" style={{ backgroundColor: colors.accent }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Action Buttons: Reset Design & ✨ Surprise Me */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="flex-1 min-w-[140px] px-4 py-2.5 bg-white hover:bg-[#FAF6F4] text-[#5E1D28] font-semibold text-xs md:text-sm rounded-xl border border-[rgba(158,86,100,0.25)] hover:border-[#5E1D28] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-sm"
        >
          <RotateCcw size={14} />
          <span>Reset Design</span>
        </button>

        <button
          type="button"
          onClick={onSurpriseMe}
          className="flex-1 min-w-[160px] px-4 py-2.5 bg-gradient-to-r from-[#AA771C] via-[#E5B248] to-[#AA771C] text-[#291116] font-bold text-xs md:text-sm rounded-xl border border-[#AA771C] hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
        >
          <Sparkles size={15} />
          <span>✨ Surprise Me</span>
        </button>
      </div>

      {/* Bottom Enquiry CTA Card */}
      <div className="mt-5 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#5E1D28] via-[#4D151F] to-[#3D1017] text-[#FFF4DE] border-2 border-[#E5B248]/50 shadow-xl relative overflow-hidden">
        {/* Subtle Ambient Gold Accent */}
        <div
          className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#E5B248]/10 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#E5B248] font-bold uppercase tracking-wider mb-1">
              <Heart size={14} className="fill-[#E5B248]" />
              <span>Love Your Design?</span>
            </div>
            <h4 className="text-xl md:text-2xl font-serif font-bold text-[#FFF2D6] m-0">
              Let us turn your idea into a beautiful handmade rangoli mat.
            </h4>
            <p className="text-xs text-[#FFF4DE]/80 mt-1 max-w-xl m-0">
              Every curve and petal is hand-knotted by artisans in Jaipur with plush woolen yarn &amp; anti-slip backing.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEnquiry}
            className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-[#E5B248] to-[#D4AC0D] hover:from-[#F5D77F] hover:to-[#E5B248] text-[#3D1017] font-bold text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 shrink-0 cursor-pointer border border-[#FFF4D4]"
          >
            <MessageCircle size={18} />
            <span>Enquire About This Design</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
