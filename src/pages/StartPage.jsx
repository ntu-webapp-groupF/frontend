/*
import { useEffect } from "react"
import { userApi } from "../api/user"
import { useNavigate } from "react-router-dom"
*/

// TODO: 這頁面是點進來我們系統的第一頁，也就是有 Who's Reading 的那頁
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