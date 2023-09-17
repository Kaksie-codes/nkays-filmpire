import React, { useState } from 'react';
import { FaTags } from 'react-icons/fa'
import { FaTabletAlt } from 'react-icons/fa'
import { FaDoorOpen } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import './tabs.css';

const Tabs = () => {
    const [toggled, setToggled] = useState('tab-1');

  return (
    <section className="tabs">        
        <div className="top">
            <div className="container__small tabs__top-container">
                <div id="tab-1" className={`tab-item ${toggled === 'tab-1' && 'tab-border'}`} onClick={() => setToggled('tab-1')}>                
                    <FaDoorOpen className="icon"/>
                    <p className="hide-sm">Cancel anytime</p>
                </div>
                <div id="tab-2" className={`tab-item ${toggled === 'tab-2' && 'tab-border'}`} onClick={() => setToggled('tab-2')}>
                    <FaTabletAlt className="icon"/>
                    <p className="hide-sm">Watch anywhere</p>
                </div>
                <div id="tab-3" className={`tab-item ${toggled === 'tab-3' && 'tab-border'}`} onClick={() => setToggled('tab-3')}>
                    <FaTags className="icon"/>
                    <p className="hide-sm">Pick your price</p>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className={`container__small ${toggled === 'tab-1' ? 'show' : ''}`} id="tab-1-content">
                <div  className="tab-content-item">
                    <div className="tab-1-content-inner">
                        <div>
                            <h3>
                                If you decide Netflix isn't for you - no problem. No commitment. Cancel Online anytime.
                            </h3>
                            <a href="#" className="btn btn-lg">Watch Free for 30 Days.</a>
                        </div>                    
                        <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="cancel"/>
                    </div>
                </div>
            </div>
            
            
            <div className={`container__small ${toggled === 'tab-2' ? 'show' : ''}`} id="tab-2-content">
                <div  className="tab-content-item">
                    <div className="tab-2-content-top">
                        <h3>
                            Watch TV shows and movies anytime, anywhere - personalized for you.
                        </h3>
                        <a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
                    </div>
                    <div className="tab-2-content-bottom">
                        <div>
                            <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt=""/>
                            <h3>Watch on your TV</h3>
                            <p className="text-dark">Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt=""/>
                            <h3>Watch instantly or download for later</h3>
                            <p className="text-dark">Available on phone, tablets wherever you go.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt=""/>
                            <h3>Use any computer.</h3>
                            <p className="text-dark">Watch right on Netflix.com.</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className={`container__small ${toggled === 'tab-3' ? 'show' : ''}`} id="tab-3-content">                
                <div className="tab-content-item">
                    <div className="text-center">
                        <h3>
                            Choose one plan and watch everything on Netflix.
                        </h3>
                        <a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price after free month ends on 6/19/19</td>
                                <td>$8.99</td>
                                <td>$12.99</td>
                                <td>$15.99</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><FaTimes/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD Available</td>
                                <td><FaTimes/></td>
                                <td><FaTimes/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>First month free</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Tabs