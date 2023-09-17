import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { setUserName } from '../../features/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './signinpage.css'

const Signinpage = () => {
  const [formData, setformData] = useState({ email:"", password:"" });
  const [type, setType] = useState('password');
  const [signUp, setSignUp] = useState(false);
  // const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setformData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })    
  }

  //Function for Hiding/Revealing Password
  const hideShow = (name) => {
    if (name === 'password') {
      setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    } else if (name === 'passwordCheck') {
      setConfirmType((prevConfirmType) =>
        prevConfirmType === 'password' ? 'text' : 'password'
      );
    }
  };

  //Function for signing up user with google firebase authentication
  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/movies");  
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // navigate("/"); 
    });
  }

  return (
    <div className="signup-page">
    <nav>
      <div className="nav__container container">
        <Link to="/">
          <Logo/> 
        </Link>          
        <button className="btn btn-rounded">Sign Up</button>            
      </div> 
    </nav>
    <div className="signup-modal">
      <h3>Sign In</h3>
      <form>
        <div className="password_input">
          <input 
            type="email" 
            autoComplete="email" 
            maxLength="50" 
            minLength="5" 
            name="email" 
            onChange={handleChange} 
            value={formData.email}
            className={formData.email !== "" ? "has-value" : ""}
          />
          <span className={formData.email.length > 0 ? "has-value" : ""}>Email address</span>
        </div>
        <div className="password-input">
          <input 
            type={type}
            autoComplete="password" 
            maxLength="50"
            minLength="5" 
            name="password" 
            onChange={handleChange} value={formData.password}
            className={formData.password.length > 0 ? "has-value" : ""}
          />
          {type === 'password' ? (
            <VisibilityIcon className="icon" onClick={() => hideShow('password')} />
              ) : (
            <VisibilityOffIcon className="icon" onClick={() => hideShow('password')} />
          )}
          <span className={formData.password.length > 0 ? "has-value" : ""}>Password</span>
        </div>           
        <button type="submit" className="button" onClick={signInUser}>Sign In</button>
      </form>
      <p>New to Netflix? <b onClick={() => navigate("/signup")}>Sign Up Now</b></p>
    </div> 
  </div>
  )
}

export default Signinpage