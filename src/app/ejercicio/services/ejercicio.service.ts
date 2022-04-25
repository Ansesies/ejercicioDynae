import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from 'Globals';
import  snk from './../../_files/snk.json';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  snkList:{id:number, sensorElementId:any, magnitude:number, variation:number, timestamp:string}[]=snk;
  timestampList: string[] = [];
  dataList: number[] = [];
  temperaturaUser: number[] = [];
  resultados: any[] = [];

  constructor(private _http: HttpClient) { 
  }

  
  // con esta funcion consumi endpoint del servidor 
  buscarApi(FechaDesde: string, FechaHasta: string){

    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
    headers=headers.append('Access-Control-Allow-Origin', '*');
    headers=headers.append('content-type','application/x-www-form-urlencoded');

    console.log(headers);

    this._http.get(`http://data-env.eba-pwemrg4q.us-east-1.elasticbeanstalk.com/data/sensorElement/8/measurement?from=${FechaDesde}.000Z&to=${FechaHasta}.000Z&timeUnit=SEC`,
      {headers: headers})
        .subscribe(( resp:any ) =>{
          console.log(resp.data);
          this.resultados = resp.data;
        })

  }


  


    
}
