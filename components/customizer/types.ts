export type ShapeType = 'round' | 'square' | 'rectangle' | 'custom'

export type SizeType = '2x2' | '3x3' | '4x4' | 'custom'

export type PatternType =
  | 'lotus'
  | 'peacock'
  | 'floral'
  | 'diya'
  | 'mandala'
  | 'ganesha'
  | 'custom'

export type ColorPresetId =
  | 'traditional'
  | 'royal'
  | 'floral'
  | 'festive'
  | 'peacock'
  | 'elegant'

export interface ColorScheme {
  base: string       // Mat background / cloth base
  primary: string    // Main motif & outer border
  secondary: string  // Inner petals & filigree
  accent: string     // Gold shimmer, diyas & dots
}

export interface ColorPreset {
  id: ColorPresetId
  name: string
  subtitle: string
  colors: ColorScheme
}

export type FloorTexture = 'cream-marble' | 'sandstone' | 'dark-oak' | 'temple-granite'

export interface RangoliDesignState {
  shape: ShapeType
  size: SizeType
  customWidthFt: number
  customHeightFt: number
  pattern: PatternType
  paletteId: ColorPresetId | 'custom'
  colors: ColorScheme
  floorTexture: FloorTexture
  isRotating: boolean
}
