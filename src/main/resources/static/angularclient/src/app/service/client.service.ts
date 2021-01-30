import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client} from '../Model/client';
import {Observable} from 'rxjs';

@Injectable()
export class ClientService {

  private clientsUrl: string;

  constructor(private http: HttpClient) {
    this.clientsUrl = 'http://localhost:8080/clients';
  }

  public findAll(): Observable<Client[]> {
    console.log('putain de log');
    return this.http.get<Client[]>(this.clientsUrl);
  }
}

