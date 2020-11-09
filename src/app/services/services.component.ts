import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.min.css', './services.component.css']
})

export class ServicesComponent implements OnInit {
	clickMessage = '';
	isSelected1 = false;
	isSelected2 = false;
	isSelected3 = false;
	isSelected4 = false;
	isSelected5 = false;
	isSelected6 = false;
	isSelected7 = false;
	isSelected8 = false;
	isSelected9 = false;
	services = [];

	constructor(private dataService: DataService, private router: Router) { }

	ngOnInit(): void{
	}

	saveSelectedServices(){
		for(var service of this.services){
			if( service == '1'){
				this.dataService.selectedServices.push({ serviceID: 'Service 1', price: 100 });
			}
			else if( service == '2'){
				this.dataService.selectedServices.push({ serviceID: 'Service 2', price: 200 });
			}
			else if( service == '3'){
				this.dataService.selectedServices.push({ serviceID: 'Service 3', price: 300 });
			}
			else if( service == '4'){
				this.dataService.selectedServices.push({ serviceID: 'Service 4', price: 400 });
			}
			else if( service == '5'){
				this.dataService.selectedServices.push({ serviceID: 'Service 5', price: 500 });
			}
			else if( service == '6'){
				this.dataService.selectedServices.push({ serviceID: 'Service 6', price: 600 });
			}
			else if( service == '7'){
				this.dataService.selectedServices.push({ serviceID: 'Service 7', price: 700 });
			}
			else if( service == '8'){
				this.dataService.selectedServices.push({ serviceID: 'Service 8', price: 800 });
			}
			else if( service == '9'){
				this.dataService.selectedServices.push({ serviceID: 'Service 9', price: 900 });
			}
		}
		this.router.navigate([`./cartype`]);
	}


	toggleServ1(service1: string) {
		this.services.push(service1);
		this.isSelected1 = !this.isSelected1;

		if (this.isSelected1 == false){
			this.services = this.services.filter(item => item !== service1);
		}
	}
	toggleServ2(service2: string) {
		this.services.push(service2);
		this.isSelected2 = !this.isSelected2;

		if (this.isSelected2 == false){
			this.services = this.services.filter(item => item !== service2);
		}
	}
	toggleServ3(service3: string) {
		this.services.push(service3);
		this.isSelected3 = !this.isSelected3;

		if (this.isSelected3 == false){
			this.services = this.services.filter(item => item !== service3);
		}
	}
	toggleServ4(service4: string) {
		this.services.push(service4);
		this.isSelected4 = !this.isSelected4;

		if (this.isSelected4 == false){
			this.services = this.services.filter(item => item !== service4);
		}
	}
	toggleServ5(service5: string) {
		this.services.push(service5);
		this.isSelected5 = !this.isSelected5;

		if (this.isSelected5 == false){
			this.services = this.services.filter(item => item !== service5);
		}
	}
	toggleServ6(service6: string) {
		this.services.push(service6);
		this.isSelected6 = !this.isSelected6;

		if (this.isSelected6 == false){
			this.services = this.services.filter(item => item !== service6);
		}
	}
	toggleServ7(service7: string) {
		this.services.push(service7);
		this.isSelected7 = !this.isSelected7;

		if (this.isSelected7 == false){
			this.services = this.services.filter(item => item !== service7);
		}
	}
	toggleServ8(service8: string) {
		this.services.push(service8);
		this.isSelected8 = !this.isSelected8;

		if (this.isSelected8 == false){
			this.services = this.services.filter(item => item !== service8);
		}
	}
	toggleServ9(service9: string) {
		this.services.push(service9);
		this.isSelected9 = !this.isSelected9;

		if (this.isSelected9 == false){
			this.services = this.services.filter(item => item !== service9);
		}
	}

}
