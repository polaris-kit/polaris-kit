/**
 * Polaris UI
 * Design Tokens - Motion
 *
 * Defines animation timing and easing curves.
 * These values ensure consistent motion across all components.
 */

/* ---------------------------------- */
/* Duration scale */
/* ---------------------------------- */

export const duration = {
  instant: '0ms',

  fast: '100ms',
  normal: '200ms',
  medium: '300ms',

  slow: '500ms',
  slower: '700ms',
  slowest: '1000ms'
} as const

/* ---------------------------------- */
/* Easing curves */
/* ---------------------------------- */

export const easing = {
  linear: 'linear',

  // Standard material-like motion
  standard: 'cubic-bezier(0.2, 0.0, 0, 1)',

  // Accelerate out (exit animations)
  accelerate: 'cubic-bezier(0.3, 0, 1, 1)',

  // Decelerate in (enter animations)
  decelerate: 'cubic-bezier(0, 0, 0.2, 1)',

  // Emphasized motion (modern UI feel)
  emphasized: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
} as const

/* ---------------------------------- */
/* Semantic motion presets */
/* ---------------------------------- */

export const motion = {
  duration,
  easing
} as const

export type DurationToken = keyof typeof duration
export type EasingToken = keyof typeof easing
