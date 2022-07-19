import { useEffect, useState } from "react"
import { catchFilms } from "../api/api";
import Style from "./Cards.module.css"



export function Cards() {

    const [filmes, setFilmes] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        catchFilms(setFilmes);
    }, []);

    return (
        <div>
            {!filmes ? "loading" : <>
                {filmes.map((filmes) => {
                    return (
                        <div>
                            <ul className={Style.ulContainer}>
                                <li><img className={Style.imageMovie} alt="Filmes" src={`${image_path}${filmes.poster_path}`} /></li>
                                <span>{filmes.title}</span>
                            </ul>
                        </div>
                    )
                })}
            </>}
        </div>
    );
};
