import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

/*
constructor(private http: HttpClient) { }
  url = 'https://api.myjson.com/bins/a6724';
  getUsers() {
    return this
            .http
            .get(`${this.url}`);
        }
}
*/
  constructor(private http: HttpClient) { }
  
  url = 'https://my-json-server.typicode.com/MatteoMit/DemoMovie/results';

  getUsers() {
      return this
            .http
            .get(this.url);
        }
}
