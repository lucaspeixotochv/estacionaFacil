import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  pagamentoForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private toastService: ToastService) {}

  ngOnInit(): void {
    this.pagamentoForm = this.fb.group({
      numeroCartao: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      dataExpiracao: [
        '',
        [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)],
      ],
    });
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
