import { Base } from './base.model';

export interface Checkbox extends Base {
  name: string;
  finished: boolean;
  cardId: number;
  card: Card;
}

export class Checkbox implements Checkbox {
  public constructor(init?: Partial<Checkbox>) {
    Object.assign(this, init);
  }
}
