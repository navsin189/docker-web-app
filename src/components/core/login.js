import {React,useEffect} from "react";
import "../../components_css/core_css/login-signup.css";
// import Spongebob from "../../assests/images/spongebob.png";
// import Patrick from "../../assests/images/patrick.png";

const Login = () => {
  useEffect(()=>{
    document.title='Login'
  },[])
  return (
    <div id="login-layout">
      {/* <img src={Patrick} alt="spongebob-welcome" id="patrick" /> */}

      <form id="user-login">
        <label htmlFor="login-id" className="label">
          Email Id
        </label>
        <br />
        <input
          type="email"
          className="login-input"
          id="login-id"
          placeholder="email-id"
        />
        <br />
        <label htmlFor="login-password" className="label">
          Password:
        </label>
        <br />
        <input
          type="password"
          id="login-password"
          min="6"
          placeholder="Password"
          className="login-input"
        />
        <br />
        <button type="submit" id="login-submit" className="submit">
          Login
        </button>
      </form>
      <img src="/assests/images/spongebob.png" alt="sponge" id="sponge" />
    </div>
  );
};
export default Login;
