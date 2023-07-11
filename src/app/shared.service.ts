import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  dataEmitter: EventEmitter<string> = new EventEmitter<string>();

  sendData(data: string) {
    this.dataEmitter.emit(data);
  }
}
