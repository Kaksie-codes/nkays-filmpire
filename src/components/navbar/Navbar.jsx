import React, { useEffect, useState } from 'react'
import Logo from '../Logo';
import { BsSearch, BsBell, BsChevronDown } from 'react-icons/bs'
import Avatar from '../../assets/Netflix-avatar.png'
import './navbar.css';
import AccountsMenu from '../AccountsMenu';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchedMovies } from '../../features/userSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    

    const changeNavbar = () => {
      if(window.scrollY > 100){
        setShow(true)
      }else{
        setShow(false)
      }
    }

    async function fetchMovies(event) {
      event.preventDefault();
      const api_key ="a3ec5cef31325905723a0ad860da9c7e";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}`;
      const response = await axios.get(url);
      // return response.data.results;
      const movies = response.data.results;
      dispatch(setSearchedMovies(movies))
      // console.log("Submitted:", response.data.results);
      setSearchValue("");
    }
  
    function handleKeyDown(event) {
      if (event.keyCode === 13) {
        fetchMovies(event);
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNavbar)
      return () => window.removeEventListener('scroll', changeNavbar)
    },[show])

  return (
    <nav className={`nav ${show ? 'nav__black' : ''}`}>
        <div className="container nav__container">
            <Logo/> 
             
            <ul className={`nav__links ${!showMobileNav ? 'hide': ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Films</a></li>
                <li><a href="#">New & Popular</a></li>
                <li><a href="#">My List</a></li>
                {/* <li><a href="#">Browse by languages</a></li> */}
            </ul>  
                     
            <div className="nav__right">
                <div className="nav__search" >
                  <form className="searchbox">
                    <BsSearch className="search-icon"/>  
                    <input type="text" 
                      placeholder="Search Netflix"
                      onChange={(e) => setSearchValue(e.target.value)}                      
                      onKeyDown={handleKeyDown}
                      value={searchValue}
                      />
                  </form>
                    <BsBell className="icon"/>
                </div>
                <div className="mobile__toggle" onClick={() => setShowMobileNav(!showMobileNav)}>
                  <div className="title">
                        <p>browse</p>
                        <BsChevronDown className="_icon"/>
                  </div>                        
                </div>
                <div className="settings" onClick={() => {setShowSettings(!showSettings)}}>
                    <div className="avatar">
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <BsChevronDown className={`icon ${showSettings && 'rotate'}`}/>
                    {showSettings && <AccountsMenu/>}
                </div>
            </div>           
        </div>        
    </nav>
  )
}

export default Navbar