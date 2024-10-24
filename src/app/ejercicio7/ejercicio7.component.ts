import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.css'
})
export class Ejercicio7Component {
  numero1:number=0;
  numero2:number=0;
  resultado:number|string=0;
  operaciones:string[]=["+","-","x",":"];
  operador:string='+';

  ngOnInit() {
    const select = document.getElementById("operador") as HTMLSelectElement;
    this.operaciones.forEach(o=>{
      const option = document.createElement('option');
      option.value = o;
      option.text= o;
      select.appendChild(option);
    })
    select.value=this.operador;
  }
  operar(){
    if (this.operador==='+'){
      this.resultado=this.numero1+this.numero2;
    } else if (this.operador==='-'){
        this.resultado=this.numero1-this.numero2;
    } else if (this.operador==='x'){
        this.resultado=this.numero1*this.numero2;
    } else if (this.operador===':'){
      if (this.numero2===0){
        this.resultado = 'No es posible dividir por cero';
      }else{
        this.resultado=this.numero1/this.numero2;
      }
    }
  }
}
