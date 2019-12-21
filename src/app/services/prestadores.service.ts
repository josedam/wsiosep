import { Injectable } from '@angular/core';
import { Prestador } from '../models/prestador.model';
import { HttpClient } from '@angular/common/http';
import { URL_IOSEP } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PrestadoresService {
  prestadores: Prestador[] = [];
  letra = 'C';
  opciones = [
    { titulo: 'Clinicas'    , letra: 'C' },
    { titulo: 'Medicos'     , letra: 'M' },
    { titulo: 'Odontologos' , letra: 'O' },
    { titulo: 'Radiologos'  , letra: 'R' },
    { titulo: 'Psiquiatras' , letra: 'P' }
  ];

  constructor(private http: HttpClient) {}

  getPrestadores(letra: string) {
    
    if (letra) {
      this.letra = letra;
    }
    this.http
      .get(`${URL_IOSEP}/Prestadores?letra=${this.letra}`)
      .subscribe((data: Prestador[]) => {
        this.prestadores = data.map((pres: Prestador) => ({
          ...pres,
          Nombre: pres.Nombre.toUpperCase()
        }));
      });
    return;
  }
}
