import { Component } from '@angular/core';
import { iPlace } from './interfaces/iplace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hotels';

  selectedPlace: any;


}
