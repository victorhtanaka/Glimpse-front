import { Base } from './base.model';
import { Lane } from './lane.model';
import { Project } from './project.model';
import { Tag } from './tag.model';

export interface Board extends Base {
  name: string;
  projectId: number;
  project: Project;
  tags: Tag[]
  Lanes: Lane[];
}

export class Board implements Board {
  public constructor(init?: Partial<Board>) {
    Object.assign(this, init);
  }
}
