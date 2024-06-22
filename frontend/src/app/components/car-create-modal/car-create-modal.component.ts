import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CarService } from 'src/app/shared/services/car.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-car-create-modal',
  templateUrl: './car-create-modal.component.html',
  styleUrls: ['./car-create-modal.component.scss'],
})
export class CarCreateModalComponent {
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CarCreateModalComponent>,
    private carService: CarService,
    private toastService: ToastService
  ) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      year: ['', Validators.required],
      name: ['', Validators.required],
      color: ['', Validators.required],
      license_plate: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  async onSubmit() {
    try {
      if (this.carForm.valid) {
        const response = await this.carService.createCar(this.carForm.value);

        if (!response.success) {
          this.toastService.showError(response.message);
          return;
        }

        this.toastService.showSuccess('Carro cadastrado com sucesso');

        this.dialogRef.close(true);
      }
    } catch (error) {}
  }

  onCancel() {
    this.dialogRef.close();
  }
}
