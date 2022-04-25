import { Component, ElementRef, ViewChild } from '@angular/core';
import { EjercicioService } from '../services/ejercicio.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import  snk from './../../_files/snk.json';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'YYYY-MM-DDThh:mm:ss',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class DatepickerComponent {
 constructor(private EjercicioService: EjercicioService){
   
 }

  consumirApi(fechaDesde: string, fechaHasta: string){

    this.EjercicioService.buscarApi(fechaDesde, fechaHasta);
  }

  



 

}
