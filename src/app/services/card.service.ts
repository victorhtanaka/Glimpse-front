import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Card } from '../models/card.model';


@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseService<Card>{

  constructor(http: HttpClient) {
    super(http, `Card`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
