import { useState } from 'react';
import { WINNING_COMBINATIONS } from '../winning-combinations.js';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver.jsx';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function handleGameType(updatedTurns, currentPlayer) {
  let movesByPlayer = updatedTurns.filter(
    (turn) => turn.player === currentPlayer
  );

  if (movesByPlayer.length > 3) {
    const lastMove = movesByPlayer.at(-1);
    updatedTurns = updatedTurns.filter((turn) => turn !== lastMove);
  }

  return updatedTurns;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  const [gameType, setGameType] = useState(false);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      if (gameType) {
        updatedTurns = handleGameType(updatedTurns, currentPlayer);
      }

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#240046] to-[#5a189a] flex items-center justify-center text-white">
      <div className="w-full max-w-3xl bg-[#5a189a]/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-16 border-4 border-[#9d4edd]">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRematch} />
        )}
        <div className="flex flex-col items-center gap-8">
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
          <button
            className={`px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition-all duration-200
            ${
              gameType
                ? 'bg-[#f72585] hover:bg-[#b5179e]'
                : 'bg-[#3c096c] hover:bg-[#7209b7]'
            }
            scale-100 hover:scale-105`}
            onClick={() => {
              setGameType((prev) => !prev);
              setGameTurns([]); // Resetea la partida al cambiar de modo
            }}
          >
            {gameType ? 'Modo Infinito' : 'Modo Clásico'}
          </button>
        </div>
        {/* <Log turns={gameTurns} /> */}
      </div>
    </main>
  );
}

export default App;
