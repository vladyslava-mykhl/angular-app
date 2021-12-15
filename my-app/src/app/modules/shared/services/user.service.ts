import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserById(id: number | undefined) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
