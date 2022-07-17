import { useEffect, useState } from "react"
import { catchFilms } from "../api/api";

export function Cards() {

    const [filmes, setFilmes] = useState();

    useEffect(() => {
        catchFilms(setFilmes);
    }, [])

    return (
        <div>
            {!filmes ? "loading" : <>
            {filmes.map((filmes) => {
                return <p>{filmes.title}</p>
            })}
            </>}
        </div>
    )
}