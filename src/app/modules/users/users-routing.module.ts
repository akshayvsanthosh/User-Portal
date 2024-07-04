import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  //http://localhost:4200/users
  { path: '', component: UserListComponent },
  //http://localhost:4200/users/add
  { path: 'add', component: AddUserComponent },
  //http://localhost:4200/users/id/edit
  { path: ':id/edit', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
