import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";



export function CycleHoliday(): React.JSX.Element {

    const [holiday, setHoliday] = useState<string>("Easter")

    const years = new Map([
        ["Easter", "Independence Day"],
        ["Independence Day", "Halloween"],
        ["Halloween", "Thanksgiving"],
        ["Thanksgiving", "Christmas"],
        ["Christmas", "Easter"],
    ]);

    const alphabet = new Map([
        ["Christmas", "Easter"],
        ["Easter", "Halloween"],
        ["Halloween", "Independence Day"],
        ["Independence Day", "Thanksgiving"],
        ["Thanksgiving", "Christmas"]
    ]);

    const emojis = new Map([
        ["Christmas", "🎄"],
        ["Easter", "🥚"],
        ["Independence Day", "🎆"],
        ["Halloween", "🎃"],
        ["Thanksgiving", "🦃"],
    ]);
    
    function TextMatch(): string {
        return `Holiday: ${emojis.get(holiday)}`
    }

    return (
        <div>
            <Button
                onClick={() => {
                    act(() => {
                    const nextHoliday = alphabet.get(holiday);
                    if (nextHoliday) setHoliday(nextHoliday);
                    })
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    act(() => {
                    const nextHoliday = years.get(holiday);
                    if (nextHoliday) setHoliday(nextHoliday);
                    })
                }}
            >
                Advance by Year
            </Button>
            <span>
                {TextMatch()}
            </span>
        </div>
    );
}
