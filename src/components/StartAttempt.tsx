import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react";

export function StartAttempt(): React.JSX.Element {
    const [start, setStart] = useState<boolean>(false);
    const [count, setCount] = useState<number>(4);

    return (
        <div>
            <Button
                disabled={start || (count == 0)}
                onClick={() => {
                    act(() => {
                    setStart(true);
                    setCount(count - 1);
                    });

                }}
            >
                Start Quiz
            </Button>

            <Button
                disabled={!start}
                onClick={() => {
                    act(() => {
                        setStart(false)
                    });
                    
                }}
            >
                Stop Quiz
            </Button>

            <Button
                disabled={start}
                onClick={() => {
                    act(() => {setCount(count + 1)});
                }}
            >
                Mulligan
            </Button>

            <p>{count}</p>
        </div>
    );
}
