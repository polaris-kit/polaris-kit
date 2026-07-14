import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold']
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right']
    },
    as: {
      control: 'text',
      description: 'The HTML tag to render'
    }
  }
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: 'md'
  }
}

export const Small: Story = {
  args: {
    children: 'Small text for secondary information.',
    size: 'sm'
  }
}

export const Bold: Story = {
  args: {
    children: 'Bold text for emphasis.',
    weight: 'bold'
  }
}

export const Centered: Story = {
  args: {
    children: 'This text is centered.',
    align: 'center'
  }
}
