import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  styleUrls: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  newReleases: Array<any> = [];
  loading: boolean;
  error = false;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
                .subscribe((data: any) => {
                  console.log(data);
                  this.newReleases = data;
                  this.loading = false;
                }, (err: any) => {
                  this.error = true;
                  this.loading = false;
                  console.log(err);
                });
  }
}
