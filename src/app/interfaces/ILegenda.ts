export const items: ILegenda[] = [
	{
		titulo: 'Máscara',
		name: 'mask',
		conteudo: [
			{ src: 'required-mask.png', id: 'required', alt: 'required mask', descricao: 'Obrigatório' },
			{ src: 'recommended-mask.png', id: 'recommended', alt: 'recommended mask', descricao: 'Recomendado' },
		]
	},
	{
		titulo: 'Toalha',
		name: 'towel',
		conteudo: [
			{ src: 'required-towel.png', id: 'required', alt: 'required towel', descricao: 'Obrigatório' },
			{ src: 'recommended-towel.png', id: 'recommended', alt: 'recommended towel', descricao: 'Recomendado' },
		]
	},
	{
		titulo: 'Bebedouro',
		name: 'fountain',
		conteudo: [
			{ src: 'partial-fountain.png', id:'partial', alt: 'partial fountain', descricao: 'Parcial' },
			{ src: 'forbidden-fountain.png', id: 'not_allowed', alt: 'forbidden fountain', descricao: 'Proibido' },
		]
	},
	{
		titulo: 'Vestiários',
		name: 'locker_room',
		conteudo: [
			{ src: 'required-lockerroom.png', id: 'allowed', alt: 'partial lockerroom', descricao: 'Liberado' },
			{ src: 'partial-lockerroom.png', id:'partial', alt: 'partial lockerroom', descricao: 'Parcial' },
			{ src: 'forbidden-lockerroom.png', id: 'closed', alt: 'forbidden lockerroom', descricao: 'Fechado' },
		]
	},
];

export interface ILegenda {
	titulo: string,
	name: string,
	conteudo: IObjetos[]
}

interface IObjetos {
	src: string,
	id: string,
	alt: string,
	descricao: string
}
