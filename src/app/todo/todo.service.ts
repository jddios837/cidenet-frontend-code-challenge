import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { "id": 1, "name": "Task1", "description": "Task 1", "isDone": true },
    { "id": 2, "name": "Task2", "description": "Task 2", "isDone": false },
    { "id": 3, "name": "Task3", "description": "Task 3", "isDone": true },
    { "id": 4, "name": "Task4", "description": "Task 4", "isDone": false },
  ];
  private todoListSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(this.todos);
  constructor() { }

  getTodos(): Observable<Todo[]> {
    return this.todoListSubject.asObservable();
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todoListSubject.next(this.todos);
  }
}
