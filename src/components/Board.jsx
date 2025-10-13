import * as utility from "../utility/utility";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {

    const winner = utility.calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = 'Next Player ' + (xIsNext ? 'X' : 'O')
    }

    function handleClick(i) {
        if (squares[i] || utility.calculateWinner(squares)) {
            return;
        };

        const nextSquare = squares.slice();
        if (xIsNext) {
            nextSquare[i] = 'X';
        } else {
            nextSquare[i] = 'O';
        }
        onPlay(nextSquare)
    }
    console.log(squares);

    return (
        <div>
            <div className="font-bold text-blue-500 text-2xl">{status}</div>
            <div className="grid grid-cols-3 gap-3">
                {
                    squares.map((square, i) => <Square key={i} value={square} onSquareClick={() => handleClick(i)} />)
                }
            </div>
        </div>
    );
};

