import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'GaragePlug';
  faArrowRight = "faArrowRight";

  constructor() { }

  ngOnInit(): void {
  }

}
