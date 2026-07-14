import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Almost before we knew it, we had left the ground.',
    as: 'h2'
  }
}

export const H1: Story = {
  args: {
    children: 'Heading 1',
    as: 'h1'
  }
}

export const H3: Story = {
  args: {
    children: 'Heading 3',
    as: 'h3'
  }
}
