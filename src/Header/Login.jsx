import './Login.css';
import { Link } from 'react-router-dom';


function Login(){

    return(        
    <div className="login-page" >

    <div className="login-container" style={{ textAlign: 'center' }} >
      <h1 style={{ textAlign: 'center' }}>SIGN IN</h1>
      <form className="login-form">

        <input type="text" placeholder="Email or phone number" />
        <br />

        <input type="password" placeholder="Password" />
        <br />

        <button type="submit">Sign in</button>

        <div className="login-options">
          <label><input type="checkbox" /> Remember me</label>
          {/* 这里应该使用按钮或者 onClick 事件处理程序 */}
          <a>Need help?</a>
        </div>
        {/* 这里应该使用 React Router 的 Link 组件或者指定实际的路径 */}
        <Link to="/SignUp" className='New-to-TaleHug'>New to TaleHug? Sign up now.</Link>
      </form>
    </div>
  </div>
  );
}

export default Login;
