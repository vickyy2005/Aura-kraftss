'use client'

import React, { useState } from 'react'
import { ColorPresetId, ColorScheme } from './types'
import { COLOR_PRESETS } from './constants'
import { Check, Palette, Sliders } from 'lucide-react'

interface ColorSelectorProps {
  selectedPresetId: ColorPresetId | 'custom'
  colors: ColorScheme
  onSelectPreset: (presetId: ColorPresetId) => void
  onChangeIndividualColor: (key: keyof ColorScheme, value: string) => void
}

export default function ColorSelector({
  selectedPresetId,
  colors,
  onSelectPreset,
  onChangeIndividualColor,
}: ColorSelectorProps) {
  const [showCustomPickers, setShowCustomPickers] = useState(false)

  const colorFields: { key: keyof ColorScheme; label: string; desc: string }[] = [
    { key: 'base', label: 'Base Cloth', desc: 'Background velvet / felt' },
    { key: 'primary', label: 'Primary Motif', desc: 'Outer petals & border' },
    { key: 'secondary', label: 'Secondary Tone', desc: 'Inner plumes & filigree' },
    { key: 'accent', label: 'Accent Highlight', desc: 'Gold dots & diya flames' },
  ]

  return (
    <div className="rangoli-customizer-step">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="step-number-badge">04</span>
          <div>
            <h3 className="text-base md:text-lg font-serif font-bold text-[#5E1D28] leading-tight m-0">
              Select Color Palette
            </h3>
            <p className="text-xs text-[#785A60] m-0">Curated royal palettes or bespoke custom tints</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowCustomPickers(!showCustomPickers)}
          className="text-xs font-semibold text-[#5E1D28] hover:text-[#3D1017] flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF6F4] border border-[rgba(158,86,100,0.2)] transition-colors cursor-pointer"
        >
          <Sliders size={13} className="text-[#E5B248]" />
          <span>{showCustomPickers ? 'Hide Custom Pickers' : 'Fine-Tune Colors'}</span>
        </button>
      </div>

      {/* Preset Color Palettes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {COLOR_PRESETS.map((preset) => {
          const isActive = selectedPresetId === preset.id

          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset.id)}
              className={`group relative p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between gap-2 cursor-pointer ${
                isActive
                  ? 'bg-[#5E1D28] text-[#FFF4DE] border-[#E5B248] shadow-md shadow-[#5E1D28]/20 ring-2 ring-[#E5B248]/30 -translate-y-0.5'
                  : 'bg-white/80 hover:bg-white text-[#3D1017] border-[rgba(158,86,100,0.2)] hover:border-[#C5A059] hover:shadow-sm'
              }`}
            >
              {/* Color Swatch Circles */}
              <div className="flex items-center gap-1.5">
                <span
                  className="w-5 h-5 rounded-full border border-black/15 shadow-inner"
                  style={{ backgroundColor: preset.colors.base }}
                  title="Base"
                />
                <span
                  className="w-5 h-5 rounded-full border border-black/15 shadow-inner"
                  style={{ backgroundColor: preset.colors.primary }}
                  title="Primary"
                />
                <span
                  className="w-5 h-5 rounded-full border border-black/15 shadow-inner"
                  style={{ backgroundColor: preset.colors.secondary }}
                  title="Secondary"
                />
                <span
                  className="w-5 h-5 rounded-full border border-black/15 shadow-inner"
                  style={{ backgroundColor: preset.colors.accent }}
                  title="Accent"
                />
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className={`text-xs font-bold block ${isActive ? 'text-[#FFF2D6]' : 'text-[#3D1017]'}`}>
                  {preset.name}
                </span>
                <span className={`text-[10px] leading-tight block ${isActive ? 'text-[#E5B248]' : 'text-[#785A60]'}`}>
                  {preset.subtitle}
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

      {/* Individual Custom Color Pickers */}
      {showCustomPickers && (
        <div className="mt-3.5 p-3.5 bg-[#FAF6F4] rounded-xl border border-[rgba(229,178,72,0.35)] animate-fadeIn">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Palette size={14} className="text-[#E5B248]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E1D28] m-0">
              Individual Color Pickers
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {colorFields.map((field) => (
              <div key={field.key} className="bg-white p-2.5 rounded-lg border border-[rgba(158,86,100,0.18)]">
                <label className="block text-[11px] font-bold text-[#3D1017] mb-0.5">
                  {field.label}
                </label>
                <span className="block text-[9px] text-[#785A60] mb-2 leading-tight">
                  {field.desc}
                </span>

                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[rgba(229,178,72,0.6)] shadow-sm shrink-0 cursor-pointer">
                    <input
                      type="color"
                      value={colors[field.key]}
                      onChange={(e) => onChangeIndividualColor(field.key, e.target.value)}
                      className="absolute -top-3 -left-3 w-14 h-14 cursor-pointer opacity-0"
                    />
                    <div
                      className="w-full h-full"
                      style={{ backgroundColor: colors[field.key] }}
                    />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase text-[#3D1017]">
                    {colors[field.key]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
