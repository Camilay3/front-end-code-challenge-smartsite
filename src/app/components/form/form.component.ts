import { Component } from '@angular/core';

interface IHorario {
	id: string,
	label: string,
	horaInicial: string,
	horaFinal: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

	inputs: IHorario[] = [
		{ id: 'manha', label: 'Manhã', horaInicial: '06:00', horaFinal: '12:00' },
		{ id: 'tarde', label: 'Tarde', horaInicial: '12:01', horaFinal: '18:00' },
		{ id: 'noite', label: 'Noite', horaInicial: '18:01', horaFinal: '23:00' },
	]

}
