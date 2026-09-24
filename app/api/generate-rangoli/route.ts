import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// High-resolution curated 3D handcrafted woolen photography assets
const MASTER_ASSETS: Record<string, string> = {
  peacock: '/ai-rangoli/peacock-royal.jpg',
  mandala: '/ai-rangoli/mandala-royal.jpg',
  lotus: '/ai-rangoli/lotus-floral.jpg',
  diya: '/ai-rangoli/diya-festive.jpg',
  ganesha: '/ai-rangoli/ganesha-traditional.jpg',
  floral: '/ai-rangoli/floral-marigold.jpg',
  bmw: '/ai-rangoli/bmw-sports-mat.jpg',
  car: '/ai-rangoli/bmw-m3-mat.jpg',
  lion: '/ai-rangoli/test-lion.jpg',
  custom: '/ai-rangoli/bmw-sports-mat.jpg',
}

// Clean and extract the core subject from user natural language prompt
function extractSubject(prompt: string, pattern: string): string {
  let text = prompt.trim()
  if (!text || text.toLowerCase().includes('intricate peacock design in blue, green and gold')) {
    return pattern !== 'custom' ? pattern : 'luxury bespoke rangoli'
  }

  // Strip conversational prefixes
  text = text.replace(/^(i want|i would like|please create|create a|make a|generate a|design a|draw a|i need)\s+/i, '')
  text = text.replace(/^(round|square|rectangle|circular|oval)\s+/i, '')
  text = text.replace(/^(2x2|3x3|4x4|5x5|\d+x\d+|\d+×\d+)\s*(ft|feet)?\s*/i, '')
  text = text.replace(/^(woolen|carpet|mat|rangoli|rug)\s*(with|of|featuring)?\s*/i, '')
  
  return text.trim() || prompt.trim()
}

// Try generating a live AI image via Pollinations with a 6.5s timeout
async function tryGeneratePollinations(
  subject: string,
  shape: string,
  palette: string,
  seed: number
): Promise<string | null> {
  try {
    // Subject comes first to ensure the AI prioritizes the user's specific theme
    const promptString = `A luxury ${subject} custom tufted woolen rug, overhead product photography, ${shape} circular carpet with ${subject} artwork, plush 3D yarn texture, luxury floor, high resolution`
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(promptString)}?width=768&height=768&nologo=true&seed=${seed}`

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 6500)

    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timer)

    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer())
      if (buffer.length > 5000) {
        const outDir = path.join(process.cwd(), 'public', 'ai-rangoli', 'generated')
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true })
        }
        const filename = `custom-${Date.now()}-${Math.floor(Math.random() * 1000)}.jpg`
        fs.writeFileSync(path.join(outDir, filename), buffer)
        return `/ai-rangoli/generated/${filename}`
      }
    }
    return null
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      prompt = '',
      shape = 'round',
      size = '3x3',
      pattern = 'peacock',
      palette = 'royal',
      refineInstruction = '',
      seed = Math.floor(Math.random() * 999999),
    } = body

    const fullPromptText = `${prompt} ${refineInstruction}`.trim()
    const promptLower = fullPromptText.toLowerCase()

    // 1. Detect if this is an automotive / vehicle request (BMW, car, Mercedes, Audi, etc.)
    const isCarRequest =
      promptLower.includes('bmw') ||
      promptLower.includes('car') ||
      promptLower.includes('audi') ||
      promptLower.includes('mercedes') ||
      promptLower.includes('ferrari') ||
      promptLower.includes('porsche') ||
      promptLower.includes('lamborghini') ||
      promptLower.includes('vehicle') ||
      promptLower.includes('auto')

    // 2. Detect if this is a custom request or standard preset
    const isDefaultPeacockPrompt =
      promptLower.includes('intricate peacock design in blue, green and gold') &&
      !isCarRequest

    const isCustomRequest =
      pattern === 'custom' ||
      isCarRequest ||
      (!isDefaultPeacockPrompt && fullPromptText.length > 5 && !['peacock', 'lotus', 'diya', 'ganesha', 'mandala', 'floral'].includes(promptLower))

    let resultImageUrl: string | null = null
    let resultSource = 'local_master_3d'

    // If custom request, attempt real-time AI generation first
    if (isCustomRequest) {
      const cleanSubject = extractSubject(prompt, pattern)
      const generated = await tryGeneratePollinations(cleanSubject, shape, palette, seed)
      if (generated) {
        resultImageUrl = generated
        resultSource = 'pollinations_ai_live'
      }
    }

    // If live generation didn't return an image or timed out, use intelligent thematic matching
    if (!resultImageUrl) {
      if (isCarRequest) {
        // Provide dedicated high-resolution BMW woolen mat assets
        resultImageUrl = seed % 2 === 0 ? MASTER_ASSETS.bmw : MASTER_ASSETS.car
        resultSource = 'curated_automotive_3d'
      } else if (promptLower.includes('lion') || promptLower.includes('tiger')) {
        resultImageUrl = MASTER_ASSETS.lion
      } else if (promptLower.includes('lotus') || promptLower.includes('kamal')) {
        resultImageUrl = MASTER_ASSETS.lotus
      } else if (promptLower.includes('diya') || promptLower.includes('lamp') || promptLower.includes('flame')) {
        resultImageUrl = MASTER_ASSETS.diya
      } else if (promptLower.includes('ganesha') || promptLower.includes('ganesh') || promptLower.includes('vakratunda')) {
        resultImageUrl = MASTER_ASSETS.ganesha
      } else if (promptLower.includes('flower') || promptLower.includes('floral') || promptLower.includes('marigold') || promptLower.includes('rose')) {
        resultImageUrl = MASTER_ASSETS.floral
      } else if (promptLower.includes('mandala') || promptLower.includes('chakra') || promptLower.includes('circle')) {
        resultImageUrl = MASTER_ASSETS.mandala
      } else if (promptLower.includes('peacock') || promptLower.includes('mor')) {
        resultImageUrl = MASTER_ASSETS.peacock
      } else if (pattern !== 'custom' && MASTER_ASSETS[pattern]) {
        resultImageUrl = MASTER_ASSETS[pattern]
      } else {
        // Fallback for custom requests
        resultImageUrl = MASTER_ASSETS.bmw
      }
    }

    const masterPrompt = `Top-down professional overhead product photography of a real handcrafted luxury Indian ${shape} ${size} ft woolen rangoli mat. Motif: ${pattern}. Palette: ${palette}. Client prompt: "${prompt}". Refinements: "${refineInstruction}". Featuring realistic 3D plush tufted wool carpet texture, fuzzy yarn fibers, metallic gold zari thread embroidery, on polished floor.`

    return NextResponse.json({
      success: true,
      imageUrl: resultImageUrl,
      source: resultSource,
      prompt: masterPrompt,
      seed,
      shape,
      size,
      pattern,
      palette,
      timestamp: Date.now(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to generate design',
        imageUrl: '/ai-rangoli/bmw-sports-mat.jpg',
      },
      { status: 500 }
    )
  }
}
