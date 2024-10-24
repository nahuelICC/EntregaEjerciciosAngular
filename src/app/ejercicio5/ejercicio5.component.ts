import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {
  comentario: string = '';
  @Output() comentarioNuevo = new EventEmitter<string>();

  agregaComentario() {
    if (this.comentario.trim()) {
      this.comentarioNuevo.emit(this.comentario.trim());
      this.comentario = '';
    }
  }
}
