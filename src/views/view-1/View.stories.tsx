import React from 'react';
import View from './View';

export default {
  title: 'Views/View',
  component: View,
};

const Template = args => <View {...args} />;

export const Default = Template.bind({});

Default.args = {};
