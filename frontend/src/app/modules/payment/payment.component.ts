import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/shared/@types/car.interface';
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

  constructor(private fb: FormBuilder, private toastService: ToastService) {
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

  pagar(): void {
    // this.toastService.showError('Pagamento efetuado com sucesso!');
    this.toastService.showSuccess('Pagamento efetuado com sucesso!');
    if (this.pagamentoForm.valid) {
      // Implemente aqui a lógica para processar o pagamento
      const pagamentoInfo = this.pagamentoForm.value;
      console.log('Pagamento efetuado:', pagamentoInfo);

      // Aqui você pode adicionar a lógica para redirecionar o usuário ou exibir uma mensagem de confirmação
    } else {
      // Caso o formulário não seja válido, você pode tratar os campos inválidos, se necessário
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}
