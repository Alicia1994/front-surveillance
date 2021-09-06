import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  
  constructor(private httpClient: HttpClient) {
  }

  baseUrl = `${environment.baseUrl}/categories`;

    findAll(): Observable<Array<Categorie>>{
    return this.httpClient.get<Array<Categorie>>( this.baseUrl + '/all');
  }

}



