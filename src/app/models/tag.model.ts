import { Base } from './base.model';
import { Board } from './board.model';
import { Card } from './card.model';

export interface Tag extends Base {
  name: string;
  color: string;
  boardId: number;
  board: Board;
  cards: Card[];
}

export class Tag implements Tag {
  public constructor(init?: Partial<Tag>) {
    Object.assign(this, init);
  }
}
