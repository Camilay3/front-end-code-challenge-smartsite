import { Component } from '@angular/core';

interface IObjetos {
	src: string,
	alt: string,
	descricao: string
}

interface ILegenda {
	titulo: string,
	conteudo: IObjetos[]
}

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html'
})
export class LegendsComponent {
	items: ILegenda[] = [
		{
			titulo: 'Máscara',
			conteudo: [
				{ src: 'required-mask.png', alt: 'required mask', descricao: 'Obrigatório' },
				{ src: 'recommended-mask.png', alt: 'recommended mask', descricao: 'Recomendado' },
			]
		},
		{
			titulo: 'Toalha',
			conteudo: [
				{ src: 'required-towel.png', alt: 'required towel', descricao: 'Obrigatório' },
				{ src: 'recommended-towel.png', alt: 'recommended towel', descricao: 'Recomendado' },
			]
		},
		{
			titulo: 'Bebedouro',
			conteudo: [
				{ src: 'partial-fountain.png', alt: 'partial fountain', descricao: 'Parcial' },
				{ src: 'forbidden-fountain.png', alt: 'forbidden fountain', descricao: 'Proibido' },
			]
		},
		{
			titulo: 'Vestiários',
			conteudo: [
				{ src: 'required-lockerroom.png', alt: 'partial lockerroom', descricao: 'Liberado' },
				{ src: 'partial-lockerroom.png', alt: 'partial lockerroom', descricao: 'Parcial' },
				{ src: 'forbidden-lockerroom.png', alt: 'forbidden lockerroom', descricao: 'Fechado' },
			]
		},
	];
}
