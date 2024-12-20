import { Base } from './base.model';

export interface Role extends Base {
  name: string;
  description: string;
  color: string;
  users: User[];
  projectId: number;
  project: Project;
  canManageMembers: boolean;
  canManageRoles: boolean;
  canManageCards: boolean;
  canManageTags: boolean;
  canManageChecklist: boolean;
}

export class Role implements Role {
  public constructor(init?: Partial<Role>) {
    Object.assign(this, init);
  }
}
