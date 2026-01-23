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

					console.log(this.resultados.length)

					this.cdr.detectChanges();
				},
				error: (err) => console.error(err),
			})

		this.formGroup = this.formBuilder.group({
			turno: '',
			unidadesFechadas: false
		})
	}

	onSubmit() {
		this.resultadosFiltrados = (this.formGroup.value.unidadesFechadas) ? this.resultados : this.resultados.filter(local => local.opened);
	}

	onClean() {
		this.resultadosFiltrados = this.resultados.filter(local => local.opened);
		this.formGroup.reset();
	}
}
