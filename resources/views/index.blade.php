<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Vue Example</title>
  </head>
  <body>
    <div id="app">
      <input type="text" placeholder="Inserisci un titolo" v-model="newTitle" />
      <input type="number" placeholder="Inserisci anno" v-model="newYear" />
      <input type="text" placeholder="Inserisci una trama" v-model="newOverview" />
      <input type="text" placeholder="Inserisci una locandina" v-model="newImage" />
      <button @click="addNewMovie">Aggiungi nuovo film</button>

      <div class="movies_container">
        <movie-card v-bind:movie="movie" v-for="movie in movies"></movie-card>
      </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
  </body>
</html>
