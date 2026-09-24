'use client'

import React from 'react'
import { ShapeType } from './types'
import { SHAPE_OPTIONS } from './constants'
import { Check } from 'lucide-react'

interface ShapeSelectorProps {
  selectedShape: ShapeType
  onSelectShape: (shape: ShapeType) => void
  customWidthFt: number
  customHeightFt: number
  onChangeCustomDimensions: (w: number, h: number) => void
}

export default function ShapeSelector({
  selectedShape,
  onSelectShape,
  customWidthFt,
  customHeightFt,
  onChangeCustomDimensions,
}: ShapeSelectorProps) {
  return (
    <div className="rangoli-customizer-step">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="step-number-badge">01</span>
          <div>
            <h3 className="text-base md:text-lg font-serif font-bold text-[#5E1D28] leading-tight m-0">
              Select Shape
            </h3>
            <p className="text-xs text-[#785A60] m-0">Choose the foundation geometry of your mat</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-[#AA771C] bg-[#FFF8EB] border border-[rgba(229,178,72,0.4)] px-2.5 py-0.5 rounded-full capitalize">
          {selectedShape}
        </span>
      </div>

      {/* Visual Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SHAPE_OPTIONS.map((opt) => {
          const isActive = selectedShape === opt.id

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectShape(opt.id)}
              className={`group relative p-3 rounded-xl border text-left transition-all duration-300 flex flex-col items-center justify-between gap-2.5 cursor-pointer ${
                isActive
                  ? 'bg-[#5E1D28] text-[#FFF4DE] border-[#E5B248] shadow-md shadow-[#5E1D28]/20 ring-2 ring-[#E5B248]/30 -translate-y-0.5'
                  : 'bg-white/80 hover:bg-white text-[#3D1017] border-[rgba(158,86,100,0.2)] hover:border-[#C5A059] hover:shadow-sm'
              }`}
            >
              {/* Mini Visual Shape Preview */}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${
                  isActive ? 'bg-[#3D1017]/70 text-[#E5B248]' : 'bg-[#FAF6F4] text-[#785A60]'
                }`}
              >
                {opt.id === 'round' && (
                  <div className={`w-8 h-8 rounded-full border-2 ${isActive ? 'border-[#E5B248] bg-[#E5B248]/20' : 'border-[#9E5664] bg-[#9E5664]/10'}`} />
                )}
                {opt.id === 'square' && (
                  <div className={`w-7 h-7 rounded-sm border-2 ${isActive ? 'border-[#E5B248] bg-[#E5B248]/20' : 'border-[#9E5664] bg-[#9E5664]/10'}`} />
                )}
                {opt.id === 'rectangle' && (
                  <div className={`w-9 h-6 rounded-sm border-2 ${isActive ? 'border-[#E5B248] bg-[#E5B248]/20' : 'border-[#9E5664] bg-[#9E5664]/10'}`} />
                )}
                {opt.id === 'custom' && (
                  <div className={`w-8 h-8 rounded-lg border-2 border-dashed flex items-center justify-center text-[10px] font-bold ${isActive ? 'border-[#E5B248] text-[#E5B248]' : 'border-[#9E5664] text-[#9E5664]'}`}>
                    W×H
                  </div>
                )}
              </div>

              {/* Title & Check */}
              <div className="w-full flex items-center justify-between text-center">
                <span className={`text-xs font-semibold tracking-wide w-full ${isActive ? 'text-[#FFF2D6]' : 'text-[#3D1017]'}`}>
                  {opt.label}
                </span>
                {isActive && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#E5B248] text-[#3D1017] rounded-full flex items-center justify-center">
                    <Check size={11} strokeWidth={3} />
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Custom Dimension Inputs when 'Custom' is selected */}
      {selectedShape === 'custom' && (
        <div className="mt-3.5 p-3.5 bg-[#FAF6F4] rounded-xl border border-[rgba(229,178,72,0.35)] flex flex-wrap items-center gap-4 animate-fadeIn">
          <div className="flex-1 min-w-[120px]">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#785A60] mb-1">
              Width (Feet)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="20"
                step="0.5"
                value={customWidthFt}
                onChange={(e) =>
                  onChangeCustomDimensions(
                    Math.max(1, Math.min(20, parseFloat(e.target.value) || 1)),
                    customHeightFt
                  )
                }
                className="w-full px-3 py-1.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-lg text-sm font-semibold text-[#3D1017] focus:outline-none focus:border-[#E5B248] focus:ring-1 focus:ring-[#E5B248]"
              />
              <span className="text-xs font-medium text-[#785A60]">ft</span>
            </div>
          </div>

          <div className="flex-1 min-w-[120px]">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#785A60] mb-1">
              Height (Feet)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="20"
                step="0.5"
                value={customHeightFt}
                onChange={(e) =>
                  onChangeCustomDimensions(
                    customWidthFt,
                    Math.max(1, Math.min(20, parseFloat(e.target.value) || 1))
                  )
                }
                className="w-full px-3 py-1.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-lg text-sm font-semibold text-[#3D1017] focus:outline-none focus:border-[#E5B248] focus:ring-1 focus:ring-[#E5B248]"
              />
              <span className="text-xs font-medium text-[#785A60]">ft</span>
            </div>
          </div>

          <div className="text-xs text-[#9E5664] italic w-full">
            💡 Bespoke lengths and shapes are hand-stitched to fit your entryway or hallway exactly.
          </div>
        </div>
      )}
    </div>
  )
}
