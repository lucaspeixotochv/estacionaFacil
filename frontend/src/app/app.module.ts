import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardCarroComponent } from './components/card-carro/card-carro.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './modules/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './modules/layout/layout.component';
import { HomeComponent } from './modules/home/home.component';
import { CarDetailsComponent } from './modules/car-details/car-details.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { ToastService } from './shared/services/toast.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MyRentalsComponent } from './modules/my-rentals/my-rentals.component';
import { SignupComponent } from './modules/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCarroComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    CarDetailsComponent,
    PaymentComponent,
    MyRentalsComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
