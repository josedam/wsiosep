import { Component, OnInit, ViewChild } from '@angular/core';
import { PrestadoresService } from '../../services/prestadores.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styles: []
})
export class PrestadoresComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  columnDefs = [
    {
      headerName: 'CIU',
      field: 'CIU',
      sortable: true,
      filter: true,
      width: 100
    },
    {
      headerName: 'Nombre',
      field: 'Nombre',
      sortable: true,
      filter: true,
      width: 400
    }
  ];

  // rowData: any;
  constructor(public prestadoresService: PrestadoresService) {}

  ngOnInit() {
    this.getPrestadores('C');
  }

  getPrestadores(letra: string) {
    this.prestadoresService.getPrestadores(letra);
  }
}
