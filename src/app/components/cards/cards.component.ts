import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  styles: [],
  templateUrl: './cards.component.html'

})
export class CardsComponent {
  @Input() items: Array<any> = [];
  constructor(private router: Router) { return; }

  viewArtist(item: any): any {
    let artistId;
    (item.type === 'artist' ? artistId = item.id : artistId = item.artists[0].id);
    this.router.navigate(['/artist', artistId]);
  }
}
