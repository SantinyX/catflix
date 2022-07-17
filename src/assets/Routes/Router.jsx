import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../../Pages/Index";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path="*" element = {<div>Page is not found - 404</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;