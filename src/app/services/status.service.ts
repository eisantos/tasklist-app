import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Status } from '../models/status';

@Injectable()
export class StatusService {

  statusUrl = 'http://localhost:8080/status'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Status[]>(`${this.statusUrl}`);
  }

  edit(id: number){
    return this.http.get<Status>(`${this.statusUrl}/${id}`);
  }

}
