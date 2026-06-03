import { FieldLayout } from "./FieldLayout";
import { useDispatch } from "react-redux";
import { ActionTypes, checkWinner } from "../Redux/reducer";

export const Field = ({ field, currentPlayer, isGameEnded }) => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (isGameEnded || field[index] !== "") return;

    const newField = [...field];
    newField[index] = currentPlayer;

    dispatch({ type: ActionTypes.SET_FIELD, payload: newField });

    if (checkWinner(newField, currentPlayer)) {
      dispatch({ type: ActionTypes.SET_IS_GAME_ENDED, payload: true });
      return;
    }

    if (!newField.includes("")) {
      dispatch({ type: ActionTypes.SET_IS_DRAW, payload: true });
      dispatch({ type: ActionTypes.SET_IS_GAME_ENDED, payload: true });
      return;
    }

    const nextPlayer = currentPlayer === "X" ? "0" : "X";
    dispatch({ type: ActionTypes.SET_CURRENT_PLAYER, payload: nextPlayer });
  };

  return (
    <FieldLayout field={field} onItemClick={handleClick} isGameEnded={isGameEnded}/>
  );
};