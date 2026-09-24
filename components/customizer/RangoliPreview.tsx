'use client'

import React from 'react'
import { RangoliDesignState, FloorTexture } from './types'
import { FLOOR_TEXTURES } from './constants'
import RangoliArt from './RangoliArt'
import { RotateCw, Sparkles, Layers } from 'lucide-react'

interface RangoliPreviewProps {
  state: RangoliDesignState
  onToggleRotation: () => void
  onChangeFloor: (texture: FloorTexture) => void
}

export default function RangoliPreview({
  state,
  onToggleRotation,
  onChangeFloor,
}: RangoliPreviewProps) {
  const { shape, size, pattern, colors, customWidthFt, customHeightFt, isRotating, floorTexture } = state

  // Get active floor styling
  const currentFloor =
    FLOOR_TEXTURES.find((f) => f.id === floorTexture) || FLOOR_TEXTURES[0]

  // Dimension label
  const dimensionLabel =
    size === '2x2'
      ? '2 × 2 ft (60 cm)'
      : size === '3x3'
      ? '3 × 3 ft (91 cm)'
      : size === '4x4'
      ? '4 × 4 ft (122 cm)'
      : `${customWidthFt} × ${customHeightFt} ft`

  // Scale factor based on size
  const scaleStyle =
    size === '2x2'
      ? 'scale-90 md:scale-95'
      : size === '4x4'
      ? 'scale-105 md:scale-105'
      : 'scale-100'

  return (
    <div className="rangoli-live-preview-container flex flex-col h-full bg-[#FAF6F4] rounded-2xl md:rounded-3xl border-2 border-[rgba(229,178,72,0.4)] shadow-xl overflow-hidden">
      {/* Top Preview Bar */}
      <div className="px-4 py-3 md:px-6 md:py-3.5 bg-gradient-to-r from-[#5E1D28] via-[#4D151F] to-[#3D1017] text-[#FFF4DE] flex flex-wrap items-center justify-between gap-2.5 z-20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5B248] animate-pulse" />
          <h3 className="text-sm md:text-base font-serif font-bold tracking-wide m-0 text-[#FFF2D6]">
            Live Preview
          </h3>
          <span className="hidden sm:inline-block text-[11px] text-[#E5B248] border border-[rgba(229,178,72,0.4)] px-2 py-0.5 rounded-full capitalize">
            {shape} • {pattern}
          </span>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-2">
          {/* Floor Texture Switcher */}
          <div className="flex items-center gap-1 bg-[#260B0F]/70 p-1 rounded-lg border border-[rgba(229,178,72,0.25)]">
            <span className="text-[10px] text-[#E5B248] px-1 hidden lg:inline">Floor:</span>
            {FLOOR_TEXTURES.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => onChangeFloor(f.id)}
                title={f.name}
                className={`w-4 h-4 rounded-full border transition-transform ${
                  floorTexture === f.id
                    ? 'border-[#E5B248] ring-2 ring-[#E5B248]/50 scale-110'
                    : 'border-white/30 opacity-70 hover:opacity-100'
                }`}
                style={{ background: f.bg }}
              />
            ))}
          </div>

          {/* Slow Spin Toggle */}
          <button
            type="button"
            onClick={onToggleRotation}
            className={`text-xs px-2.5 py-1 rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
              isRotating
                ? 'bg-[#E5B248] text-[#3D1017] font-bold border-[#E5B248]'
                : 'bg-white/10 hover:bg-white/20 text-[#FFF2D6] border-white/20'
            }`}
            title="Toggle gentle circular rotation"
          >
            <RotateCw size={12} className={isRotating ? 'animate-spin' : ''} />
            <span className="text-[11px] hidden sm:inline">
              {isRotating ? 'Spinning' : 'Spin Art'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Floor Surface Area & Rangoli Mat */}
      <div
        className="relative flex-1 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] p-6 sm:p-10 flex items-center justify-center overflow-hidden transition-all duration-700"
        style={{ background: currentFloor.bg }}
      >
        {/* Subtle Luxury Tile Inlay Grid on Floor */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Floating Dimension Callout Badge */}
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[rgba(229,178,72,0.4)] shadow-md flex items-center gap-1.5 text-xs font-semibold text-[#5E1D28]">
          <Layers size={13} className="text-[#AA771C]" />
          <span>{dimensionLabel}</span>
        </div>

        {/* Floating Artisan Verification Badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[rgba(229,178,72,0.4)] shadow-md flex items-center gap-1 text-[11px] font-semibold text-[#3D1017]">
          <Sparkles size={11} className="text-[#E5B248]" />
          <span>100% Hand-knotted</span>
        </div>

        {/* Center Live Rangoli SVG Art */}
        <div
          className={`w-full max-w-[480px] aspect-square flex items-center justify-center transition-transform duration-500 ${scaleStyle}`}
        >
          <RangoliArt
            pattern={pattern}
            shape={shape}
            colors={colors}
            isRotating={isRotating}
          />
        </div>
      </div>
    </div>
  )
}
