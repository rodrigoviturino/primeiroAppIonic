import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "http://api.salaovip.com.br/salao/66/galeria";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies(){
    return this.http.get(this.baseApiPath);
  }

}

