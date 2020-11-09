import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pricecalc',
  templateUrl: './pricecalc.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.min.css', './pricecalc.component.css']
})
export class PricecalcComponent implements OnInit {
	selectedCar = 'None';
	carImageURL = '';
	totalPrice = 0;
	surpPrice = 0;
	selectedServices = [];
	constructor(private dataService: DataService) {	}

	ngOnInit(): void{
		for ( var i of this.dataService.selectedServices ){
			if ( i.serviceID == 'Service 1'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img1.png', price : 100});
				this.totalPrice += 100;
			}
			else if ( i.serviceID == 'Service 2'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img2.png', price : 200});
				this.totalPrice += 200;
			}
			else if ( i.serviceID == 'Service 3'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img3.png', price : 300});
				this.totalPrice += 300;
			}
			else if ( i.serviceID == 'Service 4'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img4.png', price : 400});
				this.totalPrice += 400;
			}
			else if ( i.serviceID == 'Service 5'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img5.png', price : 500});
				this.totalPrice += 500;
			}
			else if ( i.serviceID == 'Service 6'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img6.png', price : 600});
				this.totalPrice += 600;
			}
			else if ( i.serviceID == 'Service 7'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img7.png', price : 700});
				this.totalPrice += 700;
			}
			else if ( i.serviceID == 'Service 8'){
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img8.png', price : 800});
				this.totalPrice += 800;
			}
			else{
				this.selectedServices.push({ ServiceID : i.serviceID, imgURL : 'assets/images/img9.png', price : 900});
				this.totalPrice += 900;
			}
		}
		this.selectedCar = this.dataService.selectedCartype.toString();
		if (this.selectedCar == '1'){
			this.carImageURL = 'assets/images/sedan.webp';
			this.surpPrice = 100;
			this.totalPrice += 100;
		}
		else if (this.selectedCar == '2'){
			this.carImageURL = 'assets/images/minivan.webp';
			this.surpPrice = 200;
			this.totalPrice += 200;
		}
		else if (this.selectedCar == '3'){
			this.carImageURL = 'assets/images/city-car.png';
			this.surpPrice = 300;
			this.totalPrice += 300;
		}
		else if (this.selectedCar == '4'){
			this.carImageURL = 'assets/images/sports.png';
			this.surpPrice = 400;
			this.totalPrice += 400;
		}
		else if (this.selectedCar == '5'){
			this.carImageURL = 'assets/images/suv.png';
			this.surpPrice = 500;
			this.totalPrice += 500;
		}
		else if (this.selectedCar == '6'){
			this.carImageURL = 'assets/images/truck.png';
			this.surpPrice = 600;
			this.totalPrice += 600;
		}
		else if (this.selectedCar == '7'){
			this.carImageURL = 'assets/images/van.png';
			this.surpPrice = 700;
			this.totalPrice += 700;
		}
		else{
			this.carImageURL = 'assets/images/cabriolet.png';
			this.surpPrice = 800;
			this.totalPrice += 800;
		}

		this.dataService.orderTotal = this.totalPrice;

	}

}
