import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class SharedModule { }
