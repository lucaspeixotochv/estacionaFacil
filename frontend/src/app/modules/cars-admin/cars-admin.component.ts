import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarCreateModalComponent } from 'src/app/components/car-create-modal/car-create-modal.component';
import { Car } from 'src/app/shared/@types/car.interface';
import { CarService } from 'src/app/shared/services/car.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-cars-admin',
  templateUrl: './cars-admin.component.html',
  styleUrls: ['./cars-admin.component.scss'],
})
export class CarsAdminComponent {
  cars: Car[] = [];

  constructor(
    private carService: CarService,
    private toastService: ToastService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    await this.featchCars();
  }

  async featchCars(): Promise<void> {
    try {
      const response = await this.carService.getCars();
      if (!response.success) {
        this.toastService.showError(response.message);
        return;
      }

      this.cars = response.data;
    } catch (error) {
      this.toastService.showError('Erro ao carregar os carros');
      console.log(error);
    }
  }

  async deletedCar(event: any) {
    if (event) {
      await this.featchCars();
    }
  }

  async editedCar(event: any) {
    if (event) {
      await this.featchCars();
    }
  }

  async openCreateCarModal() {
    const dialogRef = this.dialog.open(CarCreateModalComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.featchCars();
      }
    });
  }
}
