/**
 * Polaris UI
 * Design Tokens - Shadows
 *
 * Shadow scale inspired by Tailwind CSS and Material Design.
 */

export const shadow = {
  none: 'none',
  xs: '0 1px 2px rgb(0 0 0 / 0.05)',
  sm: ['0 1px 2px rgb(0 0 0 / 0.06)', '0 1px 3px rgb(0 0 0 / 0.10)'].join(', '),
  md: ['0 4px 6px rgb(0 0 0 / 0.07)', '0 2px 4px rgb(0 0 0 / 0.06)'].join(', '),
  lg: ['0 10px 15px rgb(0 0 0 / 0.10)', '0 4px 6px rgb(0 0 0 / 0.05)'].join(', '),
  xl: ['0 20px 25px rgb(0 0 0 / 0.12)', '0 8px 10px rgb(0 0 0 / 0.05)'].join(', '),
  '2xl': '0 25px 50px rgb(0 0 0 / 0.25)',

  inner: 'inset 0 2px 4px rgb(0 0 0 / 0.06)',
  focus: '0 0 0 3px rgb(59 130 246 / 0.45)'
} as const

export type ShadowsToken = keyof typeof shadow
