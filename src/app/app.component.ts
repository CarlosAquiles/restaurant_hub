import { Component } from '@angular/core';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  /* template: `<h1>Hola Carlos Egas</h1>
  <h2>{{title}}</h2>`, */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';
  dish = 'carapulca';
  link = '<a href="https://www.icpna.edu.pe/horarios-costos">Repositorio</a>';
  taste = true;

  changeTest(): void {
    this.taste = !this.taste;
  }
}
