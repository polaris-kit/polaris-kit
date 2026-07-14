import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    name: 'group1'
  }
}
export const Disabled: Story = {
  args: {
    disabled: true
  }
}
