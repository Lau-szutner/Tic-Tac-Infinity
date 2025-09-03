export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col gap-4 items-center">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-4">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={`w-20 h-20 md:w-28 md:h-28 bg-[#c77dff] rounded-2xl shadow-xl flex items-center justify-center text-5xl md:text-6xl font-extrabold
                    transition-all duration-200
                    ${
                      playerSymbol
                        ? 'text-[#3c096c] opacity-80 cursor-not-allowed'
                        : 'text-[#5a189a] hover:bg-[#e0aaff] hover:scale-110 hover:shadow-2xl'
                    }
                  `}
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
