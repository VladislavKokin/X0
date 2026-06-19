import { Component } from "react";
import { Field } from '../Field/Field';
import { Information } from "../Information/Information";

export class GameLayout extends Component {
  render() {
    const { field, currentPlayer, isGameEnded, isDraw, onRestart } = this.props;

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
        <div className="grid justify-center mt-9 mb-10 animate-restart-slide">
          <button className="cursor-pointer font-semibold tracking-wider px-10 py-4 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 border border-indigo-300 shadow-lg text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:brightness-110 hover:shadow-xl active:translate-y-0.5 active:scale-95" onClick={onRestart}>Начать заново</button>
        </div>
      </div>
    );
  }
}