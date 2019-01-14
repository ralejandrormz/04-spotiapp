import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCu3NS95UqHDhvhJ5oWO2o05Yg6PZ-uLlwXoUXjaIuobDASuUcE1G8a_AJX2LnIGsG9YLSzzLGpBBvEX-qF4JMujJhinxfpFLscy4gxbRi4Nvf0dpKZPg3QzYwheOGf6xDj-Fk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases')
               .pipe(map(data => data['albums'].items));
  }

  getArtists(term: string): any {
      return this.getQuery(`search?q=?${ term }&type=artist&limit=15`)
                    .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${ id }`);
                  // .pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${ id }/top-tracks?country=MX`)
               .pipe(map(data => data['tracks']));
  }
}
