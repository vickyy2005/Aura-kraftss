export type AiShapeType = 'round' | 'square' | 'rectangle' | 'custom'

export type AiSizeType = '2x2' | '3x3' | '4x4' | 'custom'

export type AiPatternType =
  | 'lotus'
  | 'peacock'
  | 'floral'
  | 'diya'
  | 'mandala'
  | 'ganesha'
  | 'custom'

export type AiPaletteType =
  | 'traditional'
  | 'royal'
  | 'festive'
  | 'peacock'
  | 'elegant'
  | 'custom'

export interface AiRangoliState {
  promptText: string
  shape: AiShapeType
  size: AiSizeType
  customWidthFt: number
  customHeightFt: number
  pattern: AiPatternType
  palette: AiPaletteType
  customColorsText: string
  // Generation result
  isGenerating: boolean
  generationStep: string
  currentImageUrl: string
  previousImageUrls: string[]
  seed: number
  activeRefinement: string
  // Preview interactions
  zoomLevel: number
  isFullscreen: boolean
}
