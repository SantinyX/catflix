import React, { useEffect, useState } from "react";
import { catchFilms } from "../assets/Api/Api";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import imgHeader from "../assets/Imgs/1241167.png"
import { Body, Title } from "./IndexStyle";
import { Cards } from "../Layouts/Cards";


function Home() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        catchFilms(setFilms);
    }, [films]);

    return (
        <Body>
            <div className="Header">
                <Header />
                <img className="imgBack" alt="Thor Love and" src={imgHeader} />
            </div>

            <Title>Filmes Populares</Title>

            <Cards />

            <Footer />

        </Body>
    )
};

export default Home;