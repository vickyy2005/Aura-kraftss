'use client'

import React from 'react'
import {
  AiPaletteType,
  AiPatternType,
  AiShapeType,
  AiSizeType,
} from './types'
import {
  AI_PALETTES,
  AI_PATTERNS,
  AI_SHAPES,
  AI_SIZES,
} from './constants'
import { Check } from 'lucide-react'

interface AiOptionSelectorsProps {
  shape: AiShapeType
  size: AiSizeType
  pattern: AiPatternType
  palette: AiPaletteType
  customWidthFt: number
  customHeightFt: number
  customColorsText: string
  onSelectShape: (shape: AiShapeType) => void
  onSelectSize: (size: AiSizeType) => void
  onSelectPattern: (pattern: AiPatternType) => void
  onSelectPalette: (palette: AiPaletteType) => void
  onChangeCustomDimensions: (w: number, h: number) => void
  onChangeCustomColorsText: (text: string) => void
}

export default function AiOptionSelectors({
  shape,
  size,
  pattern,
  palette,
  customWidthFt,
  customHeightFt,
  customColorsText,
  onSelectShape,
  onSelectSize,
  onSelectPattern,
  onSelectPalette,
  onChangeCustomDimensions,
  onChangeCustomColorsText,
}: AiOptionSelectorsProps) {
  return (
    <div className="space-y-4">
      {/* 1. Shape Selector */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[rgba(87,87,87,0.2)] shadow-xs">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#575757]">
            01 • Shape
          </span>
          <span className="text-[11px] font-semibold text-[#575757] bg-[#F7F2E9] border border-[#D8C9AE] px-2 py-0.5 rounded-full capitalize">
            {shape}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {AI_SHAPES.map((opt) => {
            const isActive = shape === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectShape(opt.id)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between gap-1.5 ${
                  isActive
                    ? 'bg-[#575757] text-[#F7F2E9] border-[#D8C9AE] shadow-md ring-2 ring-[#575757]/30 -translate-y-0.5'
                    : 'bg-[#F7F2E9] hover:bg-white text-[#262626] border-[rgba(87,87,87,0.18)] hover:border-[#575757]'
                }`}
              >
                <div className="w-7 h-7 flex items-center justify-center">
                  {opt.id === 'round' && (
                    <div className={`w-6 h-6 rounded-full border-2 ${isActive ? 'border-[#D8C9AE] bg-[#D8C9AE]/20' : 'border-[#575757]'}`} />
                  )}
                  {opt.id === 'square' && (
                    <div className={`w-5 h-5 rounded-sm border-2 ${isActive ? 'border-[#D8C9AE] bg-[#D8C9AE]/20' : 'border-[#575757]'}`} />
                  )}
                  {opt.id === 'rectangle' && (
                    <div className={`w-7 h-4 rounded-sm border-2 ${isActive ? 'border-[#D8C9AE] bg-[#D8C9AE]/20' : 'border-[#575757]'}`} />
                  )}
                  {opt.id === 'custom' && (
                    <div className={`text-[10px] font-bold border border-dashed rounded px-1 ${isActive ? 'border-[#D8C9AE] text-[#D8C9AE]' : 'border-[#575757] text-[#575757]'}`}>
                      W×H
                    </div>
                  )}
                </div>
                <span className="text-xs font-semibold">{opt.label}</span>
              </button>
            )
          })}
        </div>

        {shape === 'custom' && (
          <div className="mt-3 p-3 bg-[#F7F2E9] rounded-xl border border-[#D8C9AE] flex items-center gap-3">
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-[#6E6E6E] mb-0.5">Width (ft)</label>
              <input
                type="number"
                min="1"
                max="20"
                step="0.5"
                value={customWidthFt}
                onChange={(e) => onChangeCustomDimensions(parseFloat(e.target.value) || 1, customHeightFt)}
                className="w-full px-2.5 py-1 bg-white border border-[rgba(87,87,87,0.2)] rounded-lg text-xs font-bold text-[#262626]"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-[#6E6E6E] mb-0.5">Height (ft)</label>
              <input
                type="number"
                min="1"
                max="20"
                step="0.5"
                value={customHeightFt}
                onChange={(e) => onChangeCustomDimensions(customWidthFt, parseFloat(e.target.value) || 1)}
                className="w-full px-2.5 py-1 bg-white border border-[rgba(87,87,87,0.2)] rounded-lg text-xs font-bold text-[#262626]"
              />
            </div>
          </div>
        )}
      </div>

      {/* 2. Size Selector */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[rgba(87,87,87,0.2)] shadow-xs">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#575757]">
            02 • Size
          </span>
          <span className="text-[11px] font-semibold text-[#575757] bg-[#F7F2E9] border border-[#D8C9AE] px-2 py-0.5 rounded-full">
            {size === 'custom' ? `${customWidthFt} × ${customHeightFt} ft` : AI_SIZES.find((s) => s.id === size)?.label}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {AI_SIZES.map((opt) => {
            const isActive = size === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectSize(opt.id)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#575757] text-[#F7F2E9] border-[#D8C9AE] shadow-md ring-2 ring-[#575757]/30 -translate-y-0.5'
                    : 'bg-[#F7F2E9] hover:bg-white text-[#262626] border-[rgba(87,87,87,0.18)] hover:border-[#575757]'
                }`}
              >
                <span className="text-xs font-bold">{opt.label}</span>
                <span className={`text-[10px] mt-0.5 block ${isActive ? 'text-[#D8C9AE]' : 'text-[#6E6E6E]'}`}>
                  {opt.dimensions}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 3. Pattern Selector with Real Visual Thumbnails */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[rgba(87,87,87,0.2)] shadow-xs">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#575757]">
            03 • Pattern Motif
          </span>
          <span className="text-[11px] font-semibold text-[#575757] bg-[#F7F2E9] border border-[#D8C9AE] px-2 py-0.5 rounded-full capitalize">
            {pattern}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {AI_PATTERNS.map((opt) => {
            const isActive = pattern === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectPattern(opt.id)}
                className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center gap-1.5 group ${
                  isActive
                    ? 'bg-[#575757] text-[#F7F2E9] border-[#D8C9AE] shadow-md ring-2 ring-[#575757]/30 -translate-y-0.5'
                    : 'bg-[#F7F2E9] hover:bg-white text-[#262626] border-[rgba(87,87,87,0.18)] hover:border-[#575757]'
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-black/15 shadow-inner shrink-0 relative">
                  <img
                    src={opt.previewImage}
                    alt={opt.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#575757]/40 flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#D8C9AE] text-[#262626] flex items-center justify-center shadow">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center w-full">
                  <span className="text-xs font-bold block truncate">{opt.label}</span>
                  <span className={`text-[9px] block truncate ${isActive ? 'text-[#D8C9AE]' : 'text-[#6E6E6E]'}`}>
                    {opt.desc}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. Color Palette Selector */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[rgba(87,87,87,0.2)] shadow-xs">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#575757]">
            04 • Color Palette
          </span>
          <span className="text-[11px] font-semibold text-[#575757] bg-[#F7F2E9] border border-[#D8C9AE] px-2 py-0.5 rounded-full capitalize">
            {palette}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {AI_PALETTES.map((pal) => {
            const isActive = palette === pal.id
            return (
              <button
                key={pal.id}
                type="button"
                onClick={() => onSelectPalette(pal.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                  isActive
                    ? 'bg-[#575757] text-[#F7F2E9] border-[#D8C9AE] shadow-md ring-2 ring-[#575757]/30 -translate-y-0.5'
                    : 'bg-[#F7F2E9] hover:bg-white text-[#262626] border-[rgba(87,87,87,0.18)] hover:border-[#575757]'
                }`}
              >
                <div className="flex items-center gap-1">
                  {pal.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div>
                  <span className="text-xs font-bold block">{pal.name}</span>
                  <span className={`text-[9px] block truncate ${isActive ? 'text-[#D8C9AE]' : 'text-[#6E6E6E]'}`}>
                    {pal.desc}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {palette === 'custom' && (
          <div className="mt-3">
            <input
              type="text"
              value={customColorsText}
              onChange={(e) => onChangeCustomColorsText(e.target.value)}
              placeholder="e.g. Ivory base, emerald borders, ruby red accents, gold tassels"
              className="w-full px-3 py-2 bg-white border border-[rgba(87,87,87,0.2)] rounded-lg text-xs text-[#262626] focus:outline-none focus:border-[#575757]"
            />
          </div>
        )}
      </div>
    </div>
  )
}
