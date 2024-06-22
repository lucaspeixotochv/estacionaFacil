import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarService } from 'src/app/shared/services/car.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-car-edit-modal',
  templateUrl: './car-edit-modal.component.html',
  styleUrls: ['./car-edit-modal.component.scss'],
})
export class CarEditModalComponent {
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CarEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carService: CarService,
    private toastService: ToastService
  ) {
    this.carForm = this.fb.group({
      brand: [data.brand, Validators.required],
      year: [data.year, Validators.required],
      name: [data.name, Validators.required],
      color: [data.color, Validators.required],
      license_plate: [data.license_plate, Validators.required],
      price: [data.price, [Validators.required, Validators.min(0)]],
      image: [data.image, Validators.required],
      description: [data.description, Validators.required],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    try {
      if (this.carForm.valid) {
        const response = await this.carService.updateCar(
          this.data.id,
          this.carForm.value
        );

        if (!response.success) {
          this.toastService.showError(response.message);
          return;
        }

        this.toastService.showSuccess('Carro editado com sucesso');

        this.dialogRef.close(true);
      }
    } catch (error) {}
  }

  onCancel() {
    this.dialogRef.close();
  }
}
