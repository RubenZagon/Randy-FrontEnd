import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from "./contexts/AppProvider";
import { Provider } from 'react-redux';
import store from './redux/store';

const application = <Provider store={store}>
  <AppProvider>
    <App />
  </AppProvider>;
</Provider>

ReactDOM.render(application, document.getElementById('root'));

serviceWorker.unregister();


