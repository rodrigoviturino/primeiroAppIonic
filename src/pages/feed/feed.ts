import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // INCLUINDO A CLASSE
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      MoovieProvider
  ]
})

export class FeedPage {

  public objeto_feed = {
        titulo:'Rodrigo Viturino',
        data:"November 5, 1955",
        descricao:"Aprendendo a desenvolver com Ionic 3",
        qntd_likes: 890,
        qntd_comments: 955,
        time_comment: '11h ago'
  }

  // Criando variavel
  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Rodrigo Viturino";
  

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private movieProvider: MoovieProvider
      ) {
  }

  public somaDoisNumeros(num1:number,num2:number ): void{
      // alert(num1 + num2);
  }

  // Quando a API der resposta, vai cair aqui
  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatesMovies().subscribe(
          data => {
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);

              // retorno de lista de filme do RESULTS
            //this.lista_filmes = objeto_retorno.results;
            this.lista_filmes = objeto_retorno.data.gallery;

            console.log(objeto_retorno);
          }, error => {
            console.log(error);
          })
    // this.somaDoisNumeros(10, 400);
  }

}
