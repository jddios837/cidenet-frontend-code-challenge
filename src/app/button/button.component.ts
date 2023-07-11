import { Component } from '@angular/core';
import {SharedService} from "../shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  buttonvalue: string = 'Go Back'

  constructor(private sharedService: SharedService, private router: Router) {}

  sendData() {
    this.sharedService.sendData(this.buttonvalue);
    this.router.navigate(['/']);
  }
}
