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
  topTracks: any = [];
  loading = true;
  constructor(private router: ActivatedRoute,
              private service: SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });

    return;
  }

  getArtist(id: string): any {
    this.service.getArtist(id)
                .subscribe(artist => {
                  this.artist = artist;
                  this.loading = false;
                });
  }

  getTopTracks(id): any {
    this.service.getTopTracks(id)
                .subscribe(topTracks => {
                  console.log(topTracks);
                  this.topTracks = topTracks;
                  this.loading = false;
                });
  }
}
