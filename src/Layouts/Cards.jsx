import { useEffect, useState } from "react";
import { catchFilms } from "../assets/Api/Api.js"
import { MovieCard } from "../Pages/IndexStyle.js";


export function Cards(props) {
    const [films, setFilms] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        catchFilms(setFilms);
    }, []);

    return (
        <div>
            {!films ? "loading" : <>
                {films.map((films) => {
                    return (
                        <MovieCard>
                            <ul >
                                <li>
                                    <a href="https://www.google.com/"><img alt="Films" src={`${image_path}${films.poster_path}`}/></a>
                                    <span>{films.title}</span>
                                </li>
                            </ul>
                        </MovieCard>
                    )
                })};
            </>}
        </div>
    );
};