import { defineStore } from 'pinia'
import {ref, onMounted} from 'vue'

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
const fetchMovies = async () => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.public.tmdbApiKey}` 
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const data = await response.json();
        movies.value = data.results;
    } catch (error){
        console.log("hata alıyonn")
    }

onMounted ( fetchMovies);



    
    return {
        movies,
        fetchMovies
    };
}
})



