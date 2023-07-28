import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const url = "http://localhost:8081";

  // Define the HTTP headers if needed (e.g., for JSON content)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUserById(endpoint: any): Observable<any> {
    return this.http.get<User>(url + endpoint,httpOptions);
  }

  addUser(endpoint: any, user: User): Observable<any> {

    return this.http.post<User>(url + endpoint, user, httpOptions);

  }


}
