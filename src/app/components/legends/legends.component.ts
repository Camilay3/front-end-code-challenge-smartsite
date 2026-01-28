import { Component } from '@angular/core';
import { ILegenda, items } from '../../interfaces/ILegenda';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html'
})
export class LegendsComponent {
	items: ILegenda[] = items;
}
