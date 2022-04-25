import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { GraficoComponent } from './grafico/grafico.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    DatepickerComponent,
    GraficoComponent,
    
  ],
  exports:[
    DatepickerComponent,
    GraficoComponent,
    

  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule
  ]
})
export class EjercicioModule { }
