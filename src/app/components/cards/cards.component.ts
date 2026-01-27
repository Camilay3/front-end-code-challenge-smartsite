import { Component, Input, OnInit } from '@angular/core';
import { ILocal } from '../../interfaces/IUnidade';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
	@Input() results: ILocal[] = [];
}
