import React from 'react';
import { Layout, LayoutProps } from '../src';

export default {
  title: 'Welcome',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<LayoutProps>) => <Layout {...props} >Hi Roy</Layout>;
