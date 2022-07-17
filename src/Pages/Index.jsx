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
                <h2 className={Style.h2}>Filmes Populares</h2>
                <Cards />
            </div>
            <strong><Footer /></strong>
        </div>
    )
}

export default Index;