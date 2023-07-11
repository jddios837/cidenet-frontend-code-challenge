import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../../todo.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() todoAdded: EventEmitter<Todo> = new EventEmitter<Todo>();
  todoForm: FormGroup;

  min = 1;
  max = 100;
  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
        name: this.todoForm.value.name,
        description: this.todoForm.value.description,
        isFinish: false
      };

      this.todoAdded.emit(newTodo);
      this.todoForm.reset();
    }
  }
}
