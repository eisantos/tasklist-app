import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {

  taskUrl = 'http://localhost:8080/tasks'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Task[]>(`${this.taskUrl}`);
  }

  edit(id: number){
    return this.http.get<Task>(`${this.taskUrl}/${id}`);
  }

  save(id: number, value: any): Observable<Task>{
    if (id>0){
      return this.http.put<Task>(`${this.taskUrl}/${id}`, value);
    } else {
      return this.http.post<Task>(`${this.taskUrl}`, value);
    }
  }

  delete(id: number){
    return this.http.delete<Task>(`${this.taskUrl}/${id}`);
  }

}
