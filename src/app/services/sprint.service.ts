import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Sprint } from '../models/sprint.model';


@Injectable({
  providedIn: 'root'
})
export class SprintService extends BaseService<Sprint>{

  constructor(http: HttpClient) {
    super(http, `Sprint`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
