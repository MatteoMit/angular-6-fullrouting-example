import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

constructor(private http: HttpClient) { }
  url = 'https://api.myjson.com/bins/1csdcs';
  getUsers() {
    return this
            .http
            .get(`${this.url}`);
        }
}