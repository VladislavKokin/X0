export const ActionTypes = {
  SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
  SET_FIELD: 'SET_FIELD',
  SET_IS_GAME_ENDED: 'SET_IS_GAME_ENDED',
  SET_IS_DRAW: 'SET_IS_DRAW',
  RESTART_GAME: 'RESTART_GAME',
};

export const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
  ];

export const checkWinner = (field, player) => {
  return WIN_PATTERNS.some(([a, b, c]) => {
    return field[a] === player && field[b] === player && field[c] === player;
  })};

const initialState = {
  field: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PLAYER:
      return { ...state, currentPlayer: action.payload }
    case ActionTypes.SET_FIELD:
      return { ...state, field: action.payload };
    case ActionTypes.SET_IS_GAME_ENDED:
      return { ...state, isGameEnded: action.payload }
    case ActionTypes.SET_IS_DRAW:
      return { ...state, isDraw: action.payload }
      case ActionTypes.RESTART_GAME: {
        const newField = [...initialState.field];
        return {
          ...initialState,
          field: newField,
        }
      }
    default:
      return state;
  }
};