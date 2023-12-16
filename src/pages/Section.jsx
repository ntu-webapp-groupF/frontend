import { useEffect, useState,Fragment  } from "react";
import { bookApi } from "../api/book";
import { contentApi } from '../api/content';
import { Buffer } from 'buffer';
import './MainPage.css';
import { Modal, Button } from 'antd';

// TODO: 底下是如何拿到所有繪本，及怎麼拿到他的封面（第1張照片）的範例，基本上照著參考就會知道怎麼拿其他的頁面了，如果不知道資料的結構的話記得 console.log 看一下
const Section = (props) => {
    console.log(props.title,props.books);
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
        <Fragment>
            <div className="sectionText">{props.title}</div>
            <div className="sectionArea">
                {props.books.map((books, index) => (
                    <div className="sectionBook">
                    <img className="sectionBookImg" onClick={showModal} key={index} src={books.profile_image} alt={`Image ${index}`}  />
                    </div>
                ))}
            </div>
            <Modal
                
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer ={null}
                width={1000}
                height={1000}
                colorBgMask={"red"}
            >
            <p>Some Content</p>
            </Modal>
        </Fragment>
    )
}

export default Section
