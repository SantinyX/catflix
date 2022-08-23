import { useSelector } from "react-redux"
import Catflix from "../assets/Imgs/catflix.png"
import Cat from "../assets/Imgs/cat-logo.png"
import { DetailsHeader, ImgHeader } from "./DetailsStylde"


export function HeaderDetails() {

    const state = useSelector((state) => state.page.value2)

    return (
        <DetailsHeader>
            <ImgHeader>
                <img src={Cat} alt="Cat" />
                <img src={Catflix} alt="Catflix" />
            </ImgHeader>

            <p><b>Titulo:  </b> {state.data.title} </p>
        </DetailsHeader>
    )
}