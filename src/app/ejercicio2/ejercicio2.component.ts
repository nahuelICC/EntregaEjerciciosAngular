import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  horaActual: Date =new Date();
  intervalo:any;


  constructor() {
    this.intervalo = setInterval(() => {
      this.horaActual = this.hora();
    }, 1000);
  }
  hora(){
    return new Date(Date.now());
  }
  paraHora(){
    if(this.intervalo){
      clearInterval(this.intervalo);
    }
  }
}
