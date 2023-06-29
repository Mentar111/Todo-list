import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

taskObj : Task = new Task();
TaskArr :[] = [];

addTaskValue : string = '';
 constructor(private crudService : crudService){}

 ngOnInit():void{

 }

 addTask(etask : Task) {
  this.crudService.addTask

 }
}
