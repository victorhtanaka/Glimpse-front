import { Base } from './base.model';
import { Project } from './project.model';

export interface Repository extends Base {
  owner: string;
  repoName: string;
  token: string;
  projectId: number;
  project: Project;
}

export class Repository implements Repository {
  public constructor(init?: Partial<Repository>) {
    Object.assign(this, init);
  }
}
