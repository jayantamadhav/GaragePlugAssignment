import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartype',
  templateUrl: './cartype.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.min.css', './cartype.component.css']
})

export class CartypeComponent implements OnInit {

	constructor(private dataService: DataService, private router: Router) { }

	ngOnInit(): void{
	}

	selectCar(carID: string){
		this.dataService.selectedCartype = carID;
		this.router.navigate([`./pricecalc`]);
	}

}
