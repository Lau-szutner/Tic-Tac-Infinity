export default function GameOver({ winner, onRestart }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-60 z-50 bg-[#240046]/80">
      <div className="bg-[#9d4edd] rounded-2xl shadow-xl p-8 text-center max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4">Game Over!</h2>

        {winner && <p className="text-lg  font-semibold mb-4">{winner} won!</p>}
        {!winner && <p className="text-lg text-gray-600 mb-4">It's a draw</p>}

        <button
          onClick={onRestart}
          className="bg-[#3c096c] text-white font-semibold py-2 px-6 rounded-lg transition duration-200 cursor-pointer hover:scale-110"
        >
          Rematch!
        </button>
      </div>
    </div>
  );
}
