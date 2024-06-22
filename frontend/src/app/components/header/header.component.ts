import { Component, Input, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/enum/userRole';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userRole: string = this.authService.getUserRole();
  userId: string = this.authService.getUserId();

  menu = [{ name: 'Início', route: '/' }];

  constructor(public authService: AuthService) {}

  ngOnInit() {
    if (this.userRole === UserRole.Employee) {
      this.menu.push({ name: 'Administrar Veículos', route: '/cars-admin' });
    } else if (this.userRole === UserRole.Client) {
      this.menu.push({ name: 'Meus Alugueis', route: '/my-rentals' });
    }
  }
}
