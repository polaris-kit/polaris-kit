/**
 * Polaris UI
 * Themes Public API
 *
 * This package is responsible for:
 * - Providing light/dark themes
 * - Applying themes at runtime (CSS variables)
 * - Exposing theme engine utilities
 */

/* ---------------------------------- */
/* Themes */
/* ---------------------------------- */

export { darkTheme, lightTheme } from './themes'

/* ---------------------------------- */
/* Theme engine */
/* ---------------------------------- */

export { createTheme, applyTheme, applyFoundationTokens } from './engine'

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

export type { ThemeMode } from './types'
