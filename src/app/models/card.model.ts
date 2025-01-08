import { Base } from './base.model';
import { Checkbox } from './checkbox.model';
import { Lane } from './lane.model';
import { Sprint } from './sprint.model';
import { Tag } from './tag.model';
import { User } from './user.model';

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
