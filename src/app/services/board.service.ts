import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Board } from '../models/board.model';


@Injectable({
  providedIn: 'root'
})
export class BoardService extends BaseService<Board>{

  constructor(http: HttpClient) {
    super(http, `Board`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
