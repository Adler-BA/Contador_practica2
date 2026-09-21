import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contador',
  styleUrl: './contador.css',
  templateUrl: './contador.html',
})
export class Contador {
  numero: number = 0;

  sumar() {
    this.numero = this.numero + 1;
  }

  restar() {
    this.numero = this.numero - 1;
  }

  reiniciar() {
    this.numero = 0;
  }
}
