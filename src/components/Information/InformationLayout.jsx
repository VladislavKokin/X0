import { Component } from "react";

export class InformationLayout extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    let resultGame;

    if (isDraw) {
        resultGame = "Ничья";
    } else if (isGameEnded) {
        resultGame = `Победа ${currentPlayer}`;
    } else {
        resultGame = `Ходит ${currentPlayer}`;
    }

    return <div className="grid justify-center text-center font-bold tracking-[0.04em] text-[clamp(1.35rem,3.2vw,1.7rem)] mx-auto my-[1.5rem] py-[1.15rem] px-[2.3rem] max-w-[min(94vw,520px)] rounded-full text-[var(--text)] border border-[hsl(var(--accent-color-hue)_var(--accent-color-saturation)_70%_/_0.35)] shadow-[0_0_24px_hsl(var(--accent-color-hue)_var(--accent-color-saturation)_55%_/_0.2),inset_0_1px_0_hsl(0_0%_100%_/_0.08)] bg-[linear-gradient(135deg,hsl(240_30%_22%_/_0.85),hsl(var(--accent-color-hue)_50%_32%_/_0.5))] animate-[headerFloat_3.5s_ease-in-out_infinite,headerGlow_2.8s_ease-in-out_infinite_alternate]"
            >{resultGame}</div>;
  }
}
