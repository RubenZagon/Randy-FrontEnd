import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderTop } from '../components/header/header';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

export default {
  title: 'Header',
  components: HeaderTop,
  decorators: [
    withA11y,
    withKnobs,
    story => (
      <Provider store={store}>
        <Router>{story()}</Router>
      </Provider >
    )
  ]
};


// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      notifys: { count: number("notifys", 5) },
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};



export const Desktop = () => <HeaderTop />;

Desktop.story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
  },
};

export const Phone = () => <HeaderTop />;

Phone.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const Tablet = () => <HeaderTop />;

Tablet.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' },
  },
};


