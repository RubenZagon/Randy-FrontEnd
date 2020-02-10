import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import ModalNewBill from '../components/ModalNewBill';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal new bill',
  components: ModalNewBill,
  decorators: [withA11y, story => <Provider store={store}>{story()}</Provider>],
};


// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      // tasks: defaultTasksData,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};


export const Desktop = () => <ModalNewBill show={true} handleClose={() => null} />;

Desktop.story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
  },
};

export const Phone = () => <ModalNewBill show={true} handleClose={() => null} />;

Phone.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const Tablet = () => <ModalNewBill show={true} handleClose={() => null} />;

Tablet.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' },
  },
};
