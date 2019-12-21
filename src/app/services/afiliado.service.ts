import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afiliado } from '../models/afiliado.model';
import { URL_IOSEP } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  afiliado: Afiliado = new Afiliado(); 
  
  constructor( private http: HttpClient) { }

  getByAfiliado(nafil: number, gpar: number) {
    return this.http
      .get(`${URL_IOSEP}/Afiliados?NroAfiliado=${nafil}&Familiar=${String(gpar).padStart(2,'0')}`)
    ;
  }

  getByDnioCuit(DnioCuil: number) {
    return this.http
      .get(`${URL_IOSEP}/Afiliados?DnioCuil=${DnioCuil}`)
    ;
  }

 

}
