import { darkTheme as PolarisDarkTheme, lightTheme as PolarisLightTheme } from '@polaris-kit/themes'

type ThemeColors = typeof PolarisLightTheme.colors

/**
 * Maps each `--polaris-docs-*` CSS variable to the real theme color key it
 * derives from. Kept as a single source of truth so the two themes below
 * can't drift from each other, and so a renamed/removed key on `themes`
 * fails to compile here instead of failing silently in the docs.
 */
const docsVarMap = {
  'card-bg': 'card',
  border: 'border',
  text: 'cardForeground',
  'text-muted': 'textMuted',
  'text-subtle': 'textSubtle',
  accent: 'accent'
} satisfies Record<string, keyof ThemeColors>

function buildDocsCssVars(theme: Record<keyof ThemeColors, string>, selector: string): string {
  const declarations = Object.entries(docsVarMap)
    .map(([cssVar, themeKey]) => `--polaris-docs-${cssVar}: ${theme[themeKey]};`)
    .join('\n    ')

  return `${selector} {\n    ${declarations}\n  }`
}

/**
 * Injected via a `<style>` tag by the preview decorator. Styles only the
 * documentation chrome (Foundations pages) — not the Storybook manager UI
 * (see `.storybook/theme.ts`) nor real components, which get their colors
 * from `applyTheme()` at runtime.
 */
export const docsThemeCssVars = `
  ${buildDocsCssVars(PolarisLightTheme.colors, "[data-theme='light']")}

  ${buildDocsCssVars(PolarisDarkTheme.colors, "[data-theme='dark']")}
`
