import { Flex, Layout, Button, message } from 'antd';
import UserLayoutHeader from "../components/UserLayoutHeader"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import {
    LeftOutlined, RightOutlined
} from '@ant-design/icons';
import sample from '../assets/background.jpg'
import { contentApi } from '../api/content';
import { Buffer } from 'buffer';

const { Header, Content } = Layout
//TODO:  使用者讀書的時候會跳轉到這頁
const ReadPage = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bookid = searchParams.get('bookId');

    const [ currentPageId, setCurrentPageId ] = useState(0);
    const [ leftPage, setLeftPage ] = useState(sample);
    const [ rightPage, setRightPage ] = useState(sample);
    const [ lastPageId, setLastPageId ] = useState(-1);
    const [ messageApi, contextHolder ] = message.useMessage();

    // Is reserve read page is better?
    const cachedContent = [];

    const error = (error_message) => {
        messageApi.open({
          type: 'error',
          content: error_message,
        });
    };

    const getImageUrl = (image_response) => {
        const blob = new Blob(Buffer.from(image_response.data));
        return URL.createObjectURL(blob);
    };

    const clickNextPage = async () => {

        const target = currentPageId + 2;        
        let image_response, url;

        if (cachedContent.length > target) {
            setLeftPage(cachedContent[target]);
            if (cachedContent.length >= (target + 1)) {
                setRightPage(cachedContent[target + 1]);
            } else {
                setRightPage(null);
            }
            setCurrentPageId(target);
            return;
        }
        
        image_response = await contentApi.getBookContent(bookid, target);
        if (image_response.status === 200) {
            url = getImageUrl(image_response);
            contentUrls.push(url);
            setLeftPage(url);
        } else {
            setLastPageId(currentPageId);
            if (image_response.status === 403) {
                error(image_response.data);
            }
            return;
        }

        image_response = await contentApi.getBookContent(bookid, target + 1);
        setCurrentPageId(target);
        if (image_response.status === 200) {
            url = getImageUrl(image_response);
            contentUrls.push(url);
            setRightPage(url);
        } else {
            setRightPage(null);
            setLastPageId(target);
            if (image_response.status === 403) {
                error(image_response.data);
            }
            return;
        }

        const prefetch = await contentApi.getBookContent(bookid, target + 2);
        if (prefetch.status !== 200 && prefetch.status !== 403) {
            setLastPageId(target + 1);
        }
    };

    const clickPreviousPage = () => {
        
        if (currentPageId < 2 || cachedContent.length < currentPageId) {
            return;
        } else {
            setLeftPage(cachedContent[currentPageId - 2]);
            setRightPage(cachedContent[currentPageId - 1]);
            setCurrentPageId(currentPageId - 2);
        }
    };

    return (
        <Layout style={{opacity: 0.9, minHeight: '100vh'}} >
            <Header style={{backgroundColor: '#FECC99', height: '128px'}}>
                <UserLayoutHeader />
            </Header>
            <Content style={{backgroundColor: '#FECC99', display: 'flex', alignItems: 'center'}}>
                <>
                <Flex wrap='wrap' vertical gap={50} justify='center' align='center' style={{ width: '100%', height: '100%'}}>
                    <Flex gap={20} justify='center' align='center' style={{ width: '100%', height: '95%'}}>
                        <Flex style={{ paddingLeft: '20px' ,width: '50%', height: '100%' }} align="center" justify="center">
                            { leftPage ? (<img src={leftPage} style={{borderRadius:'10px' , width: '100%', height: '100%'}}/>
                            ) : (<></>)}
                        </Flex>
                        <Flex align="center" justify="center" style={{ paddingRight: '20px', width: '50%', height: '100%' }} >
                            { rightPage ? (<img src={rightPage} style={{ borderRadius: '10px', width: '100%', height: '100%'}}/>
                            ) : (<></>)}
                        </Flex>
                    </Flex>
                    <Flex wrap='wrap' gap={30} align="center" justify="flex-end" style={{ width: '100%', height: '5%'}}>
                        <Button
                            type='text'
                            icon={<LeftOutlined style={{ fontSize: 75, cursor: 'pointer' }}/>}
                            disabled={currentPageId === 0} style={{width: 100, height:100}}
                            onClick={clickPreviousPage}/>
                        <Button
                            type='text'
                            icon={<RightOutlined style={{ fontSize: 75, cursor: 'pointer' }}/>}
                            disabled={lastPageId !== -1 && (currentPageId + 2) > lastPageId}
                            style={{width: 100, height:100}}
                            onClick={clickNextPage}/>
                    </Flex>
                </Flex>
                {contextHolder}
                </>
            </Content>
        </Layout>
    )
}

export default ReadPage