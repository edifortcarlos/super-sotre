import { StorageService } from './providers/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(public storage: StorageService){
    storage.setDrive('local');
  }
}
