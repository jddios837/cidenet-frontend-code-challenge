import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {SharedService} from "./shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private sharedService: SharedService) {
    this.titleService.setTitle('Todo Section');
  }

  ngOnInit() {
    this.sharedService.dataEmitter.subscribe(data => {
      this.titleService.setTitle(data);
    });
  }
}
