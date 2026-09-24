import { ColorPreset, ShapeType, SizeType, PatternType, RangoliDesignState } from './types'

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'royal',
    name: 'Royal',
    subtitle: 'Deep Blue + Gold + Red',
    colors: {
      base: '#0B1C2D',      // Deep Royal Navy
      primary: '#E5B248',   // Luminous Gold
      secondary: '#8B1E2D', // Imperial Ruby Red
      accent: '#FAF3E3',    // Ivory Cream
    },
  },
  {
    id: 'traditional',
    name: 'Traditional',
    subtitle: 'Red + Yellow + Green',
    colors: {
      base: '#7A1318',      // Sindoor Crimson Red
      primary: '#F5B041',   // Turmeric Marigold Yellow
      secondary: '#1E5A36', // Auspicious Forest Green
      accent: '#FAD77F',    // Bright Gold
    },
  },
  {
    id: 'floral',
    name: 'Floral',
    subtitle: 'Pink + Purple + White',
    colors: {
      base: '#4A154B',      // Deep Royal Velvet Violet
      primary: '#E57399',   // Lotus Rose Pink
      secondary: '#FBF5F0', // Pearl White
      accent: '#F3C4D8',    // Soft Blossom Rose
    },
  },
  {
    id: 'festive',
    name: 'Festive',
    subtitle: 'Orange + Red + Yellow',
    colors: {
      base: '#8A1C14',      // Deep Brick Vermilion
      primary: '#EA580C',   // Saffron Festive Orange
      secondary: '#FBBF24', // Sunburst Golden Yellow
      accent: '#FFF7ED',    // Warm Coconut Cream
    },
  },
  {
    id: 'peacock',
    name: 'Peacock',
    subtitle: 'Blue + Green + Gold',
    colors: {
      base: '#0A2540',      // Night Peacock Sapphire
      primary: '#0D7E73',   // Radiant Emerald Teal
      secondary: '#D4AC0D', // Metallic Gold
      accent: '#5DADE2',    // Iridescent Feather Cyan
    },
  },
  {
    id: 'elegant',
    name: 'Elegant',
    subtitle: 'White + Gold + Maroon',
    colors: {
      base: '#FAF6F0',      // Silk Ivory Cream
      primary: '#5E1D28',   // Royal Maroon / Bordeaux
      secondary: '#C5A059', // Antique Gold Leaf
      accent: '#8B2635',    // Rich Garnet
    },
  },
]

export const SHAPE_OPTIONS: { id: ShapeType; label: string; desc: string }[] = [
  { id: 'round', label: 'Round', desc: 'Classic circular mandala for foyers & entryways' },
  { id: 'square', label: 'Square', desc: 'Balanced geometric chowki & altar mat' },
  { id: 'rectangle', label: 'Rectangle', desc: 'Expansive passage & bridal aisle runner' },
  { id: 'custom', label: 'Custom', desc: 'Bespoke dimensions tailored to your floor' },
]

export const SIZE_OPTIONS: { id: SizeType; label: string; dimensions: string; note: string }[] = [
  { id: '2x2', label: '2 × 2 ft', dimensions: '60 × 60 cm', note: 'Mandir & Compact Foyer' },
  { id: '3x3', label: '3 × 3 ft', dimensions: '91 × 91 cm', note: 'Standard Living & Entrance' },
  { id: '4x4', label: '4 × 4 ft', dimensions: '122 × 122 cm', note: 'Grand Hall & Celebrations' },
  { id: 'custom', label: 'Custom Size', dimensions: 'Variable', note: 'Specify exact ft / inches' },
]

export const PATTERN_OPTIONS: {
  id: PatternType
  label: string
  desc: string
  symbol: string
}[] = [
  {
    id: 'mandala',
    label: 'Mandala',
    desc: 'Concentric cosmic chakra & sacred geometry',
    symbol: '☸',
  },
  {
    id: 'lotus',
    label: 'Lotus',
    desc: 'Sacred blooming Kamal petals & divine purity',
    symbol: '🪷',
  },
  {
    id: 'peacock',
    label: 'Peacock',
    desc: 'Majestic Mayur plumes & iridescent crests',
    symbol: '🦚',
  },
  {
    id: 'floral',
    label: 'Floral',
    desc: 'Intricate blooming marigolds & paisley vines',
    symbol: '🌸',
  },
  {
    id: 'diya',
    label: 'Diya',
    desc: 'Auspicious oil lamps with radiating golden aura',
    symbol: '🪔',
  },
  {
    id: 'ganesha',
    label: 'Ganesha',
    desc: 'Sacred Vakratunda silhouette & auspicious Om',
    symbol: '🕉',
  },
  {
    id: 'custom',
    label: 'Custom Design',
    desc: 'Diamond tessellations & stepped Saptapadi border',
    symbol: '✨',
  },
]

export const FLOOR_TEXTURES = [
  {
    id: 'cream-marble' as const,
    name: 'Cream Marble',
    bg: 'radial-gradient(circle at 50% 50%, #FAF6F0 0%, #EFE7DC 100%)',
  },
  {
    id: 'sandstone' as const,
    name: 'Jaipur Sandstone',
    bg: 'radial-gradient(circle at 50% 50%, #E8D7C3 0%, #CDB397 100%)',
  },
  {
    id: 'dark-oak' as const,
    name: 'Dark Wood',
    bg: 'radial-gradient(circle at 50% 50%, #2E1D18 0%, #170E0B 100%)',
  },
  {
    id: 'temple-granite' as const,
    name: 'Temple Granite',
    bg: 'radial-gradient(circle at 50% 50%, #2A2F35 0%, #15181C 100%)',
  },
]

export const DEFAULT_DESIGN_STATE: RangoliDesignState = {
  shape: 'round',
  size: '3x3',
  customWidthFt: 3,
  customHeightFt: 3,
  pattern: 'mandala',
  paletteId: 'royal',
  colors: {
    base: '#0B1C2D',
    primary: '#E5B248',
    secondary: '#8B1E2D',
    accent: '#FAF3E3',
  },
  floorTexture: 'cream-marble',
  isRotating: false,
}
