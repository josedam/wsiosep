import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from '../../services/afiliado.service';
import { Afiliado } from '../../models/afiliado.model';

@Component({
  selector: 'app-afiliado',
  templateUrl: './afiliado.component.html',
  styleUrls: ['./afiliado.component.scss']
})
export class AfiliadoComponent implements OnInit {
  
  afiliado: Afiliado = new Afiliado();
  exist = false;

  constructor(private afiliadoService: AfiliadoService) { }

  ngOnInit() {
    this.hacerFoco();
  }

  hacerFoco() {
    document.getElementById('textoBusqueda').focus();
  }

  buscar(texto: string) {
    if (texto.indexOf('/') > (-1)) {
      let a = texto.split('/', 2);
      this.afiliadoService.getByAfiliado(parseInt(a[0], 10), Number.parseInt(a[1], 10))
       .subscribe((afiliado:Afiliado) => {
        this.setAfiliado(afiliado);
       });
    } else {
      this.afiliadoService.getByDnioCuit(parseInt(texto, 10))
       .subscribe((afiliado:Afiliado) => {
         this.setAfiliado(afiliado);
       });
    }
  }

  setAfiliado(afiliado:Afiliado) {
    this.afiliado = afiliado;
    this.exist = this.afiliado.Estado > 0;
  }

}
