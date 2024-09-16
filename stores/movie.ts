import { defineStore } from 'pinia'
import { compileToFunction, ref } from 'vue'
import axios from 'axios'

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
    const _public = useRuntimeConfig().public;
    const { $axios } = useNuxtApp()
    const fetchMovies = async () => {
        try {
            const response = await $axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    language: 'tr-TR',
                },
            })

            movies.value = response.data.results;

        } catch (error) {
            console.log(error, "error")
        }



    }
    return {
        movies,
        fetchMovies,
    };
}
)



