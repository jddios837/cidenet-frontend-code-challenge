import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos
    );
  }

  handleTodoAdded(todo: Todo) {
    this.todos.push(todo);
  }
}
