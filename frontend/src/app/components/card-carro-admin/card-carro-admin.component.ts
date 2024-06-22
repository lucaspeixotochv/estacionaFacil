import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/@types/car.interface';
import { CarService } from 'src/app/shared/services/car.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CarEditModalComponent } from '../car-edit-modal/car-edit-modal.component';

@Component({
  selector: 'app-card-carro-admin',
  templateUrl: './card-carro-admin.component.html',
  styleUrls: ['./card-carro-admin.component.scss'],
})
export class CardCarroAdminComponent {
  @Input() car: Car = {} as Car;

  @Output() deletedCar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editedCar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private carService: CarService,
    private toastService: ToastService,
    private dialog: MatDialog
  ) {}

  goToPage(page: string) {
    this.router.navigate([page], {
      state: { car: this.car },
    });
  }

  async deleteCar() {
    try {
      const response = await this.carService.deleleCar(this.car.id);
      if (!response.success) {
        this.toastService.showError(response.message);
        return;
      }

      this.toastService.showSuccess('Carro deletado com sucesso');

      this.deletedCar.emit(true);
    } catch (error) {
      this.toastService.showError('Erro ao deletar carro');
      console.log(error);
    }
  }

  async editCar() {
    const dialogRef = this.dialog.open(CarEditModalComponent, {
      width: '800px',
      data: this.car,
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        this.editedCar.emit(true);
      }
    });
  }
}
