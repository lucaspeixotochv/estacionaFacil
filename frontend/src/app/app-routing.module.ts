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
import { AuthGuard } from './shared/guard/auth.guard';
import { EditInformationsComponent } from './modules/auth/edit-informations/edit-informations.component';
import { CarsAdminComponent } from './modules/cars-admin/cars-admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'edit-informations', component: EditInformationsComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'car-detail', component: CarDetailsComponent },
      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-rentals',
        component: MyRentalsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cars-admin',
        component: CarsAdminComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
