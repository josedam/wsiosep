import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AfiliadoService } from '../../services/afiliado.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-afiliado',
  templateUrl: './afiliado.component.html',
  styleUrls: ['./afiliado.component.scss']
})
export class AfiliadoComponent implements OnInit {
  campos: any = {
    ApeyNom: 'Apellido y Nombres',
    Cuil: 'CUIL',
    Edad: 'Edad',
    Estado: 'Estado',
    FechaEstado: 'Fecha Estado',
    FechaNacimiento: 'Fecha Nacimiento',
    Materno: 'Plan Materno',
    Numero: 'Numero Afiliado',
    Familiar: 'Familiar',
    Sexo: 'Sexo',
    TipoDoc: 'Tipo Documento',
    Documento: 'Nro.Documento',
    Voluntario: 'Voluntario'
  };

  constructor(public afiliadoService: AfiliadoService) { }

  ngOnInit() {
    this.hacerFoco();
  }

  hacerFoco() {
    document.getElementById('textoBusqueda').focus();
  }

  buscar(texto: string) {
    if (texto.indexOf('/') > (-1)) {
      let a = texto.split('/', 2);
      this.afiliadoService.getByAfiliado(parseInt(a[0], 10), Number.parseInt(a[1], 10));
    } else {
      this.afiliadoService.getByDnioCuit(parseInt(texto, 10));
    }
  }
}
