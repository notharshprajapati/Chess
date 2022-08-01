import * as Chess from "chess.js";
import { BehaviorSubject, from } from "rxjs";

const chess = new Chess();

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
});

export function move(from, to) {
  const legalMove = chess.move({ from, to });
  if (legalMove) {
    gameSubject.next({ board: chess.board() });
  }
}
