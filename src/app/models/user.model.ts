import { Base } from './base.model';

export interface User extends Base {
  firstName: string;
  lastName: string;
  pictureId: number;
  picture: BlobFile;
  cards:
}

export class User implements User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
