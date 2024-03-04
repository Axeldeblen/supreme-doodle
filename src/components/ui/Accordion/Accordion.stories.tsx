import type { Meta, StoryObj } from '@storybook/react'

// import { Accordion } from './index';
//
const DummyComponent = () => <div> Hello World </div>

const meta = {
  title: 'Example/Accordion',
  component: DummyComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DummyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args) => <DummyComponent {...args}> </DummyComponent>,
}
