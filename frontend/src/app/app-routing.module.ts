import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CarDetailsComponent } from './modules/car-details/car-details.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { MyRentalsComponent } from './modules/my-rentals/my-rentals.component';
import { SignupComponent } from './modules/auth/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'car-detail', component: CarDetailsComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'my-rentals', component: MyRentalsComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
