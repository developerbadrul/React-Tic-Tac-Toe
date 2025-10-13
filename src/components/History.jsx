const History = ({ history, jumpTo, currentMove }) => {
    return (
        <>
            {history.map((_, move) => {
                const isActive = move === currentMove;
                const description =
                    move > 0 ? `Go to move #${move}` : "Go to Start the Game";

                return (
                    <li key={move}>
                        <button
                            className={`m-1 p-2 border-r-2 ${isActive
                                    ? "bg-yellow-300 border-red-600"
                                    : "bg-lime-300 border-transparent"
                                }`}
                            onClick={() => jumpTo(move)}
                        >
                            {description}
                        </button>
                    </li>
                );
            })}
        </>
    );
};

export default History;
