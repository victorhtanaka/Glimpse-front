import { Base } from './base.model';
import { BlobFile } from './blobFile.model';
import { Card } from './card.model';
import { Project } from './project.model';
import { Role } from './role.model';

export interface User extends Base {
  firstName: string;
  lastName: string;
  pictureId: number;
  picture: BlobFile;
  cards: Card[];
  roles: Role[];
  projects: Project[];
}

export class User implements User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
