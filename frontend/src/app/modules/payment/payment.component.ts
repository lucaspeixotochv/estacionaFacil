import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/@types/car.interface';
import { ReservationService } from 'src/app/shared/services/reservation.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  pagamentoForm: FormGroup = this.fb.group({
    numeroCartao: ['', [Validators.required]],
    cvv: ['', [Validators.required]],
    dataExpiracao: ['', [Validators.required]],
  });

  car: Car = {} as Car;
  informations: any = {};

  showCardFlag = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private reservationService: ReservationService,
    private router: Router
  ) {
    this.pagamentoForm.controls['numeroCartao'].valueChanges.subscribe(
      (value) => {
        if (value.length > 4) {
          this.showCardFlag = true;
        } else {
          this.showCardFlag = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.car = history.state.car;
    this.informations = history.state.informations;

    const differenceInDays = this.differenceInDays();

    this.car.price = this.car.price * differenceInDays;
  }

  differenceInDays(): number {
    const startDate = new Date(this.informations.startDate);
    const returnDate = new Date(this.informations.returnDate);
    const differenceInTime = returnDate.getTime() - startDate.getTime();
    return differenceInTime / (1000 * 3600 * 24);
  }

  async pay() {
    try {
      const body = {
        cardNumber: this.pagamentoForm.value.numeroCartao,
        cvv: this.pagamentoForm.value.cvv,
        expiryDate: this.pagamentoForm.value.dataExpiracao,
        car_id: this.car.id,
        startDate: this.informations.startDate,
        endDate: this.informations.returnDate,
        price: this.car.price,
      };

      const response = await this.reservationService.createReservation(body);

      if (!response.success) {
        this.toastService.showError(response.message);
        return;
      }

      this.toastService.showSuccess('Pagamento efetuado com sucesso');

      this.router.navigate(['/my-rentals']);
    } catch (error) {
      this.toastService.showError('Erro ao efetuar pagamento');
      console.log(error);
    }
  }
}
