import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {

  employees: any;

  constructor() {

    this.employees = [

      {
        'EmployeeID': '1',
        'FirstName': 'Mark',
        'LastName': 'Otto',
        'Dept': 'IT',
        'City': 'Santa Clara',
        'Email': 'MOtto@gmail.com'
      },
      {
        'EmployeeID': '2',
        'FirstName': 'Jacob',
        'LastName': 'Thornton',
        'Dept': 'Revenue',
        'City': 'San Antonio',
        'Email': 'ThorntonJac@gmail.com'
      },
      {
        'EmployeeID': '3',
        'FirstName': 'Larry',
        'LastName': 'the Bird',
        'Dept': 'Developer',
        'City': 'Santa Rosa',
        'Email': 'BirdLarry@yahoo.com'
      },
      {
        'EmployeeID': '4',
        'FirstName': 'William',
        'LastName': 'smith',
        'Dept': 'Construction',
        'City': 'Edison',
        'Email': 'Wsmith@gmail.com'
      },
      {
        'EmployeeID': '5',
        'FirstName': 'Sandra',
        'LastName': 'leonardo',
        'Dept': 'Banking',
        'City': 'Princeton',
        'Email': 'leoSandra@gmail.com'
      },
    ];
  }



  ngOnInit(): void {
  }
}

