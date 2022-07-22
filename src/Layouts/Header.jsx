import React from "react";
import Catflix from "../assets/Imgs/catflix.png"
import Cat from "../assets/Imgs/cat-logo.png"
import imgHeader from "../assets/Imgs/1241167.png"
import { HeaderStyle } from "./FooterHeaderStyle";

function Header() {
    return (
        <HeaderStyle>
            <img className="imgBack" alt="Thor Love and" src={imgHeader}/>
            <div className="imgCatflix">
                <img src={Cat} alt="Cat" />
                <img src={Catflix} alt="Catflix" />
            </div>
        </HeaderStyle>
    );
};

export default Header;