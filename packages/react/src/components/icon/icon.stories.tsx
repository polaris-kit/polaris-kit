import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    color: {
      control: 'color'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

const SamplePath = <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />

export const Default: Story = {
  args: {
    size: 'md',
    children: SamplePath
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: SamplePath
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: SamplePath
  }
}
