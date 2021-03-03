import { v4 as uuidv4 } from 'uuid';
import { PLAYER_ADD, PLAYER_DELETE } from '../actions/PlayerActions';

const PlayersReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case PLAYER_ADD:
      return [...state, {
        id: uuidv4(),
        name: payload.name,
        points: payload.points,
      }];

    case PLAYER_DELETE:
      const entryState = [...state];
      const index = entryState.findIndex((s) => s.id === payload.id);
      entryState.splice(index, 1);

      return [...entryState];

    default:
      return state;
  }
};

export default PlayersReducer;
