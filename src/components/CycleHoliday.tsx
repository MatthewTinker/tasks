import React, { useState } from "react";
import { Button } from "react-bootstrap";



export function CycleHoliday(): React.JSX.Element {

    const [holiday, setHoliday] = useState<string>("winter");
    const years: string[] = ["Easter", "Fourth of July", "Halloween", "Thanksgiving", "Christmas"]
    const alphabet: string[] = ["Christmas", "Easter", "Fourth of July", "Halloween", "Thanksgiving"];

    function Alphabet(): void {

        setHoliday
    }

    function Year(): void {
        setHoliday
    }

    function Emoji(holiday: string): string{
        if (holiday === "Easter"){
            return "🥚";
        }else if (holiday === "Fourth of July"){
            return "🎆";
        }else if (holiday === "Halloween"){
            return "🎃";
        }else if (holiday === "Thanksgiving"){
            return "🦃";
        }else if (holiday === "Christmas"){
            return "🎄";
        }else{
            return "";
        }
    }

    return (
        <div>
            <Button onClick={Alphabet}>Advance by Alphabet</Button>
            <Button onClick={Year}>Advance by Year</Button>
            <p>{holiday}: {Emoji(holiday)}</p>
        </div>
    );
}
