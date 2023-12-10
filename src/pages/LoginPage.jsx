import { Flex, Typography, Input, Button, Checkbox, message } from "antd"
import { useState } from "react"
import { userApi } from '../api/user'
import { useNavigate } from "react-router-dom"
//TODO: 可以更改這頁，也可以在設計 register page 的時候參考這頁
const LoginPage = () => {

    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSuccessLogin = () => {
        messageApi.open({
            type: 'success',
            content: 'Login success!'
        });
    }
    const onFailLogin = (error_message) => {
        messageApi.open({
            type: 'error',
            content: error_message
        });
    }
    const onWarningLogin = (warning_message) => {
        messageApi.open({
            type: 'warning',
            content: warning_message
        });
    }

    const onLogin = async () => {
        const submit_username = username.trim();
        const submit_password = password.trim();
        if( submit_username === '' || submit_password === '' ){
            onWarningLogin('Please fill in all fields!');
            return;
        }
        const response = await userApi.login(submit_username, submit_password);
        if( response.status === 200 ){
            onSuccessLogin();
            // Nagivate to main page
            navigate('/books');
        } else {
            onFailLogin(response.data);
            setUsername('');
            setPassword('');
        }
    }

    return (
        <Flex vertical justify="center" align="center" style={{ width: '50%', backgroundColor: '#FC9F42', padding: 0, paddingBottom: 130}} gap={64}>
            {contextHolder}
            <Typography.Title level={1} style={{ color: 'white', fontSize: '64px' }}>SIGN IN</Typography.Title>
            <Flex vertical gap="middle" style={{ width: '50%'}}>
                <Input placeholder='user name' value={username} onChange={e => setUsername(e.target.value)} />
                <Input.Password placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                <Flex vertical>
                    <Button onClick={onLogin} type='primary' style={{ width: '100%', borderRadius:0, backgroundColor: 'black' }}>Sign In</Button>
                    <Flex justify="space-between" align="center">
                        <Checkbox>Remember me</Checkbox>
                        <a href='#' style={{color: 'gray'}}>Need help?</a>
                    </Flex>
                </Flex>
            </Flex>
            <Flex style={{ width: '100%' }} align="center" justify="center" gap="small">
                <p>New to Talehug?</p>
                <a href="/users/register">Sign up now.</a>
            </Flex>
        </Flex>
    )
}

export default LoginPage