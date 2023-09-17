import React from 'react';
import './profilepage.css'
import Avatar from '../../assets/Netflix-avatar.png'
import Navbar from '../../components/navbar/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase'

const Profilepage = () => {
  const { email } = useSelector(state => state.user.user);
    const navigate = useNavigate();

    const handleClick = () => {
        auth.signOut();
        navigate('/')
    }

  return (
    <div className="profilepage">
        <Navbar/>
        <div className="profilepage__body">
            <h2>Edit Profile</h2>
            <div className="profilepage__info">
                <div className="_avatar">
                    <img src={Avatar} alt="" />
                </div> 
                <div className="profilepage__details">
                    <h3>{email}</h3>
                    <div className="profilepage__plans">
                        <h3>plans</h3>
                        <span>Renewal Date  2nd jan 2057</span>
                        <div className="plan">
                            <div>
                                <p>NetFlix Standard</p>
                                <span>480p</span>
                            </div>
                            <button className="btn">Subscribe</button>
                        </div>
                        <div className="plan">
                            <div>
                                <p>NetFlix Basic</p>
                                <span>720p60</span>
                            </div>
                            <button className="btn">Subscribe</button>
                        </div>
                        <div className="plan">
                            <div>
                                <p>NetFlix Premium</p>
                                <span>2440p60</span>
                            </div>
                            <button className="btn">Subscribe</button>
                        </div>
                        <button className="btn-wide btn" onClick={handleClick}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default Profilepage