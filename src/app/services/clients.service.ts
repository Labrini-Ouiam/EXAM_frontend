import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private backendHost = "http://localhost:8085/api/clients";

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.backendHost);
  }

  public addClient(client: { nom: string; email: string }): Observable<Client> {
    return this.http.post<Client>(this.backendHost, client);
  }

}
