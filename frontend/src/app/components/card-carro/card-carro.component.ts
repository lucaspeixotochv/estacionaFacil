import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/@types/car.interface';
import { CarService } from 'src/app/shared/services/car.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-card-carro',
  templateUrl: './card-carro.component.html',
  styleUrls: ['./card-carro.component.scss'],
})
export class CardCarroComponent {
  @Input() car: Car = {} as Car;
  @Input() seeDetailsBtn: boolean = true;

  @Output() deletedCar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private carService: CarService,
    private toastService: ToastService
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
    // this.router.navigate(['/edit-car'], {
    //   state: { car: this.car },
    // });
    console.log('Editando carro');
  }
}
