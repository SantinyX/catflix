import React, { useEffect, useState } from "react";
import { catchFilms } from "../assets/Api/Api";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import { Body, MovieCard, Title } from "./IndexStyle";


function Home() {

    const [films, setFilms] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        catchFilms(setFilms);
    },[]);

    return (
        <Body>
            <div className="Header">
                <Header />
            </div>
            <div className="container">
            
                <div>              

                    <Title>Filmes Populares</Title>

                    <MovieCard>
                    
                        {!films ? "loading" : <>
                            {films.map((films) => {
                                return (
                                    <ul>
                                        <li>
                                            <a href="google.com"><img alt="Films" src={`${image_path}${films.poster_path}`} /></a>
                                            <p>{films.vote_average}</p>
                                            <span>{films.title}</span>
                                        </li>
                                    </ul>
                                )
                            })}
                        </>}
                    </MovieCard>
                </div>
            </div>
            <Footer />
        </Body>
    )
}

export default Home;

// import { useEffect, useState } from "react"
// import { catchFilms } from "../assets/Api/Api";


// export function Cards(props) {
//     const [films, setFilms] = useState([]);
//     const image_path = 'https://image.tmdb.org/t/p/w500/'

//     useEffect(() => {
//         catchFilms(setFilms);
//     }, []);

//     return (
//         <div className="container">
//             {!films ? "loading" : <>
//                 {films.map((films) => {
//                     return (
//                         <div>

//                             <ul>
//                                 <li>
//                                     <a href="https://www.google.com/"><img alt="Films" src={`${image_path}${films.poster_path}`} /></a>
//                                     <span>{films.title}</span>
//                                 </li>
//                             </ul>

//                         </div>
//                     )
//                 })}</>}

//         </div>
//     );
// };