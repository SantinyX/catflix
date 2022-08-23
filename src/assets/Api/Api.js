import axios from "axios"


export const catchFilms = (setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3eb53d338b58f6d68a0ba68b832600ec&language=pt-BR&page=1`)

        .then((Response) => {
            setState(Response.data.results);
        }).catch((error) => {
            console.log(error);
        });
};


export const catchDetails = (id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3eb53d338b58f6d68a0ba68b832600ec&language=pt-BR`)
        .then((Response) => {
            setState(Response)
        }).catch((erro) => {
            console.log(erro);
        })
}

// const catchDetails = (id, setState) => {
//     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)

//         .then((Response) => {
//             setState(Response.data);
//         }).catch((error) => {
//             console.log(error);
//         });
// };

// export default catchDetails;


