import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { searchResults } from '../components/search/reducers';
import { reviews } from '../components/reviewForm/reducers';
import { loading, error } from '../components/app/reducers';
import { detailResult } from '../components/parkDetail/reducers';

const reducer = combineReducers({
  searchResults,
  reviews,
  loading,
  detailResult,
  error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware) 
  )
);

export default store;