<template>
  <div class="movie">
    <img :src="movie.image" alt="">
    <h2>{{ movie.title }}</h2>
    <small>{{ movie.year }} </small>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
  export default {
    props: ['movie'],
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>

<style lang="scss">
  .movie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    padding: 20px;
    width: 300px;
    height: 500px;
    border: 1px solid grey;
    border-radius: 10px;
    img {
      max-width: 150px;
      max-height: 200px;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    h2 {
    font-size: 25px;
    }
    small {
    font-size: 20px;
    }
  }
</style>
