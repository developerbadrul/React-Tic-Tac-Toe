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

    return (
        <div>
            <div className="font-bold text-blue-500 text-2xl">{status}</div>
            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
};

