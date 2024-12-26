import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BlobFile } from '../models/blobFile.model';


@Injectable({
  providedIn: 'root'
})
export class BlobFileService extends BaseService<BlobFile>{

  constructor(http: HttpClient) {
    super(http, `BlobFile`);
  }

  protected override httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
  };
}
