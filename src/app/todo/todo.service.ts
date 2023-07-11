import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { "name": "Task1", "description": "Task 1", "isFinish": true },
    { "name": "Task2", "description": "Task 2", "isFinish": false },
    { "name": "Task3", "description": "Task 3", "isFinish": true },
    { "name": "Task4", "description": "Task 4", "isFinish": false },
  ];
  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
