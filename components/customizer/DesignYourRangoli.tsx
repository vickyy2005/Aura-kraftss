'use client'

import React, { useState } from 'react'
import {
  RangoliDesignState,
  ShapeType,
  SizeType,
  PatternType,
  ColorPresetId,
  ColorScheme,
  FloorTexture,
} from './types'
import {
  DEFAULT_DESIGN_STATE,
  COLOR_PRESETS,
  PATTERN_OPTIONS,
  SHAPE_OPTIONS,
  SIZE_OPTIONS,
} from './constants'
import ShapeSelector from './ShapeSelector'
import SizeSelector from './SizeSelector'
import PatternSelector from './PatternSelector'
import ColorSelector from './ColorSelector'
import RangoliPreview from './RangoliPreview'
import DesignSummary from './DesignSummary'
import EnquiryModal from './EnquiryModal'
import { Sparkles, Heart } from 'lucide-react'

export default function DesignYourRangoli() {
  const [state, setState] = useState<RangoliDesignState>(DEFAULT_DESIGN_STATE)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handlers for individual selectors
  const handleSelectShape = (shape: ShapeType) => {
    setState((prev) => ({ ...prev, shape }))
  }

  const handleSelectSize = (size: SizeType) => {
    setState((prev) => ({ ...prev, size }))
  }

  const handleChangeCustomDimensions = (w: number, h: number) => {
    setState((prev) => ({
      ...prev,
      customWidthFt: w,
      customHeightFt: h,
    }))
  }

  const handleSelectPattern = (pattern: PatternType) => {
    setState((prev) => ({ ...prev, pattern }))
  }

  const handleSelectPreset = (presetId: ColorPresetId) => {
    const found = COLOR_PRESETS.find((p) => p.id === presetId)
    if (found) {
      setState((prev) => ({
        ...prev,
        paletteId: presetId,
        colors: { ...found.colors },
      }))
    }
  }

  const handleChangeIndividualColor = (key: keyof ColorScheme, value: string) => {
    setState((prev) => ({
      ...prev,
      paletteId: 'custom',
      colors: {
        ...prev.colors,
        [key]: value,
      },
    }))
  }

  const handleToggleRotation = () => {
    setState((prev) => ({ ...prev, isRotating: !prev.isRotating }))
  }

  const handleChangeFloor = (floorTexture: FloorTexture) => {
    setState((prev) => ({ ...prev, floorTexture }))
  }

  // Reset to default
  const handleReset = () => {
    setState(DEFAULT_DESIGN_STATE)
  }

  // Surprise Me - Random combination
  const handleSurpriseMe = () => {
    const shapes: ShapeType[] = ['round', 'square', 'rectangle']
    const sizes: SizeType[] = ['2x2', '3x3', '4x4']
    const patterns: PatternType[] = [
      'lotus',
      'peacock',
      'floral',
      'diya',
      'mandala',
      'ganesha',
      'custom',
    ]

    const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)]
    const randomPreset = COLOR_PRESETS[Math.floor(Math.random() * COLOR_PRESETS.length)]

    setState((prev) => ({
      ...prev,
      shape: randomShape,
      size: randomSize,
      pattern: randomPattern,
      paletteId: randomPreset.id,
      colors: { ...randomPreset.colors },
    }))
  }

  return (
    <section
      id="design-rangoli"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#FAF6F4] via-[#F3EAE6] to-[#FAF6F4] overflow-hidden"
    >
      {/* Background Ornate Indian Floral Motif Watermarks */}
      <div
        className="absolute top-10 left-[-100px] w-96 h-96 opacity-5 pointer-events-none rounded-full border-8 border-[#5E1D28]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-[-100px] w-96 h-96 opacity-5 pointer-events-none rounded-full border-8 border-[#E5B248]"
        aria-hidden="true"
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5E1D28]/10 border border-[#5E1D28]/20 text-[#5E1D28] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-[#E5B248]" />
            <span>Interactive Custom Atelier</span>
            <Sparkles size={13} className="text-[#E5B248]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#5E1D28] tracking-tight mb-2">
            Design Your Own Rangoli
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#8B1E2D] mb-3">
            Create a rangoli mat that reflects your style.
          </p>

          <p className="text-xs sm:text-sm text-[#785A60] max-w-xl mx-auto leading-relaxed">
            &ldquo;Choose your shape, size, pattern and colors to create your own unique design.&rdquo;
          </p>

          {/* Indian-Inspired Symmetrical Royal Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#E5B248]" />
            <span className="text-[#E5B248] text-base">⚜</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B248]" />
            <span className="text-[#5E1D28] text-sm">🪷</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B248]" />
            <span className="text-[#E5B248] text-base">⚜</span>
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#E5B248]" />
          </div>
        </div>

        {/* Main Two-Column Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Mobile-only Preview Anchor: on small screens, show preview near top */}
          <div className="block lg:hidden order-1">
            <RangoliPreview
              state={state}
              onToggleRotation={handleToggleRotation}
              onChangeFloor={handleChangeFloor}
            />
          </div>

          {/* LEFT: Customization Panel (4 Steps) */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            {/* Step 01: Shape */}
            <ShapeSelector
              selectedShape={state.shape}
              onSelectShape={handleSelectShape}
              customWidthFt={state.customWidthFt}
              customHeightFt={state.customHeightFt}
              onChangeCustomDimensions={handleChangeCustomDimensions}
            />

            {/* Step 02: Size */}
            <SizeSelector
              selectedSize={state.size}
              onSelectSize={handleSelectSize}
              customWidthFt={state.customWidthFt}
              customHeightFt={state.customHeightFt}
              onChangeCustomDimensions={handleChangeCustomDimensions}
            />

            {/* Step 03: Pattern */}
            <PatternSelector
              selectedPattern={state.pattern}
              onSelectPattern={handleSelectPattern}
              colors={state.colors}
            />

            {/* Step 04: Colors */}
            <ColorSelector
              selectedPresetId={state.paletteId}
              colors={state.colors}
              onSelectPreset={handleSelectPreset}
              onChangeIndividualColor={handleChangeIndividualColor}
            />
          </div>

          {/* RIGHT: Live Preview, Design Summary, and Enquiry CTA */}
          <div className="lg:col-span-6 space-y-6 order-3 lg:order-2 lg:sticky lg:top-24">
            {/* Desktop Preview */}
            <div className="hidden lg:block">
              <RangoliPreview
                state={state}
                onToggleRotation={handleToggleRotation}
                onChangeFloor={handleChangeFloor}
              />
            </div>

            {/* Summary Card, Action Buttons & Enquiry CTA */}
            <DesignSummary
              state={state}
              onReset={handleReset}
              onSurpriseMe={handleSurpriseMe}
              onOpenEnquiry={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Enquiry Consultation Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        state={state}
      />
    </section>
  )
}
