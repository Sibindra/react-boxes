import React, { useState } from "react";
import boxes from "./boxes.js";
import Box from "./components/box.jsx";

function App() {
    const [squares, setSquares] = useState(boxes);

    
    const squareElements = squares.map((square) => (
      <Box id={square.id} status={square.on}/>
    ));

    return <div id="hero">{squareElements}</div>;
}

export default App;
