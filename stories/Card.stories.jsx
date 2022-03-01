import React from 'react';

import { Home } from '@/components/Icons';
import Card from '@/components/Card';

const story = {
    title: 'Card',
    component: Card,
}
export default story

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  href: '/',
  title: 'Card Title',
  subtitle: 'Subtitle',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  location: 'Side Project',
  icon: ''
}