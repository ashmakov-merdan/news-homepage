import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App(){
    return (
        <Router>
            <Routes>
                <Route path={"/news"} element={<Home/>}>

                </Route>
            </Routes>
        </Router>
    )
}