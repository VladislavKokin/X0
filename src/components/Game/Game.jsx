import { useEffect, useState } from 'react'
import { GameLayout } from "./GameLayout";
import { store } from '../Redux/store'


export const Game = () => {
  const [state, setState] = useState(() => store.getState())
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState())
    })
  }, [])
  const { field, currentPlayer, isGameEnded, isDraw } = state

  return (
    <GameLayout
      field={field}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      onRestart={() => store.dispatch({ type: 'RESTART_GAME' })}
    />
  );
}