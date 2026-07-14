import type { FlattenedTokens, TokenPrimitive, TokenTree } from '../types/token'

/**
 * Recursively flattens a token tree into a flat key/value map.
 *
 * Example:
 *
 * {
 *   size: {
 *     sm: "14px"
 *   }
 * }
 *
 * becomes
 *
 * {
 *   "size-sm": "14px"
 * }
 */
export function flattenTokens(tokens: TokenTree, parentKey = ''): FlattenedTokens {
  const result: FlattenedTokens = {}

  for (const [key, value] of Object.entries(tokens)) {
    const currentKey = parentKey ? `${parentKey}-${key}` : key

    if (isPrimitive(value)) {
      result[currentKey] = value
      continue
    }

    Object.assign(result, flattenTokens(value, currentKey))
  }

  return result
}

/**
 * Returns whether a token is a primitive value.
 */
function isPrimitive(value: TokenPrimitive | TokenTree): value is TokenPrimitive {
  return typeof value === 'string' || typeof value === 'number'
}
