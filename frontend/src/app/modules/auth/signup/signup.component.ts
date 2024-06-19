import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      // Implemente aqui a lógica para enviar os dados do usuário para o serviço de cadastro
      console.log('Formulário válido:', this.usuarioForm.value);
      // Exemplo de reset do formulário após o envio
      this.usuarioForm.reset();
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}
