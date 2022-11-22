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
thus we can update the array dynamically through the function ```toggle```  
```
setSquares((prevSquare) => {
            return prevSquare.map((square) => {
                return square.id === id
                    ? { ...square, on: !square.on }
                    : square;
            });
        });
```