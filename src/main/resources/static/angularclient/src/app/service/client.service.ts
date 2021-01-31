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
    const options = { params: new HttpParams().set('lastName', request.lastName) } ;
    return this.http.get<Client[]>(this.clientsUrl, options);
  }
}


//todo : ajouter des arguments à mon search en faisant .set().set()... voir : https://angular.io/api/common/http/HttpParams#set
