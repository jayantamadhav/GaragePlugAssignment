import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CartypeComponent } from './cartype/cartype.component';
import { PricecalcComponent } from './pricecalc/pricecalc.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ServicenoComponent } from './serviceno/serviceno.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'cartype', component: CartypeComponent },
  { path: 'pricecalc', component: PricecalcComponent },
  { path: 'contact-details', component: ContactdetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'serviceno', component: ServicenoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    CartypeComponent,
    PricecalcComponent,
    ContactdetailsComponent,
    CheckoutComponent,
    ServicenoComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true })   // <-- for debugging only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
