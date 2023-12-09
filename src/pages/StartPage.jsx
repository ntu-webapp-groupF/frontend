import { useEffect } from "react"
import { userApi } from "../api/user"
import { useNavigate } from "react-router-dom"

const StartPage = () => {

    /*
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogined = async () => {
            const response = await userApi.getCurrentUser();
            if( response.status === 200 ){
                // Nagivate to main page
                navigate('/books');
            }
        }
        checkLogined();
    }, [navigate])
    */

    return (
        <div>Start Page</div>
    )
}

export default StartPage