import type { Decorator } from '@storybook/react-vite'
import { docsThemeCssVars } from '../theme/docs-theme-vars'

/**
 * Injects the `--polaris-docs-*` CSS variables consumed by Foundations
 * pages (colors, spacing, shadows, etc).
 *
 * Pairs with `ThemeDecorator`, but serves a different concern: this one
 * only styles the documentation chrome via a static `<style>` tag, while
 * `ThemeDecorator` calls `applyTheme()` for real components. Neither
 * depends on the other, so their relative order in the `decorators` array
 * doesn't matter.
 */
export const DocsThemeVarsDecorator: Decorator = (Story: React.ComponentType<any>) => (
  <>
    <style>{docsThemeCssVars}</style>
    <Story />
  </>
)
