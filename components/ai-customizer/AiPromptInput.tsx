'use client'

import React from 'react'
import { Sparkles, Wand2 } from 'lucide-react'
import { PROMPT_SUGGESTIONS } from './constants'

interface AiPromptInputProps {
  value: string
  onChange: (val: string) => void
  onSelectSuggestion: (suggestion: string) => void
}

export default function AiPromptInput({
  value,
  onChange,
  onSelectSuggestion,
}: AiPromptInputProps) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 border-2 border-[rgba(87,87,87,0.22)] shadow-md">
      <div className="flex items-center justify-between mb-2.5">
        <label className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#575757]">
          <Wand2 size={15} className="text-[#D8C9AE]" />
          <span>Describe Your Dream Rangoli (AI Prompt)</span>
        </label>
        <span className="text-[11px] font-semibold text-[#575757] bg-[#F7F2E9] border border-[#D8C9AE] px-2 py-0.5 rounded-full">
          Natural Language AI
        </span>
      </div>

      <div className="relative">
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Create a round 3×3 ft woolen rangoli with an intricate peacock design in blue, green and gold."
          className="w-full px-3.5 py-3 bg-[#F7F2E9] hover:bg-white focus:bg-white border border-[rgba(87,87,87,0.2)] rounded-xl text-xs md:text-sm text-[#262626] placeholder:text-[#6E6E6E]/60 focus:outline-none focus:border-[#575757] focus:ring-2 focus:ring-[#575757]/20 transition-all resize-none font-medium leading-relaxed"
        />
      </div>

      {/* Suggested Inspiration Chips */}
      <div className="mt-3">
        <span className="text-[11px] font-semibold text-[#6E6E6E] block mb-1.5">
          💡 Try these handcrafted design concepts:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {PROMPT_SUGGESTIONS.map((sug, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelectSuggestion(sug)}
              className="text-[10px] md:text-[11px] text-[#575757] hover:text-[#262626] bg-[#F7F2E9] hover:bg-[#EFE5D5] border border-[rgba(87,87,87,0.2)] hover:border-[#575757] px-2.5 py-1 rounded-full transition-all text-left truncate max-w-[280px] sm:max-w-[340px] cursor-pointer font-medium"
              title={sug}
            >
              <Sparkles size={9} className="inline mr-1 text-[#D8C9AE]" />
              {sug}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
