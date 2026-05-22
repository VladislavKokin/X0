import { Field } from '../Field/Field';
import { Information } from "../Information/Information";

export const GameLayout = ({field,
  currentPlayer,
  isGameEnded,
  isDraw,
  onRestart,
}) => {
  return (
    <div>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}

      />
      <div className="onRestart">
        <button onClick={onRestart}>Начать заново</button>
      </div>
    </div>
  );
};
export default GameLayout;