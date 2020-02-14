import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter as Router } from "react-router-dom";
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { TodoList } from '../components/todoList/TodoList';
import { SECCTION } from './constanst';

export default {
  title: SECCTION.TO_DO + 'To Do List',
  components: TodoList,
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



export const Desktop = () => <TodoList />;

Desktop.story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
  },
};

export const Phone = () => <TodoList />;

Phone.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const Tablet = () => <TodoList />;

Tablet.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' },
  },
};


