---
to: src/stories/<%= name %>.stories.tsx
---
<% if(questionRouter){ %>
import { BrowserRouter as Router } from "react-router-dom";
<% } %>
<% if(questionRedux){ %>
import { Provider } from 'react-redux';
<% } %>
import React from 'react';
import { action } from '@storybook/addon-actions';
import { SECCTION } from './constanst';
import { Achievements } from '../components/achievements/achievements';


export default {
  title: SECCTION.TO_DO + 'Achievements Collection',
  components: Achievements,
  decorators: [
    story => (
<% if( questionRedux ){ %>
<Provider store={store}>
<% } %>
<% if( questionRouter ){ %>
  <Router>
<% } %>
        {story()}
<% if( questionRouter ){ %>
  </Router>
<% } %>
<% if( questionRedux ){ %>
  </Provider >
<% } %>
    )
  ]
};

<%
if(questionRedux){
%>

// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      tasksList: [
        {
          uuid: '0mnt6hrrp5hc05uk9boiph',
          label: 'Tender la ropa',
          done: false
        }
      ]
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

<% } %>

<%
views.forEach (view => {
%>

<%
if(view === 'Desktop'){
%>
export const Desktop = () => <Achievements />;

Desktop.story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' }
  },
};

<% } %>

<%
if(view === 'iPhone'){
%>
export const Phone = () => <Achievements />;

Phone.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

<% } %>

<%
if(view === 'iPad'){
%>
export const Tablet = () => <Achievements />;

Tablet.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' },
  },
};
<% } %>


<% }) %>




`
