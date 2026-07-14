import { useEffect } from 'react'
import { useGlobals } from 'storybook/preview-api'
import type { Decorator } from '@storybook/react-vite'

import { applyFoundationTokens, applyTheme, lightTheme, darkTheme } from '@polaris-ui/themes'

interface PolarisGlobals {
  theme?: 'light' | 'dark'
}

export const ThemeDecorator: Decorator = (Story) => {
  const [{ theme }] = useGlobals() as [PolarisGlobals, unknown]

  useEffect(() => {
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme

    applyFoundationTokens()
    applyTheme(selectedTheme)
  }, [theme])

  return <Story />
}
