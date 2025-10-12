import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);

    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquare) {
        setXIsNext(prev => !prev);
        setHistory([...history, nextSquare])
    }

    return (
        <div>
            <div>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                this will be game history
                <ol></ol>
            </div>
        </div>
    );
};

export default Game;