import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from "./contexts/AppProvider";
import { Provider } from 'react-redux';
import createNewStore from './store/store';

const store = createNewStore()

ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>;
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();


