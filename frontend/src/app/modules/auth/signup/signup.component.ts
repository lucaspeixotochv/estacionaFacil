import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/shared/enum/userRole';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (
      this.usuarioForm.value.senha !== this.usuarioForm.value.confirmarSenha
    ) {
      this.toastService.showError('As senhas não coincidem');
      return;
    }

    try {
      const body = {
        email: this.usuarioForm.value.email,
        name: this.usuarioForm.value.nome,
        password: this.usuarioForm.value.senha,
        role_id: UserRole.Client,
      };

      const response = await this.authService.register(body);

      if (!response.success) {
        this.toastService.showError(response.message);
        return;
      }

      this.toastService.showSuccess('Cadastro efetuado com sucesso');

      this.router.navigate(['/login']);
    } catch (error) {
      this.toastService.showError('Erro ao fazer cadastro');
      console.log(error);
    }
  }
}
