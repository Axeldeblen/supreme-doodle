import type { Meta, StoryObj } from '@storybook/react'

// import { Accordion } from './index';
//
const DummyComponent = () => <div> Hello World </div>

const dummyContent = [
  {
    title: 'First',
    content: 'First content',
  },
  {
    title: 'Second',
    content:
      'Second content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus consequatur facere obcaecati corrupti facilis perferendis officiis dolores vitae fugit! Incidunt maxime vitae deserunt corporis cupiditate sunt repudiandae modi explicabo.',
  },
  {
    title: 'Third',
    content: 'Third content',
  },
]

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
