import { Component } from "react";
import { GameLayout } from "./GameLayout";
import { legacy_connect as connect } from 'react-redux';
import { ActionTypes } from '../Redux/reducer';


export class GameContainer extends Component {
  handleClick = () => {
    this.props.dispatch({ type: ActionTypes.RESTART_GAME });
  };
  render() {
    const { field, currentPlayer, isGameEnded, isDraw } = this.props;

    return (
      <GameLayout
        field={field}
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        onRestart={this.handleClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);