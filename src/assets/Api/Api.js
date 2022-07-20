import axios from "axios"

export const catchFilms = (setState) => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=51a87522170f7ac6206424bc2a6f7d21&language=en-US&page=1')

    .then((Response) => {
        setState(Response.data.results);
    }).catch((error) => {
        console.log(error);
    });
};
