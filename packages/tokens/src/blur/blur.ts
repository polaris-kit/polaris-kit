/**
 * Polaris UI
 * Design Tokens - Blur
 *
 * Contains both primitive blur values and semantic backdrop blur tokens.
 */

export const blur = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '40px'
} as const

/**
 * Semantic backdrop blur tokens.
 *
 * These are used for overlays, modals, dialogs, etc.
 * They map to primitive blur values.
 */
export const backdropBlur = {
  none: blur.none,
  sm: blur.sm,
  md: blur.md,
  lg: blur.lg,
  xl: blur.xl
} as const

export type BlurToken = keyof typeof blur
export type BackdropBlurToken = keyof typeof backdropBlur
