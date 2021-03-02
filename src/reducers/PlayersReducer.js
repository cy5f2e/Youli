import { v4 as uuidv4 } from 'uuid';

const initState = [
  // {
  //   id: 'id',
  //   name: 'name',
  //   points: 0,
  // },
];

const PlayersReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PLAYER_ADD":
      return [...state, {
        id: uuidv4(),
        name: payload.name,
        points: payload.points,
      }];

    case "PLAYER_DELETE":
      const entryState = [...state];
      const index = entryState.findIndex((s) => s.id === payload.id);
      entryState.splice(index, 1);

      return [...entryState];

    default:
      return state;
  }
};

export default PlayersReducer;
