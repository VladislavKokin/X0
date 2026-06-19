import { Component } from "react";
import { InformationLayout } from "./InformationLayout";

export class Information extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;

    return (
      <InformationLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
    );
  }
}
