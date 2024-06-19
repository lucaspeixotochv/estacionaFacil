import { Component } from '@angular/core';
import { Car } from 'src/app/shared/@types/car.interface';
import { Rent } from 'src/app/shared/@types/rent.interface';

@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.scss'],
})
export class MyRentalsComponent {
  car1: Car = {
    id: '1',
    brand: 'Toyota',
    year: '2022',
    name: 'Corolla',
    color: 'Silver',
    description: 'Spacious sedan with excellent fuel efficiency.',
    license_plate: 'ABC123',
    price: 50,
    image: 'corolla.jpg',
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-06-01'),
  };

  car2: Car = {
    id: '2',
    brand: 'Honda',
    year: '2023',
    name: 'Civic',
    color: 'Red',
    description: 'Sporty compact car with modern features.',
    license_plate: 'DEF456',
    price: 60,
    image: 'civic.jpg',
    createdAt: new Date('2022-02-15'),
    updatedAt: new Date('2022-07-10'),
  };

  car3: Car = {
    id: '3',
    brand: 'Ford',
    year: '2021',
    name: 'Fusion',
    color: 'Black',
    description: 'Comfortable mid-size sedan with advanced safety features.',
    license_plate: 'GHI789',
    price: 55,
    image: 'fusion.jpg',
    createdAt: new Date('2021-12-10'),
    updatedAt: new Date('2022-05-20'),
  };

  rentals: Rent[] = [
    {
      id: '1',
      user_id: 'user123',
      car: this.car1,
      startDate: new Date('2024-07-01'),
      endDate: new Date('2024-07-05'),
      price: 250,
      createdAt: new Date('2024-06-10'),
      updatedAt: new Date('2024-06-15'),
    },
    {
      id: '2',
      user_id: 'user456',
      car: this.car2,
      startDate: new Date('2024-07-03'),
      endDate: new Date('2024-07-08'),
      price: 300,
      createdAt: new Date('2024-06-12'),
      updatedAt: new Date('2024-06-17'),
    },
    {
      id: '3',
      user_id: 'user789',
      car: this.car3,
      startDate: new Date('2024-07-05'),
      endDate: new Date('2024-07-10'),
      price: 275,
      createdAt: new Date('2024-06-14'),
      updatedAt: new Date('2024-06-19'),
    },
  ];
}
