import { Link } from "react-router-dom";

function Container1(){

    return(
    <section class="main-container" >
    <div className="location" id="home">
    <h1 id="home">最近看過</h1>
    <div className="box">
    <Link to="/Example"><img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt=""/></Link>
    <a href=""><img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt=""/></a>
    <a href=""><img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt=""/></a>
    </div>
  
</div>

<h1 id="myList">可能喜歡</h1>
<div className="box">
<a href="">
  <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt=""/></a>
    <a href=""><img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt=""/></a>
    <a href=""><img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt=""/></a>
</div>

<h1 id="tvShows">童話類別一</h1>
<div className="box">
  
  
  {/* <!--   放我們要的繪本圖片          -->           */}
  
</div>


<h1 id="movies">童話類別二</h1>
<div className="box">
  {/* <!--   放我們要的繪本圖片          --> */}
  

</div>

<h1 id="originals">童話類別三</h1>
<div className="box">
  
  
</div>
</section>
    );
}

export default Container1;

