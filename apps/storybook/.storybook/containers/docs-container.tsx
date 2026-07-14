import { type PropsWithChildren } from 'react'
import {
  DocsContainer as BaseContainer,
  type DocsContainerProps
} from '@storybook/addon-docs/blocks'
import { darkTheme, lightTheme } from '../theme/theme'
import { docsThemeCssVars } from '../theme/docs-theme-vars'

interface StorybookInternalContext {
  store?: {
    userGlobals?: {
      globals?: {
        theme?: 'light' | 'dark'
      }
    }
  }
}

type ExtendedDocsContext = DocsContainerProps['context'] & StorybookInternalContext

export const CustomDocsContainer = ({
  children,
  context
}: PropsWithChildren<DocsContainerProps>) => {
  const internalContext = context as ExtendedDocsContext
  const themeName = internalContext.store?.userGlobals?.globals?.theme ?? 'light'
  const sbTheme = themeName === 'dark' ? darkTheme : lightTheme

  return (
    <BaseContainer context={context} theme={sbTheme}>
      {/*
        Docs-only MDX pages (Foundations/*) never mount a <Story>, so the
        `decorators` pipeline — including DocsThemeVarsDecorator — never
        runs for them. This container wraps every Docs page regardless of
        whether it has real stories, so the CSS vars and the `data-theme`
        selector they rely on are injected here instead, resolved
        synchronously from the same theme context already read above.
      */}
      <style>{docsThemeCssVars}</style>
      <div data-theme={themeName} style={{ display: 'contents' }}>
        {children}
      </div>
    </BaseContainer>
  )
}
