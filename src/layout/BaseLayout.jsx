import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import FilterPage from '../pages/FilterPage';
import ErrorPage from "../pages/ErrorPage";

const BaseLayout = () => {
    return (
        <div>
            Base Layout
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/filter' element={<FilterPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default BaseLayout;