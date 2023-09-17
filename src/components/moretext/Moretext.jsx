import React from 'react'

const Moretext = () => {
  return (
    <section className="more">
        <div className="more-text">
            <div className="container">                
                <div className="media">
                    <div>
                        <div className="image">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                        </div>                       
                        <video data-uia="our-story-card-video" autoPlay playsInline muted  loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="texts">
                    <h1>Enjoy on your TV.</h1>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                </div>
             </div>
        </div>

        <div className="more-text">        
            <div className="container">
                <div className="media">
                    <div className="image">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/> 
                    </div>                    
                    <div className="our-story-card-animation" >
                        <div className="our-story-card-animation-image"><img alt=""
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/></div>
                        <div className="our-story-card-animation-text">
                            <div id="" className="text-0">Stranger Things</div>
                            <div id="" className="text-1">Downloading...</div>
                        </div>
                        <div className="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div>
                    </div>
                </div>
                <div className="texts">
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>
            </div>
        </div>

        <div className="more-text special">
            <div className="container">
                <div className="texts">
                    <h1>Watch everywhere.</h1>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
                <div>
                </div>
            </div>
        </div>

        <div className="more-text last">        
            <div className="container">
                <div className="media">
                    <div className="image">
                         <img alt="" className="our-story-card-img"
                        src="https://occ-0-4616-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
                        data-uia="our-story-card-img"/>
                    </div>                    
                </div>
                <div className="texts">
                    <h1>Create profiles for kids.</h1>
                    <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Moretext