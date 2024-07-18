import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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

  Rigester(userName:any , Password:any){
    if (userName.value.trim()!="" && Password.value.trim() !="") {
      this.users.push({userName:userName.value,password:Password.value})
      this.storeUsers()
      this.router.navigate(["login"])
    }
  }

}
