import { Base } from './base.model';

export interface BlobFile extends Base {
  path: string;
}

export class BlobFile implements BlobFile {
  public constructor(init?: Partial<BlobFile>) {
    Object.assign(this, init);
  }
}
