import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./components/box.jsx";

function App() {
    const [squares, setSquares] = useState(boxes);

    function toggle(id) {
        // console.log(id);
        setSquares((prevSquares) => {
            const newSquares = [];
            for (let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i];
                if (currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on,
                    };
                    newSquares.push(updatedSquare);
                } else {
                    newSquares.push(currentSquare);
                }
            }
            return newSquares;
        });
    }

    const squareElements = squares.map((square) => (
        <Box id={square.id} status={square.on} handleClick={toggle} />
    ));

    return <div id="hero">{squareElements}</div>;
}

export default App;
