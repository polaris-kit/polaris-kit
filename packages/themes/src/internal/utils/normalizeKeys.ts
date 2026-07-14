import { toKebabCase } from './toKebabCase'

export function normalizeKeys(tokens: Record<string, any>) {
  const result: Record<string, any> = {}

  for (const [key, value] of Object.entries(tokens)) {
    result[toKebabCase(key)] = value
  }

  return result
}
