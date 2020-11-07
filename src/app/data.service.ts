import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	selectedServices=[];
	selectedCartype: String;
	orderTotal = 0;
	firstname = 'NA';
	lastname = 'NA';
	email = 'NA';
	mobile = 'NA';
	date = 'NA';
	time = 'NA';
	paymenttype = 'NA';
	isCash = false;
	isCard = false;
	cardNumber = 'NA';
	cardExpiry = 'NA';
	cardCVV = 'NA';
  constructor() { }
}
