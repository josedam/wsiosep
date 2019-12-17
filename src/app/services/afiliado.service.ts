import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afiliado } from '../models/afiliado.model';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  afiliado: Afiliado =  {
    ApeyNom: '',
    Cuil: '',
    Edad: 0,
    Estado: -1,
    Familiar: '',
    FechaEstado: '',
    FechaNacimiento: '',
    Materno: false,
    Numero: '',
    Sexo: '',
    TipoDoc: '',
    Documento: '',
    Voluntario: false,
    OrdenVM: null,
  }
  ;
  exist = false;

  constructor( private http: HttpClient) { }

  getByAfiliado(nafil: number, gpar: number) {
    const urlBase = 'http://app.iosep.gov.ar/WsRest/api';

    this.http
      .get(`${urlBase}/Afiliados?NroAfiliado=${nafil}&Familiar=${String(gpar).padStart(2,'0')}`)
      .subscribe((afil: any) => this.setAfiliado(afil))
    ;
    return this.exist;
  }

  getByDnioCuit(DnioCuil: number) {
    const urlBase = 'http://app.iosep.gov.ar/WsRest/api';

    this.http
      .get(`${urlBase}/Afiliados?DnioCuil=${DnioCuil}`)
      .subscribe((afil: any) => this.setAfiliado(afil))
    ;
    return this.exist;
  }

  setAfiliado(afil: Afiliado) {
    this.afiliado = afil;
    this.exist = (afil.Estado > 0);
  }

}
