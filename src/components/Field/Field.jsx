import { FieldLayout } from "./FieldLayout";
import { store } from '../Redux/store'
import { checkWinner } from '../Redux/reducer'

export const Field = ({ field, currentPlayer, isGameEnded, }) => {

  const itemClike = (index) => {
    if (isGameEnded || field[index] !== "") return 
    
    const newField = [...field];
    newField[index] = currentPlayer;
    store.dispatch({ type: 'SET_FIELD', payload: newField });

    if (checkWinner(newField, currentPlayer)) {
      store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true })
      return;
    }
  
    if (!newField.includes('')) {
      store.dispatch({ type: 'SET_IS_DRAW', payload: true })
      return;
    }

    const nextPlayer = currentPlayer === 'X' ? '0' : 'X'
    store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer })
  };

  return <FieldLayout field={field} onItemClick={itemClike} isGameEnded={isGameEnded} />
}