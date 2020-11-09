import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bulma/css/bulma.min.css', './app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
}
