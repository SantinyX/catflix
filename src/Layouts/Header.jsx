import React from "react";
import Catflix from "../assets/Imgs/catflix.png"
import Cat from "../assets/Imgs/cat-logo.png"

import { HeaderStyle } from "./FooterHeaderStyle";

function Header() {
    return (
        <HeaderStyle>
            <div className="imgCatflix">
                <img src={Cat} alt="Cat" />
                <img src={Catflix} alt="Catflix" />
                <div className="input">
                    <input type="text" placeholder="Procurar" className="search"></input>
                </div>
            </div>

        </HeaderStyle>
    );
};

export default Header;