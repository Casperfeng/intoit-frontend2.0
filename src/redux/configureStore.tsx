import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createRootReducer from 'redux/reducer/rootReducer';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export default function configureStore() {
  const middleware = [thunk];

  const composeEnhancers =
    process.env.NODE_ENV === 'development' && typeof (window as any) === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), ...middleware));
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router'],
  };

  const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
  const store = createStore(persistedReducer, enhancer);

  return store;
}
