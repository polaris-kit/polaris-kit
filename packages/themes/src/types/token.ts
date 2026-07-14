/**
 * Primitive value that can become a CSS variable.
 */
export type TokenPrimitive = string | number

/**
 * Recursive token tree.
 */
export interface TokenTree {
  readonly [key: string]: TokenPrimitive | TokenTree
}

/**
 * Flattened token map.
 *
 * Example:
 *
 * {
 *   "font-size-sm": "0.875rem",
 *   "space-4": "1rem"
 * }
 */
export type FlattenedTokens = Record<string, TokenPrimitive>
