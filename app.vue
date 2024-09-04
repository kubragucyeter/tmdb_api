<script setup lang="js">
import ChangeTheme from './compenents/change-theme.vue'
import { useMovieStore } from '#imports';
const config = useRuntimeConfig()

const movieStore = useMovieStore();


onMounted(
  () => {
    movieStore.fetchMovies();
  });

</script>

<template>
  <NuxtPage />
  <ChangeTheme />

  <div class="flex justify-center align-center ml-8 ">
    aasd
  </div>



</template>
