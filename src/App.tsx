import React from "react";
import "./App.css";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 WOWIE MATTHEW TINKHAM with React Hooks and TypeScript.
                Hello World
            </header>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
        </div>
    );
}

export default App;
