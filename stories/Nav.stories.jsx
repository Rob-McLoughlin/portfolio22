import React from 'react';

import Nav from '@/components/Nav';

const story = {
    title: 'Navigation',
    component: Nav,
}
export default story

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'text'
}