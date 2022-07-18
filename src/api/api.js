import axios from "axios"

export const catchFilms = (setState) => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ac57c76aa7b66833535f4b4aabe014f6&language=pt-BR&page=1')

        .then((response) => {
            setState(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
}