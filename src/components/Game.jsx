import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquare) {
        setXIsNext(prev => !prev);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
        console.log('History :', nextHistory, 'CurrentMove :', currentMove);
    }

    function jumpTo(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
        console.log('CurrentMove :', currentMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = `Go to move # ${move}`;
        } else {
            description = `Go to Start the Game`
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

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
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
};

export default Game;