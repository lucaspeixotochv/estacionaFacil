import { Car } from './car.interface';

export interface Rent {
  id: string;
  user_id: string;
  car: Car;
  startDate: Date;
  endDate: Date;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
