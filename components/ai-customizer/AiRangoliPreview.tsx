'use client'

import React, { useState } from 'react'
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  Sliders,
  Send,
  Layers,
  Heart,
  Loader2,
  CheckCircle2,
} from 'lucide-react'
import { REFINE_SUGGESTIONS } from './constants'

interface AiRangoliPreviewProps {
  imageUrl: string
  isGenerating: boolean
  generationStep: string
  prompt: string
  shape: string
  size: string
  pattern: string
  palette: string
  extraGold?: boolean
  lastRefinement?: string
  hasGenerated?: boolean
  onRegenerate: () => void
  onApplyRefine: (instruction: string) => void
  onOpenEnquiry: () => void
}

export default function AiRangoliPreview({
  imageUrl,
  isGenerating,
  generationStep,
  prompt,
  shape,
  size,
  pattern,
  palette,
  extraGold = false,
  lastRefinement = '',
  hasGenerated = false,
  onRegenerate,
  onApplyRefine,
  onOpenEnquiry,
}: AiRangoliPreviewProps) {
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isRefineOpen, setIsRefineOpen] = useState(false)
  const [refineText, setRefineText] = useState('')

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(2.5, prev + 0.3))
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(1, prev - 0.3))
  const handleResetZoom = () => setZoomLevel(1)

  const handleRefineSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!refineText.trim()) return
    onApplyRefine(refineText.trim())
    setRefineText('')
  }

  const safeImageUrl = imageUrl || '/ai-rangoli/peacock-royal.jpg'

  return (
    <div className="flex flex-col h-full bg-[#F7F2E9] rounded-2xl md:rounded-3xl border-2 border-[rgba(87,87,87,0.25)] shadow-2xl overflow-hidden relative">
      {/* Top Preview Toolbar */}
      <div className="px-4 py-3 md:px-6 md:py-3.5 bg-gradient-to-r from-[#575757] via-[#3F3F3F] to-[#262626] text-[#F7F2E9] flex flex-wrap items-center justify-between gap-3 z-20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5B942] animate-pulse" />
          <h3 className="text-sm md:text-base font-serif font-bold m-0 tracking-wide" style={{ color: '#FFFFFF' }}>
            3D Woolen Rangoli Preview
          </h3>
          <span
            className="text-[11px] border border-[#E5B942]/60 bg-[#E5B942]/15 px-2.5 py-0.5 rounded-full capitalize font-semibold"
            style={{ color: '#E5B942' }}
          >
            {pattern}
          </span>
        </div>

        {/* Action Controls: Zoom, Fullscreen, Regenerate */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Zoom Buttons */}
          <div className="flex items-center bg-[#262626]/80 p-0.5 rounded-lg border border-[#D8C9AE]/40">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-1.5 text-white hover:text-[#E5B942] disabled:opacity-40 transition-colors cursor-pointer"
              title="Zoom out"
              style={{ color: '#FFFFFF' }}
            >
              <ZoomOut size={14} />
            </button>
            <span className="text-[11px] font-mono font-bold px-1.5" style={{ color: '#E5B942' }}>
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 text-white hover:text-[#E5B942] disabled:opacity-40 transition-colors cursor-pointer"
              title="Zoom in (inspect wool texture)"
              style={{ color: '#FFFFFF' }}
            >
              <ZoomIn size={14} />
            </button>
            {zoomLevel > 1 && (
              <button
                type="button"
                onClick={handleResetZoom}
                className="text-[10px] text-white hover:text-[#E5B942] px-1 transition-colors cursor-pointer underline"
                style={{ color: '#FFFFFF' }}
              >
                Reset
              </button>
            )}
          </div>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 bg-white/15 hover:bg-white/25 text-white rounded-lg border border-white/30 transition-all cursor-pointer"
            title="Inspect Fullscreen"
            style={{ color: '#FFFFFF' }}
          >
            <Maximize2 size={14} />
          </button>

          {/* Regenerate Variation Button */}
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isGenerating}
            className="px-2.5 py-1.5 bg-white/15 hover:bg-white/25 text-white hover:text-[#E5B942] rounded-lg border border-white/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            title="Regenerate new variation"
            style={{ color: '#FFFFFF' }}
          >
            <RotateCcw size={12} className={isGenerating ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">Regenerate</span>
          </button>

          {/* Refine Design Toggle */}
          <button
            type="button"
            onClick={() => setIsRefineOpen(!isRefineOpen)}
            className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
              isRefineOpen
                ? 'bg-[#D8C9AE] text-[#262626] border-[#D8C9AE]'
                : 'bg-[#575757]/60 hover:bg-[#575757] text-[#F7F2E9] border-[#D8C9AE]/50'
            }`}
          >
            <Sliders size={13} />
            <span>Refine Design</span>
          </button>
        </div>
      </div>

      {/* Main Floor Surface & Rangoli Mat Viewport */}
      <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] md:min-h-[500px] p-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7F2E9] via-[#EFE5D5] to-[#EFE5D5]">
        {/* Soft Luxury Texture Effect */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Floating Verified Spec Badge */}
        <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D8C9AE]/70 shadow-md flex items-center gap-1.5 text-xs font-bold text-[#575757]">
          <Layers size={13} className="text-[#575757]" />
          <span>{shape} • {size} ft</span>
        </div>

        {/* Floating Textile Texture Badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D8C9AE]/70 shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-[#262626]">
          <Sparkles size={11} className="text-[#D8C9AE]" />
          <span>Real 3D Tufted Wool</span>
        </div>

        {/* Success Toast When Generated */}
        {hasGenerated && !isGenerating && (
          <div className="absolute top-4 right-4 z-10 bg-[#575757] text-[#F7F2E9] px-3 py-1 rounded-full border border-[#D8C9AE] shadow-lg flex items-center gap-1.5 text-[11px] font-bold animate-fadeIn">
            <CheckCircle2 size={12} className="text-[#D8C9AE]" />
            <span>Design Generated!</span>
          </div>
        )}

        {/* Centerpiece Image Viewport */}
        <div
          className="relative max-w-[500px] w-full aspect-square flex items-center justify-center transition-transform duration-300"
          style={{
            transform: `scale(${zoomLevel})`,
            cursor: zoomLevel > 1 ? 'grab' : 'default',
          }}
        >
          {/* The High-Resolution 3D Woolen Rangoli Mat Image */}
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={safeImageUrl}
              alt="AI-generated handcrafted woolen rangoli mat"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = '/ai-rangoli/peacock-royal.jpg'
              }}
            />

            {/* Extra Gold Zardozi Border Refinement Filter Overlay */}
            {extraGold && (
              <div
                className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none border-4 border-[#D8C9AE] shadow-[inset_0_0_30px_rgba(216,201,174,0.6)] animate-pulse"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {/* Generation Progress Overlay */}
        {isGenerating && (
          <div className="absolute inset-0 z-30 bg-[#262626]/75 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center text-[#F7F2E9] animate-fadeIn">
            <div className="relative mb-5">
              <div className="w-20 h-20 rounded-full border-4 border-[#D8C9AE]/30 border-t-[#D8C9AE] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-[#D8C9AE]">
                <Sparkles size={28} className="animate-pulse" />
              </div>
            </div>

            <h4 className="text-xl md:text-2xl font-serif font-bold text-[#F7F2E9] mb-1.5">
              Weaving Your 3D Rangoli
            </h4>
            <p className="text-xs md:text-sm text-[#D8C9AE] font-medium max-w-sm mb-4">
              {generationStep || 'Simulating 3D plush woolen textile preview...'}
            </p>

            <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#575757] via-[#D8C9AE] to-[#575757] animate-pulse rounded-full w-3/4" />
            </div>
          </div>
        )}
      </div>

      {/* Refine Design Expandable Drawer */}
      {isRefineOpen && (
        <div className="bg-[#F7F2E9] border-t-2 border-[#D8C9AE] p-4 md:p-5 z-20 animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#575757]">
              <Sliders size={13} className="text-[#575757]" />
              <span>Refine Design (AI Variation Prompt)</span>
            </div>
            <button
              type="button"
              onClick={() => setIsRefineOpen(false)}
              className="text-xs text-[#6E6E6E] hover:text-[#262626] underline cursor-pointer"
            >
              Close
            </button>
          </div>

          {lastRefinement && (
            <div className="text-[11px] text-[#575757] font-semibold mb-2">
              Active Refinement: &ldquo;{lastRefinement}&rdquo;
            </div>
          )}

          <form onSubmit={handleRefineSubmit} className="space-y-2.5">
            <div className="flex gap-2">
              <input
                type="text"
                value={refineText}
                onChange={(e) => setRefineText(e.target.value)}
                placeholder="e.g. Make the border more detailed and add more gold."
                className="flex-1 px-3.5 py-2.5 bg-white border border-[rgba(87,87,87,0.28)] rounded-xl text-xs md:text-sm text-[#262626] focus:outline-none focus:border-[#575757] font-medium"
              />
              <button
                type="submit"
                disabled={isGenerating || !refineText.trim()}
                className="px-4 py-2.5 bg-[#575757] hover:bg-[#262626] text-[#F7F2E9] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
                <span>Apply</span>
              </button>
            </div>

            {/* Quick Refinement Suggestion Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {REFINE_SUGGESTIONS.map((sug, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRefineText(sug)}
                  className="text-[10px] text-[#575757] bg-white hover:bg-[#F7F2E9] border border-[#D8C9AE]/60 px-2 py-0.5 rounded-full transition-colors cursor-pointer text-left"
                >
                  + {sug}
                </button>
              ))}
            </div>
          </form>
        </div>
      )}

      {/* Bottom Design Summary & Direct Enquiry CTA */}
      <div className="p-3.5 sm:p-4 md:p-4.5 bg-white border-t border-[#E8A5BD]/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="text-left min-w-0 flex-1 overflow-hidden pr-2">
          <div className="text-xs font-bold truncate" style={{ color: '#380D1D' }}>
            Selected: <span className="capitalize">{shape}</span> • {size} ft • <span className="capitalize">{pattern}</span> • <span className="capitalize">{palette}</span>
          </div>
          <div className="text-[11px] mt-0.5 truncate" style={{ color: '#783F53' }}>
            Prompt: &ldquo;{prompt}&rdquo;
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenEnquiry}
          className="flex-shrink-0 w-full sm:w-auto px-4 py-2.5 sm:px-4.5 sm:py-2.5 bg-[#A82855] hover:bg-[#8A1A42] font-bold text-xs sm:text-sm rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E8A5BD] whitespace-nowrap"
          style={{ backgroundColor: '#A82855', color: '#FFFFFF' }}
        >
          <Heart size={14} className="fill-white text-white flex-shrink-0" />
          <span style={{ color: '#FFFFFF' }} className="font-bold">Enquire About Design</span>
        </button>
      </div>

      {/* Fullscreen High-Res Modal Lightbox */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 md:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/20">
            <div>
              <h4 className="text-lg font-serif font-bold text-[#FAF6F0] m-0">
                High-Resolution 3D Woolen Rangoli Inspection
              </h4>
              <p className="text-xs text-[#C58A4E] m-0">
                {shape} • {size} ft • {pattern} • {palette}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <Minimize2 size={20} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
            <img
              src={safeImageUrl}
              alt="High-resolution AI rangoli mat"
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = '/ai-rangoli/peacock-royal.jpg'
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
