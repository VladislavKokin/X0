import { Component } from "react";
import "../styles.modules.css"

export class FieldLayout extends Component {
    render() {
        const { field, onItemClick, isGameEnded } = this.props;

        return (
            <div className="
                grid
                grid-rows-[repeat(3,min(32vw,156px))]
                grid-cols-[repeat(3,min(32vw,156px))]
                justify-center
                gap-[10px]
                mx-auto
                my-0
                p-[22px]
                rounded-[24px]
                border
                border-[1px]
                border-[hsl(var(--accent-color-hue)_var(--accent-color-saturation)_60%_/_0.4)]
                bg-[
                linear-gradient(160deg,var(--surface-light)_0%,var(--surface)_100%),
                repeating-linear-gradient(-45deg,transparent,transparent_12px,hsl(0_0%_100%_/_0.02)_12px,hsl(0_0%_100%_/_0.02)_24px)
                ]
                shadow-[
            0_20px_50px_hsl(250_50%_5%_/_0.55),
            inset_0_0_0_1px_hsl(0_0%_100%_/_0.05),
            0_0_40px_hsl(var(--accent-color-hue)_var(--accent-color-saturation)_50%_/_0.15)
            ]">
                {field.map((item, index) => (
                    <button className="
                        text-[clamp(3.2rem,12vw,5.35rem)]
                        font-extrabold
                        leading-none
                        cursor-pointer
                        text-[var(--text)]
                        bg-[linear-gradient(145deg,hsl(240_24%_28%)_0%,hsl(240_28%_18%)_100%)]
                        border
                        border-[hsl(0_0%_100%_/_0.1)]
                        rounded-[18px]
                        shadow-[0_4px_12px_hsl(250_50%_4%_/_0.4),inset_0_1px_0_hsl(0_0%_100%_/_0.1)]"
                        key={index} onClick={() => onItemClick(index)} disabled={item !== '' || isGameEnded}
                    >{item}</button>
                ))}
            </div>
        );
    }
}
