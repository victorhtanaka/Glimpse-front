import { Base } from './base.model';
import { Board } from './board.model';
import { Card } from './card.model';

export interface Lane extends Base {
  name: string;
  boardId: number;
  board: Board;
  index: number;
  cards: Card[];
}

export class Lane implements Lane {
  public constructor(init?: Partial<Lane>) {
    Object.assign(this, init);
  }
}
