import { createStore } from 'redux';
// dev-tool
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/RootReducer';

// Global State
const store = createStore(RootReducer, composeWithDevTools());

export default store;
