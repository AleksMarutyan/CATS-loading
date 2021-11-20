import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './ducks/index';


const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
export default store;