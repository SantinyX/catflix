import React from "react";

import { Cards } from "../Layouts/Cards";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Style from "../Pages/Index.module.css"

function Index() {    

    return (
        <div className={Style.container}>
            <Header />
            <div className={Style.Cards}>
                <h2 className={Style.h2}>Filmes Populares</h2>
                <ul className={Style.ul}>                    
                    <li><Cards /></li>
                </ul>
            </div>

            <strong><Footer /></strong>
        </div>
    )
}

export default Index;