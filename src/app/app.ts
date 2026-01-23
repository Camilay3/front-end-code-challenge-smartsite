import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FormComponent } from './components/form/form.component';
import { LegendsComponent } from './components/legends/legends.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, LegendsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('desafio-smartfit');
}
