import {FC, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FullViewItem from "./pages/FullViewItem";
import Navbar from "./components/Header/Navbar";


const App: FC = () => {
    const [value, setValue] = useState('')
    const [visibleSearch, setVisibleSearch] = useState(false)


    return (
        <BrowserRouter basename={'/McDonalds_Application'}>
            <Navbar value={value} setValue={setValue} visibleSearch={visibleSearch} setVisibleSearch={setVisibleSearch} />
            <Routes>
                <Route path={'/'} element={<HomePage value={value} visibleSearch={visibleSearch} setVisibleSearch={setVisibleSearch} />}/>
                <Route path={'/fullView'} element={<FullViewItem/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
