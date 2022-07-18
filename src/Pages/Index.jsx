import React, { useEffect, useState } from "react";
import { Cards } from "../Layouts/Cards";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Style from "../Pages/Index.module.css"

function Index() {
    const [setImagens] = useState()

    useEffect(() => {

    }, [])

    return (
        <div>
            <Header />
            <div className={Style.index}>

                <div className={Style.h2}><h2>Filmes Populares</h2></div>

                <div className={Style.Cards}><Cards /></div>

            </div>
            
            <strong><Footer /></strong>
        </div>
    )
}

export default Index;