import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post-payload';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  baseUrl = `${environment.baseUrl}/users`;

  findAllUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.baseUrl);
  }

  findUserById(id: number) {
    return this.httpClient.get<Array<User>>(`${this.baseUrl}/${id}`)
  }

  findUserByUsername(username: string) {
    return this.httpClient.get<Array<User>>(`${this.baseUrl}/name/${username}`)
  }

  findAllAdmin(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.baseUrl + "/admin");
  }

  deleteUser(idUser: Number): Observable<User> {
    return this.httpClient.delete<User>(this.baseUrl + '/' + idUser)
  }

  deleteAdmin(idAdmin: Number): Observable<User>{
    return this.httpClient.delete<User>(this.baseUrl + '/admin/' + idAdmin)
  }

  addUserInPost(username: string, post: Post) {
    return this.httpClient.post<User>(`${this.baseUrl}/${username}`, post);
  }
}
