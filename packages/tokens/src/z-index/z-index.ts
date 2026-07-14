/**
 * Polaris UI
 * Design Tokens - Z-Index
 *
 * Layer scale for UI components.
 */

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700
} as const

export type ZIndexToken = keyof typeof zIndex
