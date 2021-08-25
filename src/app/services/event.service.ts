import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.baseUrl}/events`;

  findAll(): Observable<Array<Event>>{
    return this.httpClient.get<Array<Event>>( this.baseUrl + '/all');
  }
  


}