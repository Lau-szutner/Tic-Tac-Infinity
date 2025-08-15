export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col gap-3 items-center">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-3">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={`w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center text-5xl font-bold transition 
                    ${
                      playerSymbol === null
                        ? 'hover:bg-blue-100 hover:scale-105 active:bg-blue-200'
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
