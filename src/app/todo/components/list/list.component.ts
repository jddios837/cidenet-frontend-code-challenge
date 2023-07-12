import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Todo} from "../../todo.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {
  dataSource: MatTableDataSource<Todo>;
  filterValue!: string;

  displayedColumns: string[] = ['id', 'name', 'description', 'isDone'];

  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(public todoService: TodoService) {
    this.dataSource = new MatTableDataSource<Todo>();
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.dataSource.data = todos;
    });
  }

  applyFilter() {
    const filterText = this.filterValue.trim().toLowerCase();
    this.dataSource.filter = filterText;
  }
}
