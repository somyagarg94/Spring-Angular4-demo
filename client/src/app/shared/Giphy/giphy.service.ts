import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
// http://tutorials.pluralsight.com/front-end-javascript/getting-started-with-angular-2-by-building-a-giphy-search-application
export class GiphyService {


  // Public beta key: https://github.com/Giphy/GiphyAPI#public-beta-key
  giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

  constructor(public http: Http) {}

  get(searchTerm): Observable<any> {
    let apiLink = this.giphyApi + searchTerm;
    return this.http.request(apiLink).map((res: Response) => {
      let giphies = res.json().data;
      return giphies[0].images.original.url;
    });
  }
}
