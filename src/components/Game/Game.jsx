import { GameLayout } from "./GameLayout";
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '../Redux/reducer';


export const Game = () => {
  const field = useSelector(state => state.field);
  const currentPlayer = useSelector(state => state.currentPlayer);
  const isGameEnded = useSelector(state => state.isGameEnded);
  const isDraw = useSelector(state => state.isDraw);

  const dispatch = useDispatch();

  return (
    <GameLayout
      field={field}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      onRestart={() => dispatch({ type: ActionTypes.RESTART_GAME })}
    />
  );
}