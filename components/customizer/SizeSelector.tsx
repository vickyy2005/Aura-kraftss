'use client'

import React from 'react'
import { SizeType } from './types'
import { SIZE_OPTIONS } from './constants'
import { Check, Maximize2 } from 'lucide-react'

interface SizeSelectorProps {
  selectedSize: SizeType
  onSelectSize: (size: SizeType) => void
  customWidthFt: number
  customHeightFt: number
  onChangeCustomDimensions: (w: number, h: number) => void
}

export default function SizeSelector({
  selectedSize,
  onSelectSize,
  customWidthFt,
  customHeightFt,
  onChangeCustomDimensions,
}: SizeSelectorProps) {
  return (
    <div className="rangoli-customizer-step">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="step-number-badge">02</span>
          <div>
            <h3 className="text-base md:text-lg font-serif font-bold text-[#5E1D28] leading-tight m-0">
              Select Size
            </h3>
            <p className="text-xs text-[#785A60] m-0">Scale proportionally to your room or mandir</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-[#AA771C] bg-[#FFF8EB] border border-[rgba(229,178,72,0.4)] px-2.5 py-0.5 rounded-full">
          {selectedSize === 'custom'
            ? `${customWidthFt} × ${customHeightFt} ft`
            : SIZE_OPTIONS.find((s) => s.id === selectedSize)?.label}
        </span>
      </div>

      {/* Visual Size Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SIZE_OPTIONS.map((opt) => {
          const isActive = selectedSize === opt.id

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectSize(opt.id)}
              className={`group relative p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-[#5E1D28] text-[#FFF4DE] border-[#E5B248] shadow-md shadow-[#5E1D28]/20 ring-2 ring-[#E5B248]/30 -translate-y-0.5'
                  : 'bg-white/80 hover:bg-white text-[#3D1017] border-[rgba(158,86,100,0.2)] hover:border-[#C5A059] hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-tight">
                  {opt.label}
                </span>
                {isActive ? (
                  <span className="w-4 h-4 bg-[#E5B248] text-[#3D1017] rounded-full flex items-center justify-center">
                    <Check size={11} strokeWidth={3} />
                  </span>
                ) : (
                  <Maximize2 size={13} className="text-[#9E5664] opacity-50 group-hover:opacity-100" />
                )}
              </div>

              <div className="flex flex-col">
                <span className={`text-[11px] font-medium ${isActive ? 'text-[#E5B248]' : 'text-[#785A60]'}`}>
                  {opt.dimensions}
                </span>
                <span className={`text-[10px] mt-0.5 leading-tight ${isActive ? 'text-[#FFF2D6]/80' : 'text-[#9E5664]'}`}>
                  {opt.note}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Custom Size Controls */}
      {selectedSize === 'custom' && (
        <div className="mt-3.5 p-3.5 bg-[#FAF6F4] rounded-xl border border-[rgba(229,178,72,0.35)] flex flex-wrap items-center gap-4 animate-fadeIn">
          <div className="flex-1 min-w-[120px]">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#785A60] mb-1">
              Length / Width
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="25"
                step="0.5"
                value={customWidthFt}
                onChange={(e) =>
                  onChangeCustomDimensions(
                    Math.max(1, Math.min(25, parseFloat(e.target.value) || 1)),
                    customHeightFt
                  )
                }
                className="w-full px-3 py-1.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-lg text-sm font-semibold text-[#3D1017] focus:outline-none focus:border-[#E5B248]"
              />
              <span className="text-xs font-medium text-[#785A60]">ft</span>
            </div>
          </div>

          <div className="flex-1 min-w-[120px]">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#785A60] mb-1">
              Breadth / Height
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="25"
                step="0.5"
                value={customHeightFt}
                onChange={(e) =>
                  onChangeCustomDimensions(
                    customWidthFt,
                    Math.max(1, Math.min(25, parseFloat(e.target.value) || 1))
                  )
                }
                className="w-full px-3 py-1.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-lg text-sm font-semibold text-[#3D1017] focus:outline-none focus:border-[#E5B248]"
              />
              <span className="text-xs font-medium text-[#785A60]">ft</span>
            </div>
          </div>

          <div className="text-xs text-[#785A60] w-full">
            📏 We can craft runners up to 25 ft long for wedding mandaps and aisle entryways.
          </div>
        </div>
      )}
    </div>
  )
}
