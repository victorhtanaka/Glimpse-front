import { Base } from './base.model';

export interface Sprint extends Base {
  name: string;
  startDate: Date;
  endDate: Date;
  cards: Card[];
  projectId: number;
  project: Project;
}

export class Sprint implements Sprint {
  public constructor(init?: Partial<Sprint>) {
    Object.assign(this, init);
  }
}
