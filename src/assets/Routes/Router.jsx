import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path="*" element = {<div>Page is not found - 404</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;