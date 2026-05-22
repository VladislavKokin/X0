import { FieldLayout } from "./FieldLayout";
import { store } from '../Redux/store'

  const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
  ];

export const Field = ({ field, currentPlayer, isGameEnded, }) => {
  const checkWinner = (field, player) => {
    return WIN_PATTERNS.some(([a, b, c]) => {
      return field[a] === player && field[b] === player && field[c] === player;
    });
  };

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