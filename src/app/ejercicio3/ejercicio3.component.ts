import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  listaTareas: string[] = ["nombre","nombre"];

  agregaTarea(){
    const tarea = document.getElementById('nombreTarea') as HTMLInputElement;
    if(tarea.value.trim()){
      this.listaTareas.push(tarea.value);
    }
    tarea.value="";
  }
}
