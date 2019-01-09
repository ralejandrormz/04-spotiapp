import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  styles: [],
  templateUrl: './cards.component.html'

})
export class CardsComponent {
  @Input() items: Array<any> = [];
  constructor() { return; }
}
