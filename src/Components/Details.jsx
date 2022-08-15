import { Link, Outlet } from "react-router-dom";
import Header from "../Layouts/Header";



function Details() {
    return (
        <div>

            <Header />

            <li>
                <Link to="/">Voltar para o Home</Link>
            </li>

            <Outlet />

        </div>
    )
}

export default Details;