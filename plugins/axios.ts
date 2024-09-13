import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const axiosInstance = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
            Authorization: `Bearer ${config.public.tmdbApiKey}`
        }



    })

    return {

        provide: { 'axios': axiosInstance }
    }
})





