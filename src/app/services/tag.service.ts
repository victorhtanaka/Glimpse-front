import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Tag } from '../models/tag.model';


@Injectable({
  providedIn: 'root'
})
export class TagService extends BaseService<Tag>{

  constructor(http: HttpClient) {
    super(http, `Tag`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
