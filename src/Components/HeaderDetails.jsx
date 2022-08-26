import { useSelector } from "react-redux"
import Catflix from "../assets/Imgs/catflix.png"
import Cat from "../assets/Imgs/cat-logo.png"
import { DetailsHeader, ImgHeader, TitleDetails } from "./DetailsStyle"




export function HeaderDetails() {

    const state = useSelector((state) => state.page.value2)

    return (
        <DetailsHeader>
            <ImgHeader>
                <img src={Cat} alt="Cat" />
                <img src={Catflix} alt="Catflix" />
            </ImgHeader>

            <TitleDetails>
                <p><b>Titulo: </b> {state.data.title} </p>
            </TitleDetails>

        </DetailsHeader>
    )
}