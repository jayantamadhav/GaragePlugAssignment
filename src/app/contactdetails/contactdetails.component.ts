import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['../../../node_modules/bulma/css/bulma.min.css', './contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
	lname = 'None';
	displayCardForm = false;
	dataModel: any = {};
	cardRadio = false;
	cashRadio = false;
	tempval = '';

	constructor(private dataService: DataService, private router: Router) { }
	
	ngOnInit(): void {
	}

	onSubmit(myForm: NgForm) {
		this.tempval = myForm.value.firstname;
		this.dataService.firstname = myForm.value.firstname;
		this.dataService.lastname = myForm.value.lastname;
		this.dataService.email = myForm.value.email;
		this.dataService.mobile = myForm.value.mobile;
		this.dataService.date = myForm.value.date;
		this.dataService.time = myForm.value.time;
		this.dataService.cardNumber = myForm.value.cardnumber;
		this.dataService.cardExpiry = myForm.value.cardexpiry;
		this.dataService.cardCVV = myForm.value.cardcvv;
		if (this.cardRadio == true){
			this.dataService.isCard = true;
		}
		else{
			this.dataService.isCash = true;
		}
		this.router.navigate([`./checkout`]);
	}

	isCard(){
		this.displayCardForm = true;
		this.cardRadio = true;
		this.cashRadio = false;
	}
	
	isCash(){
		this.displayCardForm = false;
		this.cashRadio = true;
		this.cardRadio = false;
	}

}
