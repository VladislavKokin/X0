import { ActionTypes } from './reducer';

export const setCurrentPlayer = (player) => {
  return { type: ActionTypes.SET_CURRENT_PLAYER, payload: player };
};

export const setField = (field) => {
  return { type: ActionTypes.SET_FIELD, payload: field };
};

export const setIsGameEnded = (isGameEnded) => {
  return { type: ActionTypes.SET_IS_GAME_ENDED, payload: isGameEnded };
};

export const setIsDraw = (isDraw) => {
  return { type: ActionTypes.SET_IS_DRAW, payload: isDraw };
};

export const restartGame = () => {
  return { type: ActionTypes.RESTART_GAME };
};