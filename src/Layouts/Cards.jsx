import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { catchDetails, catchFilms } from "../assets/Api/Api.js";
import { getMovieDetail } from "../Services/Redux/Slice.js";
import { CardsContainer, MovieCard } from "./CardsStyle.js";


export function Cards() {

    const [films, setFilms] = useState();
    const [details, setDetails] = useState();
    const dispatch = useDispatch();
    const image_path = `https://image.tmdb.org/t/p/w500/`

    useEffect(() => {
        catchFilms(setFilms);
    }, [])

    useEffect(() => {
        dispatch(getMovieDetail(details))
    }, [details]);

    const onMouseHouver = (e) => {

        catchDetails(e.target.id, setDetails)
    }
    
    return (

        <CardsContainer to="/Details">


            {!films ? "loading" :

                <>

                    {films.map((film) => {
                        return (

                            <MovieCard key={film.id} id={film.id} onMouseOver={onMouseHouver}>
                                <ul >
                                    <li>
                                        <img alt="Films" src={`${image_path}${film.poster_path}`} id={film.id} />
                                        <p>Nota: {film.vote_average}</p>
                                        <span>{film.title}</span>
                                    </li>
                                </ul>
                            </MovieCard>

                        )
                    })};

                </>}

        </CardsContainer>
    );
};