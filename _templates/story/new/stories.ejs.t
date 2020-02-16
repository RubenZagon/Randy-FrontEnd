---
to: src/stories/<%= Name %>.stories.tsx
---
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@storybook/addon-actions';
import { SECCTION } from './constanst';
<% if(questionRouter){ %>import { BrowserRouter as Router } from "react-router-dom";<% } %>
<% if(questionRedux){ %>import { Provider } from 'react-redux';<% } %>

export default {
  title: SECCTION.<%= selectSecction %> + "<%= titleStory %>",
  components: <%= Name %>,
  decorators: [
<% if( questionRedux || questionRouter ){ %> story => (
<% if( questionRedux ){ %><Provider store={store}><% } %>
<% if( questionRouter ){ %><Router><% } %>
        {story()}
<% if( questionRouter ){ %></Router><% } %>
<% if( questionRedux ){ %></Provider ><% } %>
    )
  <% } %>
  ]
};
<% if(questionRedux){ %> // A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {tasksList: [{ label: 'Tender la ropa', done: false   }]}
    },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};
<% } %>
<% views.forEach (view => { %>
<% if(view === 'Desktop'){ %>
export const Desktop = () => <<%= Name %> />;

Desktop.story = {parameters: {viewport: { defaultViewport: 'responsive' }},};
<% } %>
<% if(view === 'iPhone'){ %>
export const Phone = () => <<%= Name %> />;

Phone.story = {parameters: {viewport: { defaultViewport: 'iphone6' },  },};
<% } %>
<% if(view === 'iPad'){ %>
export const Tablet = () => <<%= Name %> />;

Tablet.story = {  parameters: {    viewport: { defaultViewport: 'ipad' },  },};
<% } %>
<% }) %>
