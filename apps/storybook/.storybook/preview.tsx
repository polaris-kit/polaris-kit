import type { Preview } from '@storybook/react-vite'
import { ThemeDecorator } from './decorators/theme-decorator'
import { CustomDocsContainer } from './containers/docs-container'
import './theme/theme-overrides.css'

const preview: Preview = {
  decorators: [ThemeDecorator],
  globalTypes: {
    theme: {
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'light', title: '🌞 Light' },
          { value: 'dark', title: '🌑 Dark' }
        ]
      }
    }
  },
  initialGlobals: {
    theme: 'dark'
  },
  parameters: {
    options: {
      storySort: {
        order: ['Overview', ['Installation'], 'Foundations', 'Components']
      }
    },

    docs: {
      container: CustomDocsContainer
    },

    backgrounds: {
      default: 'theme',

      values: [
        {
          name: 'theme',
          value: 'var(--color-background)'
        }
      ]
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
}

export default preview
