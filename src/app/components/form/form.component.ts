import { UnidadesService } from './../../services/unidades.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IHorario } from '../../interfaces/IHorario';
import { ILocal } from '../../interfaces/IUnidade';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [ ReactiveFormsModule ],
//   styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	formGroup!: FormGroup;
	resultados: ILocal[] = [];
	resultadosFiltrados: ILocal[] | undefined;
	data: Date = new Date();
	inputs: IHorario[] = [
		{ id: 'manha', label: 'Manhã', horaInicial: '06:00', horaFinal: '12:00' },
		{ id: 'tarde', label: 'Tarde', horaInicial: '12:01', horaFinal: '18:00' },
		{ id: 'noite', label: 'Noite', horaInicial: '18:01', horaFinal: '23:00' },
	]

	constructor (
		private readonly formBuilder: FormBuilder,
		private readonly unidadesService: UnidadesService,
		private readonly cdr: ChangeDetectorRef,
	) {}

	ngOnInit() {
		this.unidadesService.getUnidades()
			.subscribe({
				next: (value) => {
					this.resultados = value.locations;
					this.resultadosFiltrados = this.resultados.filter(local => local.opened);
					this.aplicarFiltroPorDia();
					this.cdr.detectChanges();
				},
				error: (err) => console.error(err),
			})

		this.formGroup = this.formBuilder.group({
			turno: null,
			unidadesFechadas: false
		})
	}

	daysOfWeek: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
	/* Unidades 17 e 122 tem weekdays alterados
		{ weekdays: "Obs.:", hour: "Obrigatório o uso de luvas descartáveis." }
		{ weekdays: "Obs.:", hour: "*Unidade fechará de 1h em 1h para limpeza." }
	*/

	private horaParaMinutos(hora: string): number {
		const [h, m] = hora.replace('h', ':').split(':');
		return Number(h) * 60 + Number(m || 0);
	}

	private horarioBateComTurno(hour: string, turno: any): boolean {
		if (hour === 'Fechada') return false;

		const [inicioRaw, fimRaw] = hour.split(/ à | às /);
		if (!inicioRaw || !fimRaw) return false;

		const inicio = this.horaParaMinutos(inicioRaw);
		const fim = this.horaParaMinutos(fimRaw);

		const turnoInicio = this.horaParaMinutos(turno.horaInicial.replace(':', 'h'));
		const turnoFim = this.horaParaMinutos(turno.horaFinal.replace(':', 'h'));

		return inicio < turnoFim && fim > turnoInicio;
	}

	aplicarFiltroPorDia() {
		const indexToday = this.data.getDay();
		const today = this.daysOfWeek[indexToday];
		const turnoSelecionado = this.inputs.find(i => i.id === this.formGroup.value.turno);

		this.resultadosFiltrados = this.resultadosFiltrados?.filter(local => {
			if(!local.opened) return true;
			return local.schedules?.some(s => {
				if (s.hour === 'Fechada') return false;

				const [inicio, fim] = s.weekdays.split(/ à | às /);
				const indexInicio = this.daysOfWeek.indexOf(inicio.slice(0, 3));
				const indexFim = this.daysOfWeek.indexOf(fim?.slice(0, 3));

				let diaOk = (fim)
					? indexToday >= indexInicio && indexToday <= indexFim
					: today === this.daysOfWeek[indexInicio]

				if (!diaOk) return false;
				if (!turnoSelecionado) return true;
				return this.horarioBateComTurno(s.hour, turnoSelecionado);
			});
		});
	}

	onSubmit() {
		this.resultadosFiltrados = (this.formGroup.value.unidadesFechadas) ? this.resultados : this.resultados.filter(local => local.opened);
		this.aplicarFiltroPorDia();
	}

	onClean() {
		this.resultadosFiltrados = this.resultados.filter(local => local.opened);
		this.formGroup.reset();
	}
}
