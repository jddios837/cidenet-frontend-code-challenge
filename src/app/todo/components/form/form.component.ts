import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Todo} from "../../todo.model";
import {ErrorStateMatcher} from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() todoAdded: EventEmitter<Todo> = new EventEmitter<Todo>();
  todoForm: FormGroup;

  matcher = new MyErrorStateMatcher();

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
        isDone: false
      };

      this.todoAdded.emit(newTodo);
      this.todoForm.reset();
    }
  }
}
