import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.min.css', './checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	selectedServices = [];
	selectedCar = 'None';
	carImageURL = '';
	surpPrice = 0;
	carType = '';
	totalPrice = 0;
	firstname = '';
	lastname = '';
	email = '';
	mobile = '';
	date = '';
	time = '';
	isCash = false;
	isCard = false;
	cardNumber = '';
	cardExpiry = '';
	cardCVV = '';

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		
		this.firstname = this.dataService.firstname;
		this.lastname = this.dataService.lastname;
		this.email = this.dataService.email;
		this.mobile = this.dataService.mobile;
		this.date = this.dataService.date;
		this.time = this.dataService.time;

		if ( this.dataService.isCash ){
			this.isCash = true;
		}
		else if ( this.dataService.isCard ){
			this.isCard = true;
		}
		
		for ( var i of this.dataService.selectedServices ){
			if ( i.serviceID == 'Service 1'){
				this.selectedServices.push({ ServiceID : 'Service 1', imgURL : '../../assets/images/img1.png', price : 100});
				this.totalPrice += 100;
			}
			else if ( i.serviceID == 'Service 2'){
				this.selectedServices.push({ ServiceID : 'Service 2', imgURL : '../../assets/images/img2.png', price : 200});
				this.totalPrice += 200;
			}
			else if ( i.serviceID == 'Service 3'){
				this.selectedServices.push({ ServiceID : 'Service 3', imgURL : '../../assets/images/img3.png', price : 300});
				this.totalPrice += 300;
			}
			else if ( i.serviceID == 'Service 4'){
				this.selectedServices.push({ ServiceID : 'Service 4', imgURL : '../../assets/images/img4.png', price : 400});
				this.totalPrice += 400;
			}
			else if ( i.serviceID == 'Service 5'){
				this.selectedServices.push({ ServiceID : 'Service 5', imgURL : '../../assets/images/img5.png', price : 500});
				this.totalPrice += 500;
			}
			else if ( i.serviceID == 'Service 6'){
				this.selectedServices.push({ ServiceID : 'Service 6', imgURL : '../../assets/images/img6.png', price : 600});
				this.totalPrice += 600;
			}
			else if ( i.serviceID == 'Service 7'){
				this.selectedServices.push({ ServiceID : 'Service 7', imgURL : '../../assets/images/img7.png', price : 700});
				this.totalPrice += 700;
			}
			else if ( i.serviceID == 'Service 8'){
				this.selectedServices.push({ ServiceID : 'Service 8', imgURL : '../../assets/images/img8.png', price : 800});
				this.totalPrice += 800;
			}
			else{
				this.selectedServices.push({ ServiceID : 'Service 9', imgURL : '../../assets/images/img9.png', price : 900});
				this.totalPrice += 900;
			}
		}

		this.selectedCar = this.dataService.selectedCartype.toString();
		if (this.selectedCar == '1'){
			this.carImageURL = '../../assets/images/sedan.webp';
			this.carType = 'Sedan';
			this.surpPrice += 100;
		}
		else if (this.selectedCar == '2'){
			this.carImageURL = '../../assets/images/minivan.webp';
			this.surpPrice += 200;
			this.carType = 'Minivan';
		}
		else if (this.selectedCar == '3'){
			this.carImageURL = '../../assets/images/city-car.png';
			this.surpPrice += 300;
			this.carType = 'City Car';
		}
		else if (this.selectedCar == '4'){
			this.carImageURL = '../../assets/images/sports.png';
			this.surpPrice += 400;
			this.carType = 'Sports';
		}
		else if (this.selectedCar == '5'){
			this.carImageURL = '../../assets/images/suv.png';
			this.surpPrice += 500;
			this.carType = 'SUV';
		}
		else if (this.selectedCar == '6'){
			this.carImageURL = '../../assets/images/truck.png';
			this.surpPrice += 600;
			this.carType = 'Truck';
		}
		else if (this.selectedCar == '7'){
			this.carImageURL = '../../assets/images/van.png';
			this.surpPrice += 700;
			this.carType = 'Van';
		}
		else{
			this.carImageURL = '../../assets/images/cabriolet.png';
			this.surpPrice += 800;
			this.carType = 'Cabriolet';
		}
	this.totalPrice += this.surpPrice;
	}

}
