import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Moviepage from './pages/moviepage/Moviepage'
import Profilepage from './pages/profilepage/Profilepage'
import Signinpage from './pages/signinpage/Signinpage'
import Signuppage from './pages/signuppage/Signuppage'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          // console.log(userAuth)
          dispatch(login({
            userId: userAuth.uid,
            email: userAuth.email            
          }))
          navigate('/movies')
        }else{
            dispatch(logout())
            navigate("/"); 
        }
      });
      return unsubscribe;
    },[dispatch])

    // const signUp = () => {
    //   setSignUp(true)
    // }

  return (
    <>    
      <Routes>
        {!user ? (
          <>
            <Route index Component={Homepage}/>            
            <Route path='signin' Component={Signinpage}/>
            <Route path='signup' Component={Signuppage}/>
          </>
        ) : (
          <>
            <Route path='movies' Component={Moviepage}/>
            <Route path='profile' Component={Profilepage}/>
          </>
        )} 
      </Routes>      
    </>
  )
}

export default App
