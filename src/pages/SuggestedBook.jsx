import { useEffect, useState } from "react";
import { bookApi } from "../api/book";
import { contentApi } from '../api/content';
import { Buffer } from 'buffer';
import { Modal, Button } from 'antd';
import 'antd/dist/reset.css';
import './MainPage.css';

// TODO: 底下是如何拿到所有繪本，及怎麼拿到他的封面（第1張照片）的範例，基本上照著參考就會知道怎麼拿其他的頁面了，如果不知道資料的結構的話記得 console.log 看一下
const SuggestedBook = (props) => {
    console.log(props.books);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

      const handleOk = () => {
        setVisible(false);
      };

      const handleCancel = () => {
        setVisible(false);
      };
    return (
        <div className="suggestionArea">
            {props.books.map((books, index) => (
                <img className="suggestedBook" onClick={showModal} key={index} src={books.profile_image} alt={`Image ${index}`}  />
            ))}
            <Modal
                
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                                
                footer ={null}
            >
            <p>Some Content</p>
            </Modal>
        </div>
    )
}

export default SuggestedBook
