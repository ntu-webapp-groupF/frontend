import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ErrorPage from "../pages/ErrorPage"
import { Layout } from 'antd'
import UserLayoutHeader from "../components/UserLayoutHeader"

const { Header, Content } = Layout

const UserLayout = () => {
    return (
        <Layout>
            <Header style={{backgroundColor: '#FECC99', height: '128px'}}>
                <UserLayoutHeader />
            </Header>
            <Content style={{backgroundColor: '#FECC99', minHeight: '100vh', maxHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Content>
        </Layout>
    )
}

export default UserLayout