import { Injectable, OnInit } from '@angular/core';
import { Task } from './task';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit {

  tasks : Task[] = []
 


  constructor(private router:Router) {
    let storedTasks=localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks =JSON.parse(storedTasks)
     
    }else{
      this.tasks =[]
    }
   }

   ngOnInit(): void {

   }

    deleteTask(i : number){
      this.tasks.splice(i,1);
      this.storeTasks()
    }

    saveTask(title :any, description:any)
    {
      if (title=="" || description=="") {
        this.router.navigate(["add"]) 
      }else{

        this.tasks.push({title,description})
        this.storeTasks()
        Swal.fire({
          title: "Good job!",
          text: "Task Added Successfully!",
          icon: "success"
        }).then((result) => {
          this.router.navigate(["list"]) 
      });;
      }
     
    }

    storeTasks(){
      localStorage.setItem('tasks' , JSON.stringify(this.tasks))
    }

    clear(){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.tasks =[]
          this.storeTasks()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
     
      
    }
 
    Logout(){
      localStorage.removeItem('currentUser')
       this.router.navigate(["login"])
    }
}
