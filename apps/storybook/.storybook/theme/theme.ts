import { create } from 'storybook/theming'
import { darkTheme as PolarisDarkTheme, lightTheme as PolarisLightTheme } from '@polaris-ui/themes'

const shared = {
  brandTitle: 'Polaris UI',
  brandUrl: 'https://github.com/polaris-ui',
  colorPrimary: '#3B82F6',
  colorSecondary: '#2563EB'
}

export const darkTheme = create({
  ...shared,
  base: 'dark',
  appBg: PolarisDarkTheme.colors.background,
  appContentBg: PolarisDarkTheme.colors.background,
  appBorderColor: PolarisDarkTheme.colors.border,
  textColor: PolarisDarkTheme.colors.foreground,
  barBg: PolarisDarkTheme.colors.background
})

export const lightTheme = create({
  ...shared,
  base: 'light',
  appBg: PolarisLightTheme.colors.background,
  appContentBg: PolarisLightTheme.colors.background,
  appBorderColor: PolarisLightTheme.colors.border,
  textColor: PolarisLightTheme.colors.foreground,
  barBg: PolarisLightTheme.colors.background
})
