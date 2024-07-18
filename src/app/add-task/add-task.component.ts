import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{



  constructor(public TasksService:TasksService ,private router:Router){}

  ngOnInit(): void {
    
  }

  saveTask(title:any , description:any){
   this.TasksService.saveTask(title.value,description.value)
  

  }










}
