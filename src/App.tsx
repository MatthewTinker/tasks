import React from "react";
import "./App.css";
import pres from "./assets/Viktor_Orban.2024_(cropped).jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <div>
                Hello
            </div>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 400,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>

                        <ul>
                            <li>Jeff The Landshark</li>
                            <li>Jeff The Watershark</li>
                            <li>Jeff The Skyshark</li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            {" "}
                            Log Hello World{" "}
                        </Button>
                        <h1>HOLY F***ING SH*T THIS IS A HEADING</h1>
                        <header className="App-header">
                            UM COS420 WOWIE MATTHEW TINKHAM with React Hooks and
                            TypeScript. Hello World
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 400,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>

                        <img src={pres} alt="The Hungarian President" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
