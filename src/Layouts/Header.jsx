import React from "react";
import Catflix from "../assets/Imgs/catflix.png"
import Cat from "../assets/Imgs/cat-logo.png"
import { HeaderStyle } from "./FooterHeaderStyle";
// import SearchInput from "../Services/Search";

function Header() {

    //Criando const para texto de procura vindo no import SearchInput
    // const [text, setText] = useState(``)
    // console.log(text);    

    return (
        <HeaderStyle>
            <div className="imgCatflix">
                <img src={Cat} alt="Cat" />
                <img src={Catflix} alt="Catflix" />
                {/* <div className="input">
                    <SearchInput value={text} onChange={(search) => setText(search)}/>                
                </div> */}
            </div>

        </HeaderStyle>
    );
};

export default Header;