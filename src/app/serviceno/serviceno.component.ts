import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceno',
  templateUrl: './serviceno.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.css', './serviceno.component.css']
})
export class ServicenoComponent implements OnInit {
	serviceno = '';
	
	constructor() { }

	ngOnInit(): void {
		this.serviceno = 'AW-' + Math.floor(Math.random() * (100 - 1 + 1) + 1).toString();
	}

}
