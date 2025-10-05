import { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    return (
        <div>
            <div className="flex">
                <Square value={squares[0]} />
                <Square value={squares[0]} />
                <Square value={squares[0]} />
            </div>
            <div className="flex">
                <Square value={squares[0]} />
                <Square value={squares[0]} />
                <Square value={squares[0]} />
            </div>
            <div className="flex">
                <Square value={squares[0]} />
                <Square value={squares[0]} />
                <Square value={squares[0]} />
            </div>
        </div>
    );
};

export default Board;