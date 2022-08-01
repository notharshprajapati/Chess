import React from "react";
import BoardSquare from "./BoardSquare";

const Board = ({ board }) => {
  function getXYPosition(i) {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
  }

  function isBlack(i) {
    const { x, y } = getXYPosition(i);
    return (x + y) % 2 === 1;
  }

  function getPosition(i) {
    const { x, y } = getXYPosition(i);
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    return `${letter}${y + 1}`;
  }

  return (
    <div className="board">
      {board.flat().map((piece, i) => (
        <div key={i} className="square">
          <BoardSquare piece={piece} black={isBlack(i)} />
        </div>
      ))}
    </div>
  );
};

export default Board;
