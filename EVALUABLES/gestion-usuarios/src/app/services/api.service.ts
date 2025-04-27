import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users";

    return this.http.get(url);
  }

  public getUserByIdURL(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  public getAllUsersByEmail(terminacion: string): Observable<any> {

    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").pipe(
      map(users => users.filter(user => {
        const emailDominio = user.email.split('@')[1];
        return emailDominio.endsWith(terminacion);
        
      }))
    );
  }
}
