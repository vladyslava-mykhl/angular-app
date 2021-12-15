import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
