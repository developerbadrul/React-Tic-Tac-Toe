import Board from "./Board";

const Game = () => {
    return (
        <div>
            <div>
                <Board/>
            </div>
            <div>
                this will be game history
                <ol></ol>
            </div>
        </div>
    );
};

export default Game;