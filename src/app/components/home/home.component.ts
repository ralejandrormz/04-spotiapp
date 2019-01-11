import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: 'app-home',
  styleUrls: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  newReleases: Array<any> = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      console.log(data);
      this.newReleases = data;
    });
  }
}
