import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { Achievements } from '../components/achievements/achievements';
import { SECCTION } from './constanst';
import { withTests } from '@storybook/addon-jest';
import results from './__test__/.jest-test-results.json';


export default {
  title: SECCTION.TO_DO + 'Achievements Collection',
  components: Achievements,
  decorators: [
    withTests({
      results,
      filesExt: '((\\.specs?)|(\\.tests?)|(\\.test?))?((\\.ts)|(\\.tsx)|(\\.js)|(\\.jsx))$',
    }),
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
      tasksList: [
        {
          uuid: '0mnt6hrrp5hc05uk9boiph',
          label: 'Tender la ropa',
          done: false
        },
        {
          uuid: 'plgsrgr1iji1ovlcf46o9n',
          label: 'Comprar aguacates 🥑',
          done: false
        },
        {
          uuid: 'jhgbaig998clqq9orhhga',
          label: 'Sacar la basura',
          done: false
        }
      ]
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};



export const Desktop = () => <Achievements />;

Desktop.story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
    jest: ['achievements'],
  },
};

export const Phone = () => <Achievements />;

Phone.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const Tablet = () => <Achievements />;

Tablet.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' },
  },
};


