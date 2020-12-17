import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
 employees: Employee[] = [
   new Employee('1','Mark','Otto','IT','Santa Clara','MOtto@gmail.com'),
   new Employee('2','Jacob','Thornton','Revenue','San Antonio','ThorntonJac@gmail.com'),
   new Employee('3','Larry','the Bird','Developer','Santa Rosa','BirdLarry@yahoo.com'),
   new Employee('4','William','smith','Construction','Edison','Wsmith@gmail.com'),
   new Employee('5','Sandra','leonardo','Banking','Princeton','leoSandra@gmail.com'),
   new Employee('6','kyle','watson','Accountant','Foster City','KyWatson@gmail.com'),
 ];

  constructor() { }

  ngOnInit(): void {
  }
  
}
