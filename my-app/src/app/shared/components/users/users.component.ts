import { Component } from '@angular/core';
import {User} from "../../../interfaces/user.interface";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  usersList: User [] = [];

 constructor(private UsersService:UsersService) { }

  onGetUsers = () => {
    this.UsersService.getUsers().subscribe((res) => {
      this.usersList = [...res];
    });
    return this.usersList;
  };
};

