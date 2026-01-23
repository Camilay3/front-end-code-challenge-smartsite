export interface ILegenda {
	titulo: string,
	conteudo: IObjetos[]
}

interface IObjetos {
	src: string,
	alt: string,
	descricao: string
}
