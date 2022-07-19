import React from "react";
import Header from "../Layouts/Header";
import Style from "./Index.module.css"

function Index () {

    return(
        <div className="Container">
            <Header/>
            <div className={Style.bodyCards}>
                <h1>Filmes Populares</h1>
                <div className={Style.cards}>
                    
                    

                </div>

            </div>

        </div>
    )
}

export default Index;