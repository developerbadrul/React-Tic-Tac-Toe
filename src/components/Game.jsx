import { useState } from "react";
import Board from "./Board";
import History from "./History";

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

    return (
        <div className="flex justify-center p-8 gap-8 ">
            <div>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <ol>
                    <History
                        jumpTo={jumpTo}
                        currentMove={currentMove}
                        history={history}
                    />
                </ol>
            </div>
        </div>
    );
};

export default Game;