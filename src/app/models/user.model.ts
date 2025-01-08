import { Base } from './base.model';
import { BlobFile } from './blobFile.model';
import { Card } from './card.model';

export interface User extends Base {
  firstName: string;
  lastName: string;
  pictureId: number;
  picture: BlobFile;
  cards: Card[];
}

export class User implements User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
