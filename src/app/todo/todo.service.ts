import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { "id": 1, "name": "Task1", "description": "Task 1", "isFinish": true },
    { "id": 2, "name": "Task2", "description": "Task 2", "isFinish": false },
    { "id": 3, "name": "Task3", "description": "Task 3", "isFinish": true },
    { "id": 4, "name": "Task4", "description": "Task 4", "isFinish": false },
  ];
  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
