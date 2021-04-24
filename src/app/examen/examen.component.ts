import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ce-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {

  title = 'Colegio';
  student = 'Alumno';
  cellphone = true;
  input1x = '';
  input2x = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void {
    this.cellphone = !this.cellphone;
  }

  handleInput(event: Event): void {
    const input1 = event.target as HTMLInputElement;
    const input2 = event.currentTarget as HTMLInputElement;

    this.input1x = input1.tagName;
    this.input2x = input2.tagName;

    console.log('El clic que se adjuntó a',
    this.input1x, 'se encuentra actualmente en',
    this.input2x);

  }
}

