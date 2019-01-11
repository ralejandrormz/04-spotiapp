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
      Authorization: 'Bearer BQCtgizvBA0igZVZmXtO4fVEau-VVw4vV5TnBhySVEAMfPVtosjyWGlTD8CjN-W7yu-G0_mUyXkGpZ9FDqOQtdSNjzMxunZJ7F-bipg-AJF8ds2W_R1MSn9U5LlQrm7GM5roviQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases')
               .pipe(map(data => data['albums'].items));
  }

  getArtist(term: string): any {
      return this.getQuery(`search?q=?${ term }&type=artist&limit=15`)
                    .pipe(map(data => data['artists'].items));
  }
}
