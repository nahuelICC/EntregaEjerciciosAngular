import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  numero: number = 0;
  intervalo:any;


  empieza() {
    const p = document.getElementById("contador") as HTMLElement;
    p.style.display = "block";
    this.intervalo = setInterval(() => {
      if (this.numero !== 0) {
        this.numero--;
      }else{
        p.style.display = "none";
        this.paraHora();
      };
    }, 1000);


  }
  enviar(){
    const num = document.getElementById("numero") as HTMLInputElement;
    this.numero = parseInt(num.value);
    this.empieza();
  }
  paraHora(){
    if(this.intervalo){
      clearInterval(this.intervalo);
    }
  }
}
