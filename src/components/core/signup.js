import {React,useEffect} from "react";
// import Pirate from "../../assests/pirate.png";
// import Itachi from "../../assests/images/itachij.png";

const SignUp = () => {
  useEffect(()=>{
    document.title='Register Yourself!'
  },[])
  return (
    <div id="signup-layout">
      <form id="user-signup">
        <label htmlFor="signup-name" className="label">
          Full Name
        </label>
        <br />
        <input
          type="text"
          id="signup-name"
          placeholder="Your Name"
          className="signup-input"
        />
        <br />
        <label htmlFor="signup-id" className="label">
          Email Id
        </label>
        <br />
        <input
          type="email"
          className="signup-input"
          id="signup-id"
          placeholder="Your Email-id"
        />
        <br />
        <label htmlFor="signup-password" className="label">
          Password:
        </label>
        <br />
        <input
          type="password"
          id="signup-password"
          min="6"
          placeholder="Your Password"
          className="signup-input"
        />
        <br />
        <label htmlFor="signup-confirm-password" className="label">
          Password:
        </label>
        <br />
        <input
          type="password"
          id="signup-confirm-password"
          min="6"
          placeholder="Confirm Your Password"
          className="signup-input"
        />
        <br />
        <button type="submit" id="signup-submit" className="submit signup">
          Register
        </button>
      </form>
      <img src="/assests/images/pirate.png" alt="pirate-king" id="pirate" />
    </div>
  );
};
export default SignUp;
