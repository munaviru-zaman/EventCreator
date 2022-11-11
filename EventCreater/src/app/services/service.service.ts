import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  signup(userId: any, dob: any, email: any, pswd: any) {
    const user = {
      userId,
      dob,
      email,
      pswd,
    };
    return this.http.post('http://localhost:3000/signup', user);
  }

  login(email: any, pswd: any) {
    const loginUser = {
      email,
      pswd,
    };
    return this.http.post('http://localhost:3000/login', loginUser);
  }
  deletedEvents(userId: any) {
    return this.http.get('http://localhost:3000/deletedEvents/' + userId);
  }
}
