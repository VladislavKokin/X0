import { Component } from "react";
import { FieldLayout } from "./FieldLayout";
import { legacy_connect as connect } from 'react-redux';
import { ActionTypes, checkWinner } from "../Redux/reducer";

class FieldContainer extends Component {
  handleClick = (index) => {
    if (this.props.isGameEnded || this.props.field[index] !== "") return;

    const newField = [...this.props.field];
    newField[index] = this.props.currentPlayer;

    this.props.dispatch({ type: ActionTypes.SET_FIELD, payload: newField });

    if (checkWinner(newField, this.props.currentPlayer)) {
      this.props.dispatch({ type: ActionTypes.SET_IS_GAME_ENDED, payload: true });
      return;
    }

    if (!newField.includes("")) {
      this.props.dispatch({ type: ActionTypes.SET_IS_DRAW, payload: true });
      this.props.dispatch({ type: ActionTypes.SET_IS_GAME_ENDED, payload: true });
      return;
    }

    const nextPlayer = this.props.currentPlayer === "X" ? "0" : "X";
    this.props.dispatch({ type: ActionTypes.SET_CURRENT_PLAYER, payload: nextPlayer });
  };

  render() {
    const { field, isGameEnded } = this.props;

    return (
      <FieldLayout field={field} onItemClick={this.handleClick} isGameEnded={isGameEnded} />
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
