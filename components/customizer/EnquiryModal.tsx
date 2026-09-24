'use client'

import React, { useState, useEffect } from 'react'
import { RangoliDesignState } from './types'
import { COLOR_PRESETS, PATTERN_OPTIONS, SHAPE_OPTIONS, SIZE_OPTIONS } from './constants'
import { X, CheckCircle2, MessageCircle, Send, Sparkles, Heart } from 'lucide-react'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  state: RangoliDesignState
}

export default function EnquiryModal({ isOpen, onClose, state }: EnquiryModalProps) {
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

  // Pre-generate standard message
  const defaultMessage = `I am interested in a ${shapeLabel} ${sizeLabel} ${patternLabel} rangoli mat with ${paletteName} colors (Base: ${colors.base}, Primary: ${colors.primary}, Accent: ${colors.accent}). Please share pricing and crafting timeline.`

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(defaultMessage)
  const [submitted, setSubmitted] = useState(false)

  // Update default message when design state changes
  useEffect(() => {
    setMessage(
      `I am interested in a ${shapeLabel} ${sizeLabel} ${patternLabel} rangoli mat with ${paletteName} colors (Base: ${colors.base}, Primary: ${colors.primary}, Accent: ${colors.accent}). Please share pricing and crafting timeline.`
    )
  }, [shapeLabel, sizeLabel, patternLabel, paletteName, colors])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated demo submission
    setSubmitted(true)
  }

  const handleWhatsAppRedirect = () => {
    const waText = `*Custom Rangoli Mat Design Enquiry - aura.kraftss*
    
• Name: ${name || 'Customer'}
• Phone: ${phone || 'Not provided'}
• Email: ${email || 'Not provided'}
• Shape: ${shapeLabel}
• Size: ${sizeLabel}
• Pattern: ${patternLabel}
• Colors: ${paletteName}
• Notes: ${message}`

    const url = `https://wa.me/919607778013?text=${encodeURIComponent(waText)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF6F4] rounded-2xl md:rounded-3xl border-2 border-[#E5B248] shadow-2xl overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#5E1D28] via-[#4D151F] to-[#3D1017] p-5 text-[#FFF4DE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#E5B248] text-lg">⚜</span>
            <div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-[#FFF2D6] m-0">
                Design Consultation
              </h3>
              <p className="text-xs text-[#E5B248] m-0">aura.kraftss Atelier</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-[#E5B248]/20 border-2 border-[#E5B248] text-[#AA771C] mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <h4 className="text-2xl font-serif font-bold text-[#5E1D28] mb-1">
                  Thank You!
                </h4>
                <p className="text-sm font-semibold text-[#AA771C]">
                  Your design enquiry has been noted.
                </p>
                <p className="text-xs text-[#785A60] mt-2 max-w-sm mx-auto">
                  Our artisan team will review your {shapeLabel} {patternLabel} specifications and contact you shortly with a personalized digital preview and quote.
                </p>
              </div>

              {/* Design Spec Pill */}
              <div className="bg-white p-3 rounded-xl border border-[rgba(158,86,100,0.2)] text-xs text-[#3D1017] text-left space-y-1">
                <div className="font-bold text-[#5E1D28]">Selected Specifications:</div>
                <div>• Shape &amp; Size: {shapeLabel} ({sizeLabel})</div>
                <div>• Pattern: {patternLabel}</div>
                <div>• Palette: {paletteName}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 bg-[#5E1D28] hover:bg-[#3D1017] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Close &amp; Keep Designing
                </button>
              </div>
            </div>
          ) : (
            /* Consultation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Design Spec Summary Badge */}
              <div className="p-3 bg-white rounded-xl border border-[rgba(229,178,72,0.35)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#E5B248]" />
                  <span className="font-semibold text-[#3D1017]">
                    {shapeLabel} • {sizeLabel} • {patternLabel}
                  </span>
                </div>
                <div className="flex items-center -space-x-1">
                  <span className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: colors.base }} />
                  <span className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: colors.primary }} />
                  <span className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: colors.accent }} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#785A60] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full px-3.5 py-2.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-xl text-sm text-[#3D1017] focus:outline-none focus:border-[#E5B248] focus:ring-1 focus:ring-[#E5B248]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785A60] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-xl text-sm text-[#3D1017] focus:outline-none focus:border-[#E5B248] focus:ring-1 focus:ring-[#E5B248]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#785A60] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-xl text-sm text-[#3D1017] focus:outline-none focus:border-[#E5B248] focus:ring-1 focus:ring-[#E5B248]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#785A60] mb-1">
                  Customization Details &amp; Event Notes
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[rgba(158,86,100,0.25)] rounded-xl text-xs md:text-sm text-[#3D1017] focus:outline-none focus:border-[#E5B248] focus:ring-1 focus:ring-[#E5B248] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-[#785A60] hover:text-[#3D1017] cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#5E1D28] to-[#3D1017] hover:from-[#7A2434] hover:to-[#5E1D28] text-[#FFF4DE] font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer border border-[#E5B248]/60"
                >
                  <Send size={15} />
                  <span>Submit Design Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
