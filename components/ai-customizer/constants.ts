import { AiPaletteType, AiPatternType, AiShapeType, AiSizeType } from './types'

export const PROMPT_SUGGESTIONS = [
  'Create a luxury circular woolen rangoli mat with a BMW car design in royal blue and silver wool.',
  'Create a round 3×3 ft woolen rangoli with an intricate peacock design in blue, green and gold.',
  'A sacred blooming pink lotus mat with pearl white zardozi border and gold thread embroidery.',
  'Diwali festive rangoli with glowing clay diya oil lamps in saffron orange, vermilion and yellow wool.',
  'Royal navy blue and 24k gold chakra mandala with plush tufted wool texture and pom-pom border.',
  'Auspicious red and marigold yellow Vakratunda Ganesha altar mat with temple arch detailing.',
]

export const REFINE_SUGGESTIONS = [
  'Make the border more detailed and add more gold.',
  'Add plush multi-color pom-poms and cascading fringe tassels.',
  'Make the central motif more prominent with deeper 3D relief.',
  'Enhance the textile wool fuzziness and soft shadows.',
  'Incorporate small brass diya candle cups around the rim.',
]

export const AI_SHAPES: { id: AiShapeType; label: string; desc: string }[] = [
  { id: 'round', label: 'Round', desc: 'Classic circular foyer mandala' },
  { id: 'square', label: 'Square', desc: 'Chowki & puja altar mat' },
  { id: 'rectangle', label: 'Rectangle', desc: 'Entryway aisle runner' },
  { id: 'custom', label: 'Custom', desc: 'Bespoke room dimensions' },
]

export const AI_SIZES: { id: AiSizeType; label: string; dimensions: string; note: string }[] = [
  { id: '2x2', label: '2 × 2 ft', dimensions: '60 × 60 cm', note: 'Mandir / Foyer' },
  { id: '3x3', label: '3 × 3 ft', dimensions: '91 × 91 cm', note: 'Standard Living' },
  { id: '4x4', label: '4 × 4 ft', dimensions: '122 × 122 cm', note: 'Grand Hall' },
  { id: 'custom', label: 'Custom Size', dimensions: 'Variable', note: 'Bespoke ft' },
]

export const AI_PATTERNS: {
  id: AiPatternType
  label: string
  desc: string
  symbol: string
  previewImage: string
}[] = [
  {
    id: 'peacock',
    label: 'Peacock',
    desc: '3D plush plumes & royal blue body',
    symbol: '🦚',
    previewImage: '/ai-rangoli/peacock-royal.jpg',
  },
  {
    id: 'mandala',
    label: 'Mandala',
    desc: 'Concentric chakra & gold filigree',
    symbol: '☸',
    previewImage: '/ai-rangoli/mandala-royal.jpg',
  },
  {
    id: 'lotus',
    label: 'Lotus',
    desc: 'Sacred blooming Kamal petals',
    symbol: '🪷',
    previewImage: '/ai-rangoli/lotus-floral.jpg',
  },
  {
    id: 'diya',
    label: 'Diya',
    desc: '8 glowing oil lamps & warm aura',
    symbol: '🪔',
    previewImage: '/ai-rangoli/diya-festive.jpg',
  },
  {
    id: 'ganesha',
    label: 'Ganesha',
    desc: 'Vakratunda silhouette & tilak',
    symbol: '🕉',
    previewImage: '/ai-rangoli/ganesha-traditional.jpg',
  },
  {
    id: 'floral',
    label: 'Floral',
    desc: 'Marigolds, roses & paisley kalka',
    symbol: '🌸',
    previewImage: '/ai-rangoli/floral-marigold.jpg',
  },
  {
    id: 'custom',
    label: 'Custom Design',
    desc: 'Your unique idea described in prompt',
    symbol: '✨',
    previewImage: '/ai-rangoli/bmw-sports-mat.jpg',
  },
]

export const AI_PALETTES: {
  id: AiPaletteType
  name: string
  desc: string
  colors: string[]
}[] = [
  {
    id: 'royal',
    name: 'Royal',
    desc: 'Deep Blue + Gold + Red',
    colors: ['#0B1C2D', '#C58A4E', '#6D1A2A', '#FAF6F0'],
  },
  {
    id: 'traditional',
    name: 'Traditional',
    desc: 'Red + Yellow + Green',
    colors: ['#7A1318', '#F5B041', '#1E5A36', '#E6D7BD'],
  },
  {
    id: 'festive',
    name: 'Festive',
    desc: 'Orange + Red + Yellow',
    colors: ['#8A1C14', '#EA580C', '#FBBF24', '#FAF6F0'],
  },
  {
    id: 'peacock',
    name: 'Peacock',
    desc: 'Blue + Green + Gold',
    colors: ['#0A2540', '#0D7E73', '#C58A4E', '#5DADE2'],
  },
  {
    id: 'elegant',
    name: 'Elegant',
    desc: 'White + Gold + Maroon',
    colors: ['#FAF6F0', '#6D1A2A', '#C58A4E', '#B86835'],
  },
  {
    id: 'custom',
    name: 'Custom',
    desc: 'Specified in Prompt Box',
    colors: ['#2A0C12', '#C58A4E', '#B86835', '#FAF6F0'],
  },
]
