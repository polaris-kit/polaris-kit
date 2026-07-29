import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { mergeConfig } from 'vite'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  stories: [
    '../../../packages/react/src/**/*.stories.@(ts|tsx)',
    '../../../packages/tokens/src/**/*.@(mdx)',
    '../docs/**/*.@(mdx)'
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-themes')
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  async viteFinal(config) {
    const addonDocsRoot = getAbsolutePath('@storybook/addon-docs')

    return mergeConfig(config, {
      resolve: {
        // MDX files live under packages/* and Vite/Rolldown resolves imports
        // from their directory — point Storybook packages at the app's copies.
        alias: {
          '@storybook/addon-docs/blocks': join(addonDocsRoot, 'dist/blocks.js'),
          '@storybook/addon-docs/mdx-react-shim': join(addonDocsRoot, 'dist/mdx-react-shim.js'),
          '@storybook/addon-docs': addonDocsRoot
        },
        dedupe: ['react', 'react-dom', '@storybook/addon-docs']
      },
      plugins: [
        {
          name: 'fix-mdx-file-urls',
          enforce: 'pre' as const,
          resolveId(id: string) {
            if (id.startsWith('file://')) {
              return fileURLToPath(id)
            }
            return null
          }
        }
      ]
    })
  }
}

export default config
