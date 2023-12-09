import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ErrorPage from "../pages/ErrorPage"

const UserLayout = () => {
    return (
        <div>
            UserLayout
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default UserLayout