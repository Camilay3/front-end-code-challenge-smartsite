import { Component, Input, OnInit } from '@angular/core';
import { ILocal } from '../../interfaces/IUnidade';
import { items } from '../../interfaces/ILegenda';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	@Input() results: ILocal[] = [];
	legendMap: any = {};

	ngOnInit() {
		for (const item of items) {
			this.legendMap[item.name] = {};
			for (const c of item.conteudo) this.legendMap[item.name][c.id] = c;
		}
	}

	getLegend(type: string, status: string) {
		return this.legendMap[type]?.[status];
	}
}
