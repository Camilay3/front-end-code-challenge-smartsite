import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnidade } from '../interfaces/IUnidade';

@Injectable({
	providedIn: 'root'
})
export class UnidadesService {
	readonly url: string = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

	constructor(private readonly httpClient: HttpClient) {}

	getUnidades(): Observable<IUnidade> {
		return this.httpClient.get<IUnidade>(this.url);
	}
}
