import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  metaDataUrl = 'https://dev-oc3-player-portal-api.azurewebsites.net/api/MetaData';

  constructor() { }
  

  getMetaData() {
    return this.metaDataUrl;
  }
}
