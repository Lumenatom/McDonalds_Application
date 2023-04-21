import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FullViewItem from "./pages/FullViewItem";
import Navbar from "./components/Header/Navbar";


const App: FC = () => {
    return (
        <BrowserRouter basename={'/McDonalds_Application'}>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/fullView'} element={<FullViewItem/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
