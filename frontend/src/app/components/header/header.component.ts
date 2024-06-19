import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu = [
    { name: 'Início', route: '/' },
    { name: 'Meus Alugueis', route: '/my-rentals' },
  ];
}
