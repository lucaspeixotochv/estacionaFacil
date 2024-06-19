import { Component } from '@angular/core';
import { Car } from 'src/app/shared/@types/car.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cars: Car[] = [
    {
      id: '123e4567-e89b-12d3-a456-426614174001',
      brand: 'Toyota',
      year: '2021',
      name: 'Camry',
      color: 'White',
      description:
        'A reliable and fuel-efficient midsize sedan with a comfortable interior.',
      license_plate: 'XYZ-9876',
      price: 25000.0,
      image: 'https://tm.ibxk.com.br/2016/10/27/27160539773875.jpg?ims=750x',
      createdAt: new Date('2021-01-01T00:00:00Z'),
      updatedAt: new Date('2021-01-01T00:00:00Z'),
    },
    {
      id: '223e4567-e89b-12d3-a456-426614174002',
      brand: 'Honda',
      year: '2019',
      name: 'Civic',
      color: 'Black',
      description: 'A compact car known for its performance and efficiency.',
      license_plate: 'ABC-1234',
      price: 18000.0,
      image: 'https://tm.ibxk.com.br/2016/10/27/27160539773875.jpg?ims=750x',
      createdAt: new Date('2019-03-15T00:00:00Z'),
      updatedAt: new Date('2019-03-15T00:00:00Z'),
    },
    {
      id: '323e4567-e89b-12d3-a456-426614174003',
      brand: 'Tesla',
      year: '2022',
      name: 'Model 3',
      color: 'Red',
      description:
        'A modern electric vehicle with advanced technology and impressive range.',
      license_plate: 'TESLA-3',
      price: 45000.0,
      image: 'https://tm.ibxk.com.br/2016/10/27/27160539773875.jpg?ims=750x',
      createdAt: new Date('2022-05-20T00:00:00Z'),
      updatedAt: new Date('2022-05-20T00:00:00Z'),
    },
  ];
}
