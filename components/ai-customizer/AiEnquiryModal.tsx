'use client'

import React, { useState } from 'react'
import { X, CheckCircle2, MessageCircle, Send, Sparkles } from 'lucide-react'

interface AiEnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  prompt: string
  shape: string
  size: string
  pattern: string
  palette: string
  imageUrl: string
}

export default function AiEnquiryModal({
  isOpen,
  onClose,
  prompt,
  shape,
  size,
  pattern,
  palette,
  imageUrl,
}: AiEnquiryModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState(
    `I am interested in having this AI-designed ${shape} ${size} ft ${pattern} rangoli mat custom-made by aura.kraftss. Design specifications: "${prompt}". Please share pricing and crafting timeline.`
  )
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleWhatsAppChat = () => {
    const waText = `*AI Custom Rangoli Design Order Enquiry - aura.kraftss*
    
• Client Name: ${name || 'Customer'}
• Phone: ${phone || 'Not provided'}
• Shape & Size: ${shape} (${size} ft)
• Pattern Motif: ${pattern}
• Color Palette: ${palette}
• Design Prompt: "${prompt}"
• Additional Notes: ${notes}`

    const url = `https://wa.me/919607778013?text=${encodeURIComponent(waText)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#F7F2E9] rounded-2xl md:rounded-3xl border-2 border-[rgba(87,87,87,0.35)] shadow-2xl overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#575757] via-[#3F3F3F] to-[#262626] p-5 text-[#F7F2E9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D8C9AE] text-lg">⚜</span>
            <div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white m-0">
                Custom Craft Consultation
              </h3>
              <p className="text-xs text-[#D8C9AE] m-0">Turn Your AI Design Into Reality</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-[#575757]/15 border-2 border-[#575757] text-[#575757] mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <h4 className="text-2xl font-serif font-bold text-[#575757] mb-1">
                  Enquiry Received!
                </h4>
                <p className="text-sm font-semibold text-[#3F3F3F]">
                  Your AI rangoli mat design has been noted.
                </p>
                <p className="text-xs text-[#6E6E6E] mt-2 max-w-sm mx-auto">
                  Our master weavers in Jaipur will review your specifications and reach out with exact yarn swatches, dimensions, and custom pricing.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="flex-1 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <MessageCircle size={17} />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 bg-[#575757] hover:bg-[#262626] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Close &amp; Continue
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mini Preview Summary */}
              <div className="p-3 bg-white rounded-xl border border-[rgba(87,87,87,0.25)] flex items-center gap-3">
                <img
                  src={imageUrl}
                  alt="Design thumbnail"
                  className="w-12 h-12 rounded-lg object-cover border border-black/10 shrink-0"
                />
                <div className="text-xs text-left">
                  <div className="font-bold text-[#575757] capitalize">
                    {shape} {size} ft {pattern}
                  </div>
                  <div className="text-[#6E6E6E] truncate max-w-[280px]">
                    &ldquo;{prompt}&rdquo;
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6E6E] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Roy"
                  className="w-full px-3.5 py-2.5 bg-white border border-[rgba(87,87,87,0.25)] rounded-xl text-sm text-[#262626] focus:outline-none focus:border-[#575757]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6E6E] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[rgba(87,87,87,0.25)] rounded-xl text-sm text-[#262626] focus:outline-none focus:border-[#575757]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6E6E] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[rgba(87,87,87,0.25)] rounded-xl text-sm text-[#262626] focus:outline-none focus:border-[#575757]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6E6E] mb-1">
                  Consultation Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[rgba(87,87,87,0.25)] rounded-xl text-xs text-[#262626] focus:outline-none focus:border-[#575757] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#6E6E6E] hover:text-[#262626] cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#575757] hover:bg-[#3F3F3F] text-[#F7F2E9] font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer border border-[#D8C9AE]/60"
                >
                  <Send size={14} />
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
