import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Client} from '../Model/client';
import {Observable} from 'rxjs';
import {SearchClientRequest} from '../search-client-request';

@Injectable()
export class ClientService {

  private clientsUrl: string;

  constructor(private http: HttpClient) {
    this.clientsUrl = 'http://localhost:8080/clients';
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  public search(request: SearchClientRequest): Observable<Client[]>{
    let params = new HttpParams();
    if ( request.guid !== ''){ params = params.set('guid', request.guid); }
    if ( request.firstName !== ''){ params = params.set('firstName', request.firstName); }
    if ( request.lastName !== ''){ params = params.set('lastName', request.lastName); }
    if ( request.street !== ''){ params = params.set('street', request.street); }
    if ( request.city !== ''){ params = params.set('city', request.city); }
    if ( request.zip !== 0){ params = params.set('zip', String(request.zip)); }

    const options = {params};
    return this.http.get<Client[]>(this.clientsUrl, options);
  }
}


