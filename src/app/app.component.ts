import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Ejercicio1Component} from './ejercicio1/ejercicio1.component';
import {FormsModule} from '@angular/forms';
import {Ejercicio2Component} from './ejercicio2/ejercicio2.component';
import {Ejercicio3Component} from './ejercicio3/ejercicio3.component';
import {Ejercicio4Component} from './ejercicio4/ejercicio4.component';
import {Ejercicio5Component} from './ejercicio5/ejercicio5.component';
import {Ejercicio6Component} from './ejercicio6/ejercicio6.component';
import {Ejercicio7Component} from './ejercicio7/ejercicio7.component';
import {Ejercicio8Component} from './ejercicio8/ejercicio8.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio1Component, Ejercicio2Component, Ejercicio3Component, Ejercicio4Component, Ejercicio5Component
    , Ejercicio6Component, Ejercicio7Component, Ejercicio8Component,FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaAngular';
  name :string = 'Nahuel';
  lista: string[]=[];

  producto: string = "Cebolla";
  descripcion:string='De la huerta.'
  precio:number=0.4;

  anyadeComentario(comentario:string){
    this.lista.push(comentario);
  }
}
