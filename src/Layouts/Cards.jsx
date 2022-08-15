import { useEffect, useState } from "react";
import { catchFilms } from "../assets/Api/Api.js"
import { CardsContainer, MovieCard } from "./CardsStyle.js";

export function Cards(props) {
    const [films, setFilms] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        catchFilms(setFilms);
    }, []);

    return (

        <CardsContainer>

            {!films ? "loading" :

                <>

                    {films.map((films) => {
                        return (

                            <MovieCard to="/Details">
                                <ul >
                                    <li>
                                        <img alt="Films" src={`${image_path}${films.poster_path}`} />
                                        <p>Média: {films.vote_average}</p>
                                        <span>{films.title}</span>
                                    </li>
                                </ul>
                            </MovieCard>

                        )
                    })};

                </>}

        </CardsContainer>
    );
};