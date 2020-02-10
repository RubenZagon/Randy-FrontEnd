import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Navigator from '../components/navigator/navigator'
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: 'Navigator',
  components: Navigator,
  decorators: [withA11y, story => <Router>{story()}</Router>],

};


export const Default = () => <Navigator />;
