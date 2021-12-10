import { Component, OnInit } from '@angular/core';
import {User} from "../../../interfaces/users.interface";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User [] = []

  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {

    this.UsersService.getUsers().subscribe((res) => {
      this.usersList = Object.values(res).map((item) => {
        return {
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          address: item.address,
          website: item.website,
          phone: item.phone,
          company: item.company
        }
      })
      console.log(this.usersList)
    });
  };
}
