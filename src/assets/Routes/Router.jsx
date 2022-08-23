import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "../../Components/Details";
import { Home } from "../../Pages/Home";

function RouterDom() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Details" element={<Details/>}/>
                <Route path="*" element={<h1>Page is not found - 404</h1>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouterDom;