import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URI:string = 'http://localhost:4000/employees';

  selectedEmployee:Employee = {
    name:'',
    office:'',
    position:'',
    salary:0
  }
  employees:Employee[] = [];

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.API_URI}`)
  }

  createEmployee(employee:Employee){
    return this.http.post(this.API_URI, employee)
  }

  deleteEmployee(id:string){
    return this.http.delete(`${this.API_URI}/${id}`)
  }

  editEmployee(id:string, employee:Employee){
    return this.http.put(`${this.API_URI}/${id}`, employee)
  }
}
