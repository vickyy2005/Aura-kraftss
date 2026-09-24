'use client'

import React, { useEffect, useState, useRef } from 'react'

export default function AtelierLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [loaderKey, setLoaderKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const triggerLoader = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setIsVisible(true)
    setProgress(0)
    setLoaderKey((prev) => prev + 1)

    // 2.5 seconds loading time
    timerRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 2500)
  }

  // 1. Runs ONLY on initial website entry or browser refresh (not on internal page clicks)
  useEffect(() => {
    triggerLoader()
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  // 2. Smooth 0 to 100% Counter over ~2100ms
  useEffect(() => {
    if (!isVisible) return

    setProgress(0)
    const startTime = performance.now()
    const targetDuration = 2100

    let animationFrameId: number

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const currentProgress = Math.min(100, Math.floor((elapsed / targetDuration) * 100))
      setProgress(currentProgress)

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(tick)
      }
    }

    animationFrameId = requestAnimationFrame(tick)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [loaderKey, isVisible])

  // Instant skip on click or Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        if (timerRef.current) clearTimeout(timerRef.current)
        setIsVisible(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      key={loaderKey}
      role="status"
      aria-live="polite"
      aria-label={`Loading aura.kraftss ${progress}%`}
      onClick={() => {
        if (timerRef.current) clearTimeout(timerRef.current)
        setIsVisible(false)
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer"
      style={{
        backgroundColor: '#240611',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #3B0A1C 0%, #1A040C 70%, #0E0206 100%)',
        animation: 'simpleLoaderOverlay 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      {/* Soft Center Luxury Halos */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(229,185,66,0.18) 0%, rgba(168,40,85,0.12) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Main Center Content */}
      <div className="relative flex flex-col items-center justify-center pointer-events-none">
        
        {/* Logo in Animated Circular Medallion */}
        <div
          className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center"
          style={{
            animation: 'simpleLogoEntry 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          {/* Rotating Outer Gold Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#E5B942]"
            style={{
              animation: 'simpleGoldRingSpin 8s linear infinite',
            }}
          />

          {/* Secondary Concentric Accent Ring */}
          <div className="absolute inset-2 rounded-full border border-[#E8A5BD]/40" />

          {/* White Circular Center Medallion (Ensures 100% Bright, High-Contrast Logo Visibility) */}
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center p-2.5 overflow-hidden border-3 border-[#E5B942]"
            style={{
              animation: 'simplePulseGlow 2.5s ease-in-out infinite',
            }}
          >
            <img
              src="/aura-kraftss-logo.png"
              alt="aura.kraftss Logo"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.src = '/logo.png'
              }}
            />
          </div>
        </div>

        {/* Brand Title, 0 - 100% Counter & Progress Bar */}
        <div
          className="mt-5 text-center flex flex-col items-center"
          style={{
            animation: 'simpleTextEntry 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight m-0 drop-shadow-md">
            aura.kraftss
          </h2>

          {/* 0 to 100% Numeric Counter */}
          <div className="mt-3 font-mono text-sm sm:text-base font-bold text-[#E5B942] tracking-wider">
            {progress}%
          </div>

          {/* Sleek Golden Progress Bar */}
          <div className="w-44 sm:w-52 h-1.5 bg-white/10 rounded-full overflow-hidden mt-2 border border-[#E5B942]/25">
            <div
              className="h-full bg-gradient-to-r from-[#A82855] via-[#E5B942] to-[#FFF0F5] rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
