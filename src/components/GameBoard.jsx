export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col gap-3 items-center">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-3">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="w-36 h-36 bg-[#c77dff] rounded-xl shadow-md flex items-center justify-center text-6xl font-bold hover:bg-[#e0aaff] hover:scale-105 transition text-[#5a189a]"
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
