import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Logo from '../../components/Logo';
import Tabs from '../../components/tabs/Tabs'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './homepage.css'
import Moretext from '../../components/moretext/Moretext';
import Faqs from '../../components/faqs/Faqs';
import Footer from '../../components/footer/Footer';
import { useSelector, useDispatch } from 'react-redux'
// import { setEmail } from '../../features/signupSlice';
import { setEmail } from '../../features/signUpSlice';

const Homepage = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");



  const changeNavbar = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  function handleSignIn(e){
    e.preventDefault()
    // setEmail("");
    navigate("/signin");    
  }

  function handleSignUp(e){
    e.preventDefault()    
    dispatch(setEmail(userEmail)) 
    // setUserEmail("");
    navigate("/signup");    
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)
    return () => window.removeEventListener('scroll', changeNavbar)
  },[show])

  return (
    <div className="homepage">
      <div className="homepage__topsection">  
        <div className={`nav ${show ? 'nav__black' : ''}`}>
          <div className="nav__container container">
            <Logo/>
            <button className="btn btn-rounded" onClick={handleSignIn} >Sign In</button>            
          </div>   
        </div>
        <div className="content">
          <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
              <div>
                <input type="email" 
                autoComplete="email"
                maxLength="50" onChange={() => setUserEmail(e.target.value)}
                minLength="5"/>
                <span>Email address</span>
              </div>               
              <button className="btn btn-large" onClick={handleSignUp}>
                Get Started <ArrowForwardIosIcon/>
              </button>                               
            </form>
          </div>          
        </div>
        
      </div>
      <div className="homepage__bottomsection">
        <Tabs/>
        <Moretext/>
        <Faqs/>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage