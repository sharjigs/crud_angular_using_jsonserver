import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/modules/shared/employee.service";
import { Employee } from "src/app/model/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployee: Employee[];
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee() 
  }

  getAllEmployee() {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
      }
    )
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      (data: Employee) => {
        this.getAllEmployee();
      }
    );
  }

  edit(emp){
    this.employeeService.currentEmployee = Object.assign({}, emp);
  }
}
