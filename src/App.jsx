import boxes from "./boxes.js";
import React, { useState } from "react";

function App() {
    const [squares, setSquares] = useState(boxes);

    const squareElements = squares.map((square) => (
        <div className="box" key={square.id}></div>
    ));

    return <div id="hero">{squareElements}</div>;
}

export default App;
