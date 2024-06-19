import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  carros: any[] = [
    {
      modelo: 'Ferrari 488',
      imagem:
        'https://i0.statig.com.br/bancodeimagens/77/fc/za/77fczaumd22rjbqfgi4h98axz.jpg',
      descricao: 'Uma descrição da Ferrari 488.',
      preco: 'R$ 500.000',
    },
    {
      modelo: 'Lamborghini Huracan',
      imagem:
        'https://i0.statig.com.br/bancodeimagens/77/fc/za/77fczaumd22rjbqfgi4h98axz.jpg',
      descricao: 'Uma descrição da Lamborghini Huracan.',
      preco: 'R$ 600.000',
    },
    {
      modelo: 'Porsche 911',
      imagem:
        'https://i0.statig.com.br/bancodeimagens/77/fc/za/77fczaumd22rjbqfgi4h98axz.jpg',
      descricao: 'Uma descrição do Porsche 911.',
      preco: 'R$ 450.000',
    },
  ];
}
