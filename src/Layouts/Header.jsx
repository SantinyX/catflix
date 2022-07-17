import React from "react";
import Catflix from "../assets/Imgs/catflix.png"
import Cat from "../assets/Imgs/cat-logo.png"
import Styles from "../Layouts/Header.module.css"

function Header() {
    return (
        <div className={Styles.containerHeader}>
            <div className={Styles.imgCats}>
                <img src={Cat} alt="Cat" />
                <img src={Catflix} alt="Catflix" />
            </div>
        </div>
    );
};

export default Header;