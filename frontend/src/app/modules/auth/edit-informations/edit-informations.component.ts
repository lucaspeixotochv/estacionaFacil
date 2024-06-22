import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-edit-informations',
  templateUrl: './edit-informations.component.html',
  styleUrls: ['./edit-informations.component.scss'],
})
export class EditInformationsComponent implements OnInit {
  usuarioForm: FormGroup;

  userId: string = this.authService.getUserId();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuarioForm = this.fb.group(
      {
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: [''],
        confirmarSenha: [''],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  async loadUserInfo() {
    try {
      const response = await this.authService.getUser();

      if (!response.success) {
        this.toastService.showError(response.message);
        return;
      }

      this.usuarioForm.patchValue({
        nome: response.data.name,
        email: response.data.email,
      });
    } catch (error) {
      this.toastService.showError('Erro ao carregar informações do usuário');
      console.log(error);
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const senha = form.get('senha');
    const confirmarSenha = form.get('confirmarSenha');
    if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
      confirmarSenha.setErrors({ senhaDiferente: true });
    } else {
      confirmarSenha?.setErrors(null);
    }
  }

  async onSubmit() {
    if (this.usuarioForm.invalid) {
      this.toastService.showError('Formulário inválido');
      return;
    }

    try {
      const body = {
        email: this.usuarioForm.value.email,
        name: this.usuarioForm.value.nome,
        password: this.usuarioForm.value.senha || undefined,
      };

      const response = await this.authService.updateUser(body);

      if (!response.success) {
        this.toastService.showError(response.message);
        return;
      }

      this.toastService.showSuccess('Informações atualizadas com sucesso');
      this.router.navigate(['/']);
    } catch (error) {
      this.toastService.showError('Erro ao atualizar informações');
      console.log(error);
    }
  }
}
