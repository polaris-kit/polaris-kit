import type { ThemeMode, Theme } from '../types'

import { flattenTokens } from '../internal/flattenTokens'
import { normalizeKeys } from '../internal/utils/normalizeKeys'
import { applyVariables } from '../internal/applyVariables'

let currentTheme: ThemeMode | null = null

/**
 * Applies theme tokens (light/dark) as CSS variables.
 *
 * Only color-related tokens should live here.
 */
export function applyTheme(theme: Theme, root = document.documentElement) {
  if (!theme || !theme.colors) {
    throw new Error('[Polaris] Invalid theme provided to applyTheme')
  }

  const flattened = flattenTokens(theme.colors)
  const normalized = normalizeKeys(flattened)

  applyVariables(normalized, {
    prefix: 'color',
    root
  })
}

/**
 * Optional helper if you want runtime switching later.
 */
export function getCurrentTheme() {
  return currentTheme
}
