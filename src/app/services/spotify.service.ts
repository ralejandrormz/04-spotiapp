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
      Authorization: 'Bearer BQBslT36BxoZrpjX53gXLHTTTK4WnPg-0I3ba2fj0IIwt-dJp1wlnkwXAUiqiLPnqNEAysxguRP-XprzkMvFkFt5O3XAVt4j7suydCCkRUI-qJbHNJMH-39DsuGOGP9E5b-59A0'
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
}
