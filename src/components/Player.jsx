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

  let editablePlayerName = <span className="w-36">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        className="w-full bg-zinc-600 text-center"
      />
    );
  }

  return (
    <li
      className={`w-full py-6 rounded-md flex justify-around   transition-all duration-300 ${
        isActive ? 'border-2 border-zinc-800' : undefined
      }`}
    >
      <span className="font-bold w-28 flex text-center">
        {editablePlayerName}
      </span>
      <span className="font-bold">{symbol}</span>
      <button
        className="font-light pointer-cursor px-4"
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
