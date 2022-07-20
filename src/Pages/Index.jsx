import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Style from "./Index.module.css";



function Index() {

    return (
        <div className={Style.body}>
            <div className={Style.Header}>
                <Header />
            </div>
            <div className={Style.container}>
                <div>

                    <h1>Filmes Populares</h1>

                    <div className={Style.movies_container}>
                        <ul>
                            
                            <li>
                                <a href="https://www.youtube.com/results?search_query=display+flex"><img  alt="teste" className={Style.imgStyle} src="https://thenexus.one/storage/2022/03/Resident-Evil-Netflix-Series-connected-to-the-games-Claire.jpg" /></a>
                                <span></span>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/results?search_query=display+flex"><img alt="teste" className={Style.imgStyle} src="https://thenexus.one/storage/2022/03/Resident-Evil-Netflix-Series-connected-to-the-games-Claire.jpg" /></a>
                                <span>Teste</span>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/results?search_query=display+flex"><img alt="teste" className={Style.imgStyle} src="https://thenexus.one/storage/2022/03/Resident-Evil-Netflix-Series-connected-to-the-games-Claire.jpg" /></a>
                                <span>Teste</span>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/results?search_query=display+flex"><img alt="teste" className={Style.imgStyle} src="https://thenexus.one/storage/2022/03/Resident-Evil-Netflix-Series-connected-to-the-games-Claire.jpg" /></a>
                                <span>Teste</span>
                            </li>
                            
                                                       
                        </ul>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index;

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