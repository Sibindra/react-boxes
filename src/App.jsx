import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./components/box.jsx";

function App() {
    const [squares, setSquares] = useState(boxes);

    function toggle(id) {
        setSquares((prevSquare) => {
            return prevSquare.map((square) => {
                return square.id === id
                    ? { ...square, on: !square.on }
                    : square;
            });
        });
    }

    const squareElements = squares.map((square) => (
        <Box id={square.id} status={square.on} handleClick={toggle} />
    ));

    return <div id="hero">{squareElements}</div>;
}

export default App;
