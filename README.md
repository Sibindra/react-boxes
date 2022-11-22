# updating values into the boxes.js
the ```boxes.js``` contains an array of objects which are used through state and then passed onto component ```box.jsx``` as 
```
const [squares, setSquares] = useState(boxes);

 const squareElements = squares.map((square) => (
        <Box id={square.id} status={square.on} handleClick={toggle} />
    ));
``` 

the styling is done dyamically by declaring a style variable as
```
 const toggleColor={
        backgroundColor:props.status?"#16A34A":"#E13A2D"
    }
```

**upon clicking the boxes each box's status is changed from on to off and viceversa into the ```boxes.js``` array file**
thus we can update the array dynamically through the function ```toggle``` as 
```
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
```