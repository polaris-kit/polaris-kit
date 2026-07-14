import type { FlattenedTokens } from '../types/token'

export interface ApplyVariablesOptions {
  prefix?: string
  root?: HTMLElement
}

/**
 * Applies flattened tokens as CSS variables on a DOM element.
 *
 * Example:
 * {
 *   "space-4": "1rem"
 * }
 *
 * becomes:
 * --space-4: 1rem
 */
export function applyVariables(tokens: FlattenedTokens, options: ApplyVariablesOptions = {}) {
  const { prefix, root = document.documentElement } = options

  for (const [key, value] of Object.entries(tokens)) {
    const variableName = prefix ? `--${prefix}-${key}` : `--${key}`

    root.style.setProperty(variableName, String(value))
  }
}
