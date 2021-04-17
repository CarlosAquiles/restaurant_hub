import { Component } from '@angular/core';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  //template: '<h1>Hola Carlos Egas</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';
  private dish = 'carapulca';

  taste = false;
}
