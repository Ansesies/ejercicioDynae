import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { timestamp } from 'rxjs';
import { EjercicioModule } from '../ejercicio.module';
import { EjercicioService } from '../services/ejercicio.service';
import  snk from './../../_files/snk.json';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styles: [
  ]
})
export class GraficoComponent  {

    // creando listado a partir del json simulando endpoint
  constructor( private _service : EjercicioService ) {

    for (let index = 0; index < this.snkList.length; index++) {
      const element = this.snkList[index].timestamp;

      this._timestampList.push(element);
      
    }

    for (let index = 0; index < this.snkList.length; index++) {
      const element = this.snkList[index].magnitude;
      this._dataList.push(element);
      
    }

  }

    // este es el json
  snkList:{id:number, sensorElementId:any, magnitude:number, variation:number, timestamp:string}[]=snk;

  // variables privadas para grafico
  _timestampList: string[] = [];
  _dataList: number[] = [];
  _temperaturaUser: number[] = [];


    // configuracion base del grafico de ng2-charts
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      
      {
        data: this._dataList,
        label: '°C',
        //yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this._temperaturaUser,
        label: 'Temperatura maxima',
        //yAxisID: 'y-axis-1',
       // backgroundColor: 'rgba(0, 255, 13, 0.24)',
        borderColor: 'green',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: 'rgba(0, 255, 13, 0.24)',
        //pointHoverBackgroundColor: '#fff',
       // pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: this._timestampList,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    
    

    
  };
  // funciones por defecto del grafico de ng2-charts
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  

  // events por defectos del grafico
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = [ '1st Line', '2nd Line' ];
    }

    this.chart?.update();
  }



  

  
// funcion para establecer tempreatura del usuario
 
   buscar(temperatura: string){
    
    if(this._temperaturaUser.length > 1){
      this._temperaturaUser.length = 0;
    }

    const valor = temperatura;

    console.log(valor);
    for (let index = 0; index < this.snkList.length; index++) {
      const element = Number(valor);

      this._temperaturaUser.push(element);

    }

    this.chart?.update();
 
   }
 

}
