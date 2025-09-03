import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = (
    <span className="w-36 truncate text-lg font-semibold">{playerName}</span>
  );

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        className="w-36 px-2 py-1 bg-[#9d4edd] text-white text-center rounded-md outline-none border-2 border-[#e0aaff] focus:border-[#c77dff] transition-all duration-200"
      />
    );
  }

  return (
    <li
      className={`w-full py-5 px-4 rounded-xl flex items-center justify-between gap-4 shadow-lg transition-all duration-300
        ${
          isActive
            ? 'border-4 border-[#e0aaff] bg-[#3c096c]/60'
            : 'border-2 border-[#9d4edd] bg-[#5a189a]/60'
        }
      `}
    >
      <span className="flex-1 flex items-center justify-center">
        {editablePlayerName}
      </span>
      <span className="text-2xl font-extrabold  w-10 text-center drop-shadow">
        {symbol}
      </span>
      <button
        className={`ml-2 px-4 py-1 rounded-md font-bold text-sm transition-all duration-200
          ${
            isEditing
              ? 'bg-[#f72585] text-white hover:bg-[#b5179e]'
              : 'bg-[#e0aaff] text-[#3c096c] hover:bg-[#c77dff]'
          }
          shadow-md`}
        onClick={handleEditClick}
      >
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
    </li>
  );
}

// #000000
// #222222
// #1DCD9F
// #169976
// { 'russian_violet': { DEFAULT: '#10002b', 100: '#030008', 200: '#060010', 300: '#090018', 400: '#0c0021', 500: '#10002b', 600: '#310087', 700: '#5400e4', 800: '#8843ff', 900: '#c4a1ff' }, 'russian_violet': { DEFAULT: '#240046', 100: '#07000e', 200: '#0f001d', 300: '#16002b', 400: '#1e0039', 500: '#240046', 600: '#52009f', 700: '#8000f7', 800: '#aa50ff', 900: '#d5a7ff' }, 'persian_indigo': { DEFAULT: '#3c096c', 100: '#0c0216', 200: '#18042b', 300: '#240541', 400: '#300757', 500: '#3c096c', 600: '#650fb5', 700: '#8d25ed', 800: '#b36ef3', 900: '#d9b6f9' }, 'tekhelet': { DEFAULT: '#5a189a', 100: '#12051f', 200: '#240a3e', 300: '#360e5d', 400: '#47137c', 500: '#5a189a', 600: '#7a21d4', 700: '#9c53e4', 800: '#bd8ced', 900: '#dec6f6' }, 'french_violet': { DEFAULT: '#7b2cbf', 100: '#180926', 200: '#31114c', 300: '#491a73', 400: '#622399', 500: '#7b2cbf', 600: '#954bd6', 700: '#b078e0', 800: '#caa5eb', 900: '#e5d2f5' }, 'amethyst': { DEFAULT: '#9d4edd', 100: '#200a33', 200: '#401365', 300: '#601d98', 400: '#8127ca', 500: '#9d4edd', 600: '#b172e4', 700: '#c596eb', 800: '#d8b9f2', 900: '#ecdcf8' }, 'heliotrope': { DEFAULT: '#c77dff', 100: '#2b004d', 200: '#570099', 300: '#8200e6', 400: '#a733ff', 500: '#c77dff', 600: '#d399ff', 700: '#deb3ff', 800: '#e9ccff', 900: '#f4e5ff' }, 'mauve': { DEFAULT: '#e0aaff', 100: '#360055', 200: '#6b00a9', 300: '#a100fe', 400: '#c054ff', 500: '#e0aaff', 600: '#e6baff', 700: '#eccbff', 800: '#f2dcff', 900: '#f9eeff' } }
