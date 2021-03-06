import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore, { history } from 'redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyle from 'shared/globalStyle';
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_ID } from 'shared/constants';

const store = configureStore();
const persistor = persistStore(store);

export function getPersistor() {
  return persistor;
}

ReactGA.initialize(GOOGLE_ANALYTICS_ID);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
