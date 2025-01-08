import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Lane } from '../models/lane.model';


@Injectable({
  providedIn: 'root'
})
export class LaneService extends BaseService<Lane>{

  constructor(http: HttpClient) {
    super(http, `Lane`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
