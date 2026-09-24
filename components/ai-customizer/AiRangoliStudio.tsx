'use client'

import React, { useState, useRef } from 'react'
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
  PROMPT_SUGGESTIONS,
} from './constants'
import AiPromptInput from './AiPromptInput'
import AiOptionSelectors from './AiOptionSelectors'
import AiRangoliPreview from './AiRangoliPreview'
import AiEnquiryModal from './AiEnquiryModal'
import { Sparkles, Wand2, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AiRangoliStudio() {
  const [promptText, setPromptText] = useState(
    'Create a round 3×3 ft woolen rangoli with an intricate peacock design in blue, green and gold.'
  )
  const [shape, setShape] = useState<AiShapeType>('round')
  const [size, setSize] = useState<AiSizeType>('3x3')
  const [customWidthFt, setCustomWidthFt] = useState(3)
  const [customHeightFt, setCustomHeightFt] = useState(3)
  const [pattern, setPattern] = useState<AiPatternType>('peacock')
  const [palette, setPalette] = useState<AiPaletteType>('royal')
  const [customColorsText, setCustomColorsText] = useState('')

  // Generation State
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationStep, setGenerationStep] = useState('')
  const [currentImageUrl, setCurrentImageUrl] = useState('/ai-rangoli/peacock-royal.jpg')
  const [seed, setSeed] = useState(42)
  const [hasGenerated, setHasGenerated] = useState(false)
  const [extraGold, setExtraGold] = useState(false)
  const [lastRefinement, setLastRefinement] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)

  // Map patterns to high-res fallback photography
  const getPatternFallback = (pat: AiPatternType, promptStr = '') => {
    const p = (pat + ' ' + promptStr).toLowerCase()
    if (
      p.includes('bmw') ||
      p.includes('car') ||
      p.includes('auto') ||
      p.includes('vehicle') ||
      p.includes('audi') ||
      p.includes('mercedes') ||
      p.includes('ferrari') ||
      p.includes('porsche')
    ) {
      return '/ai-rangoli/bmw-sports-mat.jpg'
    }
    if (p.includes('lion') || p.includes('tiger')) return '/ai-rangoli/test-lion.jpg'
    if (p.includes('lotus') || p.includes('kamal')) return '/ai-rangoli/lotus-floral.jpg'
    if (p.includes('diya') || p.includes('lamp') || p.includes('flame')) return '/ai-rangoli/diya-festive.jpg'
    if (p.includes('ganesha') || p.includes('ganesh') || p.includes('vakratunda')) return '/ai-rangoli/ganesha-traditional.jpg'
    if (p.includes('flower') || p.includes('floral') || p.includes('marigold') || p.includes('rose')) return '/ai-rangoli/floral-marigold.jpg'
    if (p.includes('mandala') || p.includes('chakra')) return '/ai-rangoli/mandala-royal.jpg'
    if (pat === 'custom') return '/ai-rangoli/bmw-sports-mat.jpg'
    return '/ai-rangoli/peacock-royal.jpg'
  }

  // Handle User Typing in Prompt Box
  const handlePromptChange = (val: string) => {
    setPromptText(val)
    const lower = val.toLowerCase()
    if (
      lower.includes('bmw') ||
      lower.includes('car') ||
      lower.includes('vehicle') ||
      lower.includes('auto') ||
      lower.includes('audi') ||
      lower.includes('mercedes')
    ) {
      setPattern('custom')
      setCurrentImageUrl('/ai-rangoli/bmw-sports-mat.jpg')
    } else if (lower.includes('lion') || lower.includes('tiger')) {
      setPattern('custom')
      setCurrentImageUrl('/ai-rangoli/test-lion.jpg')
    } else if (lower.includes('lotus') || lower.includes('kamal')) {
      setPattern('lotus')
      setCurrentImageUrl('/ai-rangoli/lotus-floral.jpg')
    } else if (lower.includes('diya') || lower.includes('lamp')) {
      setPattern('diya')
      setCurrentImageUrl('/ai-rangoli/diya-festive.jpg')
    } else if (lower.includes('ganesha') || lower.includes('ganesh') || lower.includes('vakratunda')) {
      setPattern('ganesha')
      setCurrentImageUrl('/ai-rangoli/ganesha-traditional.jpg')
    } else if (lower.includes('floral') || lower.includes('flower') || lower.includes('marigold')) {
      setPattern('floral')
      setCurrentImageUrl('/ai-rangoli/floral-marigold.jpg')
    } else if (lower.includes('mandala') || lower.includes('chakra')) {
      setPattern('mandala')
      setCurrentImageUrl('/ai-rangoli/mandala-royal.jpg')
    } else if (lower.includes('peacock') || lower.includes('mor')) {
      setPattern('peacock')
      setCurrentImageUrl('/ai-rangoli/peacock-royal.jpg')
    } else if (val.trim().length > 4 && !lower.includes('intricate peacock design')) {
      setPattern('custom')
    }
  }

  // Trigger AI generation
  const handleGenerate = async (refinement?: string) => {
    setIsGenerating(true)
    const nextSeed = Math.floor(Math.random() * 900000) + 100000
    setSeed(nextSeed)

    if (refinement) {
      setLastRefinement(refinement)
      if (refinement.toLowerCase().includes('gold') || refinement.toLowerCase().includes('border')) {
        setExtraGold(true)
      }
    } else {
      setLastRefinement('')
    }

    // Multi-step progress ticker for realistic AI generation feel
    setGenerationStep('✨ Analyzing custom motif & textile specifications...')
    const t1 = setTimeout(() => {
      setGenerationStep('🧵 Simulating 3D plush tufted wool fibers & color palette...')
    }, 1200)
    const t2 = setTimeout(() => {
      setGenerationStep('🎨 Sculpting realistic handcrafted depth and relief...')
    }, 3000)
    const t3 = setTimeout(() => {
      setGenerationStep('✨ Finalizing high-definition floor shadows & textures...')
    }, 5500)

    try {
      const res = await fetch('/api/generate-rangoli', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          shape,
          size,
          pattern,
          palette: palette === 'custom' ? customColorsText || 'custom' : palette,
          refineInstruction: refinement || '',
          seed: nextSeed,
        }),
      })

      const data = await res.json()

      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)

      setTimeout(() => {
        if (data.success && data.imageUrl) {
          setCurrentImageUrl(data.imageUrl)
        } else {
          setCurrentImageUrl(getPatternFallback(pattern, promptText))
        }
        setIsGenerating(false)
        setHasGenerated(true)

        // Smooth scroll to preview if on mobile/smaller screen
        if (window.innerWidth < 1024 && previewRef.current) {
          previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 300)
    } catch {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)

      setTimeout(() => {
        setCurrentImageUrl(getPatternFallback(pattern, promptText))
        setIsGenerating(false)
        setHasGenerated(true)

        if (window.innerWidth < 1024 && previewRef.current) {
          previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 300)
    }
  }

  // Handle Refine Design
  const handleApplyRefine = (instruction: string) => {
    handleGenerate(instruction)
  }

  // Handle Regenerate
  const handleRegenerate = () => {
    handleGenerate()
  }

  // Quick prompt select
  const handleSelectSuggestion = (suggestion: string) => {
    setPromptText(suggestion)
    const lower = suggestion.toLowerCase()
    if (lower.includes('bmw') || lower.includes('car')) {
      setPattern('custom')
      setCurrentImageUrl('/ai-rangoli/bmw-sports-mat.jpg')
    } else if (lower.includes('peacock')) {
      setPattern('peacock')
      setCurrentImageUrl('/ai-rangoli/peacock-royal.jpg')
    } else if (lower.includes('lotus')) {
      setPattern('lotus')
      setCurrentImageUrl('/ai-rangoli/lotus-floral.jpg')
    } else if (lower.includes('diya')) {
      setPattern('diya')
      setCurrentImageUrl('/ai-rangoli/diya-festive.jpg')
    } else if (lower.includes('mandala') || lower.includes('chakra')) {
      setPattern('mandala')
      setCurrentImageUrl('/ai-rangoli/mandala-royal.jpg')
    } else if (lower.includes('ganesha')) {
      setPattern('ganesha')
      setCurrentImageUrl('/ai-rangoli/ganesha-traditional.jpg')
    }

    if (suggestion.toLowerCase().includes('square')) setShape('square')
    else if (suggestion.toLowerCase().includes('round')) setShape('round')

    if (suggestion.toLowerCase().includes('4x4') || suggestion.toLowerCase().includes('4×4')) setSize('4x4')
    else if (suggestion.toLowerCase().includes('2x2') || suggestion.toLowerCase().includes('2×2')) setSize('2x2')
  }

  return (
    <section
      id="design-rangoli"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#F7F2E9] via-[#EFE5D5] to-[#F7F2E9] overflow-hidden"
    >
      {/* Background Indian Filigree Glows */}
      <div
        className="absolute top-1/4 left-[-150px] w-[500px] h-[500px] rounded-full bg-[#D8C9AE]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-[-150px] w-[500px] h-[500px] rounded-full bg-[#575757]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#575757]/10 via-[#D8C9AE]/30 to-[#575757]/10 border border-[#D8C9AE]/60 text-[#575757] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={13} className="text-[#575757] animate-pulse" />
            <span>AI-Powered Rangoli Studio • Realistic 3D Textiles</span>
            <Sparkles size={13} className="text-[#575757] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#575757] tracking-tight mb-2">
            Design Your Own Rangoli
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#3F3F3F] mb-2">
            Create a rangoli mat that reflects your style.
          </p>

          <p className="text-xs sm:text-sm text-[#6E6E6E] max-w-xl mx-auto leading-relaxed">
            &ldquo;Choose your shape, size, pattern and colors or type your vision to generate a realistic 3D woolen rangoli.&rdquo;
          </p>

          {/* Symmetrical Indian Gold Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent to-[#D8C9AE]" />
            <span className="text-[#D8C9AE] text-lg">⚜</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#575757]" />
            <span className="text-[#575757] text-sm">🪷</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#575757]" />
            <span className="text-[#D8C9AE] text-lg">⚜</span>
            <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent to-[#D8C9AE]" />
          </div>
        </div>

        {/* Studio Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Mobile Preview Top Display (Visible on small screens) */}
          <div className="block lg:hidden order-1">
            <AiRangoliPreview
              imageUrl={currentImageUrl}
              isGenerating={isGenerating}
              generationStep={generationStep}
              prompt={promptText}
              shape={shape}
              size={size === 'custom' ? `${customWidthFt}×${customHeightFt}` : size}
              pattern={pattern}
              palette={palette}
              extraGold={extraGold}
              lastRefinement={lastRefinement}
              hasGenerated={hasGenerated}
              onRegenerate={handleRegenerate}
              onApplyRefine={handleApplyRefine}
              onOpenEnquiry={() => setIsModalOpen(true)}
            />
          </div>

          {/* LEFT COLUMN: AI Prompt & Customization Panel */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            {/* Natural Language AI Prompt Box */}
            <AiPromptInput
              value={promptText}
              onChange={handlePromptChange}
              onSelectSuggestion={handleSelectSuggestion}
            />

            {/* 4 Step Option Selectors (Shape, Size, Pattern, Palette) */}
            <AiOptionSelectors
              shape={shape}
              size={size}
              pattern={pattern}
              palette={palette}
              customWidthFt={customWidthFt}
              customHeightFt={customHeightFt}
              customColorsText={customColorsText}
              onSelectShape={(s) => {
                setShape(s)
                setCurrentImageUrl(getPatternFallback(pattern, promptText))
              }}
              onSelectSize={(sz) => setSize(sz)}
              onSelectPattern={(p) => {
                setPattern(p)
                if (p === 'custom') {
                  if (promptText.toLowerCase().includes('intricate peacock design in blue, green and gold')) {
                    setPromptText('Create a luxury circular woolen rangoli mat with a BMW car design in royal blue and silver wool.')
                  }
                  setCurrentImageUrl(getPatternFallback('custom', promptText))
                } else {
                  setCurrentImageUrl(getPatternFallback(p, promptText))
                }
              }}
              onSelectPalette={(pal) => setPalette(pal)}
              onChangeCustomDimensions={(w, h) => {
                setCustomWidthFt(w)
                setCustomHeightFt(h)
              }}
              onChangeCustomColorsText={setCustomColorsText}
            />

            {/* Large Prominent "✨ Generate My Rangoli / Generate Now" Button */}
            <div className="pt-2">
              <button
                type="button"
                id="generate-rangoli-btn"
                onClick={() => handleGenerate()}
                disabled={isGenerating}
                className="w-full py-4 px-6 bg-[#575757] hover:bg-[#3F3F3F] text-[#F7F2E9] font-serif text-lg md:text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-[#D8C9AE] disabled:opacity-60 relative overflow-hidden group"
              >
                {/* Shimmer animated sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />

                {isGenerating ? (
                  <>
                    <Loader2 size={24} className="animate-spin text-[#D8C9AE]" />
                    <span>Synthesizing Woolen Rangoli...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={24} className="text-[#D8C9AE]" />
                    <span>✨ Generate My Rangoli</span>
                    <ArrowRight size={20} className="text-[#D8C9AE]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-2.5 text-xs text-[#6E6E6E]">
                <CheckCircle2 size={13} className="text-[#575757]" />
                <span>Instant 3D Textile Synthesis • Click &ldquo;Generate&rdquo; to preview your mat</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Centerpiece Live Preview Canvas (Desktop Sticky) */}
          <div ref={previewRef} className="hidden lg:block lg:col-span-6 lg:sticky lg:top-20 space-y-4 order-3 lg:order-2">
            <AiRangoliPreview
              imageUrl={currentImageUrl}
              isGenerating={isGenerating}
              generationStep={generationStep}
              prompt={promptText}
              shape={shape}
              size={size === 'custom' ? `${customWidthFt}×${customHeightFt}` : size}
              pattern={pattern}
              palette={palette}
              extraGold={extraGold}
              lastRefinement={lastRefinement}
              hasGenerated={hasGenerated}
              onRegenerate={handleRegenerate}
              onApplyRefine={handleApplyRefine}
              onOpenEnquiry={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <AiEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prompt={promptText}
        shape={shape}
        size={size === 'custom' ? `${customWidthFt}×${customHeightFt}` : size}
        pattern={pattern}
        palette={palette}
        imageUrl={currentImageUrl}
      />
    </section>
  )
}
