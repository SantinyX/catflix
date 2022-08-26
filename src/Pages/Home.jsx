import React from "react";

import Header from "../Layouts/Header";
import imgHeader from "../assets/Imgs/1241167.png"
import { Body, Title } from "./IndexStyle";
import { Cards } from "../Layouts/Cards";
import { Footer } from "../Layouts/Footer";


export function Home() {

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

