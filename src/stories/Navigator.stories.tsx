import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Navigator from '../components/navigator/navigator'
import { BrowserRouter as Router } from "react-router-dom";
import { SECCTION } from './constanst';

export default {
  title: SECCTION.GENERAL + 'Navigator',
  components: Navigator,
  decorators: [withA11y, story => <Router>{story()}</Router>],

};


export const Desktop = () => <Navigator />;

Desktop.story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
  },
};

export const Phone = () => <Navigator />;

Phone.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const Tablet = () => <Navigator />;

Tablet.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' },
  },
};
