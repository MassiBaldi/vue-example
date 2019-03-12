
require('./bootstrap');

window.Vue = require('vue');

Vue.component('movie-card', require('./components/MovieCardComponent.vue').default);

const app = new Vue({
  el: '#app',
  data: {
    newTitle: '',
    newYear: '',
    newOverview: '',
    newImage: '',
    movies: [
      {
        title: 'Ritorno al futuro',
        year: 1985,
        overview: 'Il diciottenne Marty ha come amico un bislacco scienziato che ha inventato una macchina per viaggiare nel tempo. Grazie ad essa Marty tornerà indietro nel tempo, fino al 1955.',
        image: 'https://pad.mymovies.it/filmclub/2006/06/011/immpg2.jpg'
      },
      {
        title: 'Yuppies',
        year: 1986,
        overview: 'Nella Milano degli anni 80, si intrecciano le storie di un venditore di automobili, un notaio, un dentista e pubblicitario, quattro giovani professionisti rampanti, sempre in bilico tra i doveri della professione e la sindrome di Peter Pan.',
        image: 'https://aforismi.meglio.it/img/film/Yuppies.jpg'
      },
      {
        title: 'Vacanze di Natale 83',
        year: 1983,
        overview: "Una galleria di esuberanti personaggi, ritratti di diverse tipologie di italiani, si ritrova a festeggiare il Natale a Cortina d'Ampezzo, dando vita ad esilaranti avventure e scomode storie d'amore, che si intrecciano con risultati imprevedibili e comici.",
        image: 'https://pad.mymovies.it/filmclub/2006/03/590/locandina.jpg'
      },
      {
        title: 'Sapore di mare',
        year: 1983,
        overview: "Estate 1964, Forte dei Marmi. Commedia sulla media borghesia in vacanza, con la dolce e malinconica Marina, l'inglesina Susan, la bionda Selvaggia, e la seducente quarantenne Adriana.",
        image: 'https://pad.mymovies.it/filmclub/2006/03/575/imm.jpg'
      },
    ]
  },
  methods: {
    addNewMovie: function() {
      var newMovieObject = {
        title: this.newTitle,
        year: this.newYear,
        overview: this.newOverview,
        image: this.newImage
      };

      this.movies.push(newMovieObject);

      this.newTitle = '',
      this.newYear = '',
      this.newOverview = '',
      this.newImage = ''
    }
  }

});
