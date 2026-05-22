const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
  ];

const checkWinner = (field, player) => {
  return WIN_PATTERNS.some(([a, b, c]) => {
    return field[a] === player && field[b] === player && field[c] === player;
  })};

const initialState = {
  field: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_PLAYER':
      return { ...state, currentPlayer: payload }
    case 'SET_FIELD':
      return { ...state, field: payload };
    case 'SET_IS_GAME_ENDED':
      return { ...state, isGameEnded: payload }
    case 'SET_IS_DRAW':
      return { ...state, isDraw: payload }
    case 'RESTART_GAME':
      return { ...initialState }
    default:
      return state;
  }
};