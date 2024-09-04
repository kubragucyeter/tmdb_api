<script setup lang="js">
import ChangeTheme from './compenents/change-theme.vue'
import { useMovieStore } from '#imports';
const config = useRuntimeConfig()

const movieStore = useMovieStore();


onMounted(
  () => {
    movieStore.fetchMovies;
  });

</script>

<template>
  <NuxtPage />
  <ChangeTheme />

  <div class="flex justify-center align-center ml-8 mt-6">
    <h1>Popüler Filmler</h1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="movie in movieStore.movies" :key="movie.id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>
