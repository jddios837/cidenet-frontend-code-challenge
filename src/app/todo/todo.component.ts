import {Component, ChangeDetectorRef} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private todoService: TodoService, private changeDetection: ChangeDetectorRef) {
  }

  handleTodoAdded(todo: Todo) {
    this.todoService.addTodo(todo);
    this.changeDetection.markForCheck();
  }
}
