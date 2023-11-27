import React, { useState } from 'react';
import { FaSearch,FaBookmark,FaUser,FaArrowUp } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import './search.css';

function Header1() {

    const [showInput, setShowInput] = useState(false);


    
        return (
            <header>
                {/* LOGO部分 */}
                <div className="TaleHugLogo">
                    <Link to="/ThreeD">
                        <img alt="Logo" />
                    </Link>
                </div>
    
                {/* <div>{showMyList && <MyList/>}</div> */}
                
                {/* 主導航 */}
                <nav className="main-nav">
                    <Link to="/Container1" >主頁</Link>
                    <Link to="/tvShows" >童話類別一</Link>
                    <Link to="/movies" >童話類別二</Link>
                    {/* 登錄表單 */}
                    {/* <div>{showLoginForm && < />}</div> */}
                    <Link to="/originals" >童話類別三</Link>
                    <Link to="/recentlyWatched" >最近看過</Link>
                </nav>
    
                {showInput && <input type="text" placeholder="Search" autoFocus />}
                
                {/* 子導航（搜尋功能） */}
                <nav className="sub-nav" >

                    <a onClick={() => setShowInput(!showInput)}><FaSearch /> {/* 搜索圖標 */}</a>

                    {/* 書籤圖標 */}
                    <Link to="/MyList"><FaBookmark /></Link>

                    {/* 用戶賬戶連結 */}
                    <Link to="/Login"><FaUser /></Link>

                    <Link to="/upload"> <FaArrowUp /> </Link>

                    <Link to="/UserSwith"><img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="User" /></Link>

                </nav>
            </header>
        );
    }
    
    export default Header1;
    