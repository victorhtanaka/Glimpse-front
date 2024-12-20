import { Base } from './base.model';

export interface Project extends Base {
  responsibleUserId: string;
  name: string;
  description: string;
  pictureId: number;
  picture: BlobFile;
  Repositories: Repository[];
  Boards: Board[];
  Roles: Role[];
  Users: User[];
  Sprints: Sprint[];
}

export class Project implements Project {
  public constructor(init?: Partial<Project>) {
    Object.assign(this, init);
  }
}
