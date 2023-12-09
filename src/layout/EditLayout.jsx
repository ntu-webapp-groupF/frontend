import { Routes, Route } from "react-router-dom";
import EditPage from '../pages/EditPage';
import UploadPage from '../pages/UploadPage';
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";

const EditLayout = () => {
    return (
        <div>
            Edit Layout
            <Routes>
                <Route path='/' element={<ProfilePage />} />
                <Route path='/profile' element={<EditPage />} />
                <Route path='/book' element={<UploadPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default EditLayout;