export interface IUnidade {
	current_country_id: number,
	locations: ILocal[],
	wp_total: number,
	total: number,
	sucess: boolean,
}

export interface ILocal {
	id: number,
	title: string,
	content: string,
	opened: boolean,
	mask: string,
	towel: string,
	fountain: string,
	locker_room: string,
	schedules: IHorarios[],
}

interface IHorarios {
	weekdays: string,
	hour: string
}
