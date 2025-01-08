import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Checkbox } from '../models/checkbox.model';


@Injectable({
  providedIn: 'root'
})
export class CheckboxService extends BaseService<Checkbox>{

  constructor(http: HttpClient) {
    super(http, `Checkbox`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
