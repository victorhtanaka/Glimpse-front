import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Repository } from '../models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService extends BaseService<Repository>{

  constructor(http: HttpClient) {
    super(http, `Repository`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
