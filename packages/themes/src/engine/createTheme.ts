/**
 * Polaris UI
 * Theme Engine - CSS Variables Generator
 */

type ThemeObject = Record<string, any>

/**
 * Flattens a nested theme object into CSS variables.
 */
function flattenTheme(obj: ThemeObject, prefix = ''): Record<string, string> {
  const vars: Record<string, string> = {}

  for (const key in obj) {
    const value = obj[key]

    if (value && typeof value === 'object') {
      Object.assign(vars, flattenTheme(value, `${prefix}${key}-`))
    } else {
      vars[`--${prefix}${key}`] = String(value)
    }
  }

  return vars
}

/**
 * Converts a theme object into CSS variables map.
 */
export function createTheme(theme: ThemeObject) {
  return flattenTheme(theme)
}
