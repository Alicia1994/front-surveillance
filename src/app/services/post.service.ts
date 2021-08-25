import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post-payload';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  
  constructor(private httpClient: HttpClient) {
  }

  baseUrl = `${environment.baseUrl}/posts`;

    findAll(): Observable<Array<Post>>{
    return this.httpClient.get<Array<Post>>( this.baseUrl + '/all');
  }

    findById(idPost: Number):Observable<Post>{
    return this.httpClient.get<Post>(this.baseUrl + '/get/' + idPost);
  }

  findPostByUsername(username: string) {
    return this.httpClient.get<Array<User>>(`${this.baseUrl}/name/${username}`)
  }

  // deletePosts(){
  //   return this.httpClient.delete('http://localhost:8080/api/posts/')
  // }
}



