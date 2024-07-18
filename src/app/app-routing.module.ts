import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authenticationGuard } from './authentication.guard';

const routes: Routes = [
 {path:"" , component:ToDoListComponent},
 {path:"list" ,canActivate:[authenticationGuard], component:ToDoListComponent},
 {path:"add" ,canActivate: [authenticationGuard], component:AddTaskComponent},
 {path:"login" , component:LoginComponent},
 {path:"register" , component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
