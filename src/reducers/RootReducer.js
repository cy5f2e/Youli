import { combineReducers } from 'redux';
import PlayersReducer from './PlayersReducer';

const RootReducer = combineReducers({
  players: PlayersReducer,
});

export default RootReducer;
