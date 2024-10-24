import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface producto {
  nombre:string;
  precio:number;
  cantidad:number;
}
@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio8.component.html',
  styleUrl: './ejercicio8.component.css'
})
export class Ejercicio8Component {
  producto1: producto={
    nombre: "pera",
    precio: 1.8,
    cantidad: 0
  };
  producto2: producto={
    nombre: "kiwi",
    precio: 2.4,
    cantidad: 0
  };
  total:number= 0;

  listaProductos:producto[]=[this.producto1, this.producto2];

  anydirProducto(producto: producto){
    producto.cantidad+=1;
    this.total += producto.precio;
  }
  quitarProducto(producto: producto){
    if (producto.cantidad!=0){
      producto.cantidad-=1;
      this.total -= producto.precio;
    }
  }
}
