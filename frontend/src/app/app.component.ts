import { Component } from '@angular/core';
import { ICar } from './components/card-carro/@types/car.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  listaCarros: ICar[] = [
    {
      id: 1,
      marca: 'Chevrolet',
      modelo: 'Onix',
      ano: 2021,
      cor: 'Preto',
      preco: 60000,
      imagem:
        'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/mov/04-images/onix-premier-at-turbo.jpg?imwidth=960',
    },
    {
      id: 2,
      marca: 'Chevrolet',
      modelo: 'Tracker',
      ano: 2021,
      cor: 'Branco',
      preco: 90000,
      imagem:
        'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/mov/04-images/onix-premier-at-turbo.jpg?imwidth=960',
    },
    {
      id: 3,
      marca: 'Chevrolet',
      modelo: 'Cruze',
      ano: 2021,
      cor: 'Prata',
      preco: 120000,
      imagem:
        'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/mov/04-images/onix-premier-at-turbo.jpg?imwidth=960',
    },
  ];
}
