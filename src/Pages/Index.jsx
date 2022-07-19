import React from "react";
import { Cards } from "../Layouts/Cards";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";


function Index() {    

    return (
        <div >
            <Header />
            <div >
                <h2>Filmes Populares</h2>
                <ul>                    
                    <li><Cards /></li>
                </ul>
            </div>
            <strong><Footer /></strong>
        </div>
    )
}

export default Index;