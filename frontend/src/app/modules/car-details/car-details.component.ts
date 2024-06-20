import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/@types/car.interface';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  car: Car = {} as Car;

  form: FormGroup = this.fb.group({
    startDate: ['', Validators.required],
    returnDate: ['', Validators.required],
  });

  minDate = new Date();

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.car = history.state.car;
  }

  alugarCarro(): void {
    this.router.navigate(['/payment'], {
      state: { car: this.car, informations: this.form.value },
    });
  }
}
