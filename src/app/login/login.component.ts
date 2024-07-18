import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users : {userName:string,password:string}[] = []

  constructor(private router:Router){
    let Userstored=localStorage.getItem('Users');
    if (Userstored) {
      this.users =JSON.parse(Userstored)
    }else{
      this.users = []
    }
  }

  storeUsers(){
    localStorage.setItem('Users' , JSON.stringify(this.users))
  }

  login(userName:any,password:any){
      for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName==userName.value && this.users[i].password==password.value ) {
        localStorage.setItem('currentUser' , userName.value)
        this.router.navigate(["list"])
      }else{
        this.router.navigate(["login"])
      }
    }
  }


}
