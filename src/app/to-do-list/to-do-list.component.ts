import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit{


  paginateTasks : Task[] = []
  pageSize : number = 5;
  currentPage : number = 1;
  pageNumber : number = 1;
  maxSize : number = 0;
  constructor(public  TasksService:TasksService){}

  ngOnInit(): void {
    this.maxSize = this.TasksService.tasks.length
  this.getPaginateTasks()

  }
  deleteTask(i : number){
    this.TasksService.deleteTask(i);
  }

  clear(){
    this.TasksService.clear()
  }

  Logout(){
    this.TasksService.Logout()
  }

  paginate(pageNumber : number){
     this.pageNumber = pageNumber;
  this.getPaginateTasks()
}
  getPaginateTasks(){
    this.paginateTasks = this.TasksService.tasks
     .slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);

  }
}
