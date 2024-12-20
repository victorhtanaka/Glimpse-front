import { Base } from './base.model';

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
