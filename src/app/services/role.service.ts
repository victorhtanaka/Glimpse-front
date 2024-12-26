import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Role } from '../models/role.model';


@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService<Role>{

  constructor(http: HttpClient) {
    super(http, `Role`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
