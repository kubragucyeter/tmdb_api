<script setup lang="js">
// import ChangeTheme from './components/change-theme.vue';
import { useMovieStore } from './stores/movie.ts';
const config = useRuntimeConfig()

const movieStore = useMovieStore();

onMounted(async () => {
  //SEVİL <3
  await movieStore.fetchMovies();
});

</script>






<template>
  <NuxtPage />
  <div class="justify-center align-center ml-8 mt-6">
    <h>Popüler Filmler</h>
    <ul class="flex flex-wrap" v-for="movie in movieStore.movies">
      <li>{{ movie.title }}</li>
    </ul>
    <!-- <div class="grid grid-nogutter mt-4">
      <div v-for="movie in movieStore.movies" :key="movie.id" class="col-12 sm:col-6 md:col-4 lg:col-3 p-2">
        <div class="p-card">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" class="w-full" />
          <h2 class="mt-2">{{ movie.title }}</h2>
          <p class="text-sm text-secondary">{{ movie.overview }}</p>
        </div>
      </div>
    </div> -->
  </div>

</template>
