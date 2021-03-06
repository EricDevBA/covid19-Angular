import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pais } from './../models/pais.models';
import { Mundo } from './../models/mundo.models';


@Injectable({
  providedIn: 'root'
})
export class CovidapiService {

  url = 'https://corona.lmao.ninja/v2'; // endpoint //


  constructor(private http: HttpClient) { }

  async getInfoMundo() {
    return await this.http.get<Mundo>(`${this.url}/all`)
    .toPromise()
    .then(mundo => mundo);
  }

  getInfoPais(pais: string = 'brazil') {
    return this.http.get<Pais>(`${this.url}/countries/${pais}`)
    .toPromise()
    // tslint:disable-next-line: no-shadowed-variable
    .then(pais => pais);
}


}
