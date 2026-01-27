import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FormComponent } from './components/form/form.component';
import { LegendsComponent } from './components/legends/legends.component';
import { CardsComponent } from './components/cards/cards.component';
import { ILocal } from './interfaces/IUnidade';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, LegendsComponent, CardsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
	protected readonly title = signal('desafio-smartfit');
	outputResultados: ILocal[] = [];
}
