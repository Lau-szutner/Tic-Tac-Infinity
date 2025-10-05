# Tic Tac Infinity

A twist on the classic Tic Tac Toe game with two modes:  
- **Classic Mode** — standard rules, win by getting three in a row.  
- **Infinite Mode** — if a draw (tie) would occur, the last move of the current player is erased, preventing draws until someone actually forms three in a row.

This variation ensures the game always ends with a winner, unless the board is completely cleared and restarted.

## 🎮 Features

- Two playable modes (Classic and Infinite)  
- Clear UI for making moves  
- Logic to detect wins and, in Infinite Mode, to remove the last move in draw scenarios  
- Option to restart and play repeatedly  

## 🧩 How to play

1. Choose the mode (Classic or Infinite).  
2. Players alternate placing their symbol (X or O) in an empty cell.  
3. In Classic Mode: win by forming a line of three.  
4. In Infinite Mode: if no winning move is possible and the board is full, the last move of the current player is undone, giving additional chances until someone wins.  
5. The game ends only when one player forms three in a row.

## 🚀 Getting started / Running locally

```bash
git clone https://github.com/Lau-szutner/Tic-tac-tou-inifinite.git
cd Tic-tac-tou-inifinite
# (assuming Node.js/JavaScript setup)
npm install
npm run dev
