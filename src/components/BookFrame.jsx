import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Flex, Typography, Button } from 'antd';
import sample from '../assets/background.jpg';
import { contentApi } from '../api/content';
import { bookApi } from '../api/book';
import {
    PlusOutlined,
    CaretRightOutlined,
    InfoCircleOutlined,
    DislikeOutlined,
    LikeOutlined,
    LikeFilled,
    DislikeFilled
} from '@ant-design/icons';

const BookFrame = ({ bookList }) => {

    const navigate = useNavigate();

    const [contents, setContents] = useState([sample, sample, sample, sample]);
    const [books, setBooks] = useState([
        {
            id: 0,
            bookname: "活了100萬次的貓",
            description: "\tThere was a cat who died a million times and lived a million times, and was loved by a million people. Every time it died, its owner cried very sadly for him, but this cat, which had lived a million times, never cried once. It had never loved anyone. Once, it became a real wild cat, living freely and enjoying the admiration of other cats, until it finally met a white cat that it loved. For the first time, it fell in love with someone else...",
            age: "7-10",
            price: "1.00",
            category_list: ["Self-exploration", "life education"],
            profile_image: sample,
        }
    ]);

    const [dislike, setDislike] = useState(false);
    const [like, setLike] = useState(false);

    const getImageUrl = (image_response) => {
        const blob = new Blob(Buffer.from(image_response.data));
        return URL.createObjectURL(blob);
    };

    const fetchBooks = async () => {

        let url;
        const contentList = [];

        const book_id = bookList[0].id;
        for (i = 1; i < 4; i++) {
            const content_response = await contentApi.getBookContent(book_id, i);
            if (content_response.status === 200) {
                url = getImageUrl(content_response);
                contentList.push(url);
            } else {
                // TODO: error handling
            }
        }

        setContents(contentList);
        setBooks(bookList);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    const BookContent = ({ content = null, borderRadius = '10px' }) => {
        if (content) {
            return (
                <div>
                    <img src={content} style={{ borderRadius: borderRadius, width: '100%', height: '100%' }} />
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const addColletionList = async () => {
        const response = await bookApi.addBookToCollections(books[0].id);
        if (response.status !== 200) {
            // TODO： error handling
        }
    }

    const getInfo = () => {
        // No implementation...
    }

    const readBook = () => {
       navigate(`/reads?bookId=${books[0].id}`)
    }

    const dislikeBook = () => {
        if (like) {
            setLike(false);
        }
        setDislike(!dislike);
    }

    const likeBook = () => {
        if (dislike) {
            setDislike(false);
        }
        setLike(!like);
    }

    useEffect(() => { }, [like, dislike])

    const LikeButton = () => {

        if (!like) {
            return (
                <Button
                    type='text'
                    icon={<LikeOutlined style={{ fontSize: 50, cursor: 'pointer' }} />}
                    style={{ width: 100, height: 100 }}
                    onClick={likeBook}
                />)
        } else {
            return (
                <Button
                    type='text'
                    icon={<LikeFilled style={{ fontSize: 50, cursor: 'pointer' }} />}
                    style={{ width: 100, height: 100 }}
                    onClick={likeBook}
                />)
        }
    }

    const DislikeButton = () => {

        if (!dislike) {
            return (
                <Button
                    type='text'
                    icon={<DislikeOutlined style={{ fontSize: 50, cursor: 'pointer' }} />}
                    style={{ width: 100, height: 100 }}
                    onClick={dislikeBook}
                />)
        } else {
            return (
                <Button
                    type='text'
                    icon={<DislikeFilled style={{ fontSize: 50, cursor: 'pointer' }} />}
                    style={{ width: 100, height: 100 }}
                    onClick={dislikeBook}
                />)
        }
    }

    return (
        <Flex vertical gap={50} justify='center' align='center' style={{ width: '100%', height: '100%' }}>
            <Flex gap={20} justify='center' align='flex-start' style={{ width: '90%', height: '60%' }}>
                <Flex gap={10} vertical justify='center' align='center' style={{ width: '50%', height: '100%' }}>
                    <Flex gap={20} justify='center' align='center' style={{ width: '100%', height: '70%' }}>
                        <BookContent content={books[0].profile_image} borderRadius='30px' />
                    </Flex>
                    <Flex gap={20} justify='center' align='center' style={{ width: '100%', height: '30%' }}>
                        <BookContent content={contents.length === 4 ? contents[0] : null} borderRadius='30px' />
                        <BookContent content={contents.length === 4 ? contents[1] : null} borderRadius='30px' />
                        <BookContent content={contents.length === 4 ? contents[2] : null} borderRadius='30px' />
                        <BookContent content={contents.length === 4 ? contents[3] : null} borderRadius='30px' />
                    </Flex>
                </Flex>
                <Flex gap={20} vertical justify='center' align='flex-start' style={{ width: '50%', height: '100%' }}>
                    <Flex vertical gap={20} justify='center' align='flex-start' style={{ width: '100%', height: '70%' }}>
                        <Flex vertical justify='center' align='center' style={{ width: '100%', height: '70%' }}>
                            <Typography.Title
                                level={3}
                                style={{ textShadow: "4px 4px #000000", fontFamily: 'Playfair Diasplay SC', color: 'white', fontSize: '5vw', fontWeight: 800 }}>
                                {books[0].bookname}
                            </Typography.Title>
                            <Typography.Text
                                style={{ fontFamily: 'optima' }}>
                                {books[0].description}
                            </Typography.Text>
                        </Flex>
                        <Flex vertical justify='center' align='flex-start' style={{ width: '100%', height: '30%' }}>
                            <Typography.Text
                                style={{ fontFamily: 'optima' }}>
                                #Age: {books[0].age}
                            </Typography.Text>
                            <Typography.Text
                                style={{ fontFamily: 'optima' }}>
                                #List: {books[0].category_list.map((category, index) => (
                                    <React.Fragment key={index}>
                                        {category}
                                        {index < books[0].category_list.length - 1 && '/'}
                                    </React.Fragment>
                                ))}
                            </Typography.Text>
                            <Flex gap={10} align='center' justify='center' style={{ width: '50%' }}>
                                <Flex vertical align='center'>
                                    <Button
                                        type='text'
                                        icon={<PlusOutlined style={{ fontSize: 50, cursor: 'pointer' }} />}
                                        style={{ width: 100, height: 100 }}
                                        onClick={addColletionList}
                                    />
                                    MyList
                                </Flex>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{ backgroundColor: "#FF870E", height: "auto" }}
                                    icon={<CaretRightOutlined style={{ fontSize: 50 }} />}
                                    onClick={readBook}
                                    block>
                                    <Typography.Text style={{ fontFamily: 'optima', fontSize: '40px', color: 'white', fontWeight: '800' }}>Play</Typography.Text>
                                </Button>
                                <Flex vertical align='center'>
                                    <Button
                                        type='text'
                                        icon={<InfoCircleOutlined style={{ fontSize: 50, cursor: 'pointer' }} />}
                                        style={{ width: 100, height: 100 }}
                                        onClick={getInfo}
                                    />
                                    Info
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        gap={20}
                        justify='center'
                        align='flex-start'
                        style={{ width: 'auto', height: '30%', backgroundColor: "#FF870E4D", borderRadius: '20px' }}
                    >
                        <DislikeButton />
                        <LikeButton />
                    </Flex>
                </Flex>
            </Flex>
            <Flex vertical gap={30} align="flex-start" justify="center" style={{ width: '90%', height: '40%' }}>
                <Typography.Title
                    level={3}
                    style={{ fontFamily: 'Bungee', color: 'white', fontSize: '30px', fontWeight: 'lighter' }}>
                    YOU MAY ALSO LIKE...
                </Typography.Title>
                <Flex gap={60} align="center" justify="center">
                    <BookContent content={sample} />
                    <BookContent content={sample} />
                    <BookContent content={sample} />
                </Flex>
            </Flex>
        </Flex>

    );
};

export default BookFrame;