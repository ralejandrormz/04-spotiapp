import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loading = true;
  constructor(private router: ActivatedRoute,
              private service: SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
    });

    return;
  }

  getArtist(id: string): any {
    console.log(id);
    this.service.getArtist(id)
                .subscribe(artist => {
                  console.log(artist);
                  this.artist = artist;
                  this.loading = false;
                });
  }
}
