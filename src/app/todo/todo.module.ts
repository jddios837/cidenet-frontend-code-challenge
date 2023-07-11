import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
