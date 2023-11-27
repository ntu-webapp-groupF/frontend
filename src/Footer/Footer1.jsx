
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer,RWD.css'; 
function Footer1(){
    return(
        <div>

        <section className="link">
        {/* 社群 */}
        <div className="media">
          <a href="#" ><FaFacebook/></a>
          <a href="#"><FaInstagram/></a>
        </div>
  
        {/* 相關資訊 */}
        <div className="sub-links">
          <ul>
            <li><a href="#">Audio and Subtitles</a></li>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </section>
 
      <footer>
        <p> 2023 web app project</p>
      </footer>
      
      </div>
    );
}
export default Footer1;