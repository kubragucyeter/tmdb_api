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

    // const fetchMovies =  async () => {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${config.public.tmdbApiKey}` 
    //     }
    // };

    // try {

    //     const response = await fetch(
    //         'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', 
    //         options
    //     );


    //         const data = await response.json();
    //         movies.value = data.results;
    //         } catch (error){
    //        alert("hata alıyonn")
    //       }

    // onMounted ( fetchMovies);

    return {
        movies,
        fetchMovies,
    };
}
)



