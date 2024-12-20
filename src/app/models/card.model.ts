import { Base } from './base.model';

export interface Card extends Base {
  name: string;
  description: string;
  index: number;
  startDate: Date;
  dueDate: Date;
  estimation: number;
  laneId: number;
  Lane: Lane;
  userId: number;
  user: User;
  tags: Tag[];
  checkboxes: Checkbox[];
  sprintId: number;
  sprint: Sprint;
}

export class Card implements Card {
  public constructor(init?: Partial<Card>) {
    Object.assign(this, init);
  }
}
