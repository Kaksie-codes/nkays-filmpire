import React, { useState } from 'react'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { IoMdThumbsUp,IoMdThumbsDown } from 'react-icons/io'
import { BsCheck } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ isLargeRow, movie }) => {
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
        // alert('Hovered')
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const ConditionalComponent = () => {
        return (
          <div className='hover'>
            <div className="image-video-container">
                <img                    
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    onClick={() => navigate('/player')}
                />                
            </div>
            <div className="info-container">
                {/* <h3 className='name'>Hunter</h3> */}
                <h3 className="name" onClick={() => navigate('/player')}>{movie?.name || movie?.title}</h3>
                <div className="icons">
                    <div className="controls">
                        <IoPlayCircleSharp title='Play' onClick={() => navigate('/player')}/>
                        <IoMdThumbsUp title='Like'/>
                        <IoMdThumbsDown title='Dislike'/>
                        <AiOutlinePlus title='Add'/>
                    </div>
                    <div className="info">
                        <BiChevronDown title='More Info'/>
                    </div>
                </div>
                <div className="genres">
                    <ul>
                        <li>Action</li>
                        <li>Drama</li>
                        <li>Crime</li>                    
                    </ul>
                </div>        
            </div>                
          </div>
        );
      };

return (
    <div className={`movie-card`}         
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >         
        <img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>        
        {/* <p>{movie?.name || movie?.title}</p>         */}
        {isHovered && <ConditionalComponent />}        
    </div>
  )
}

export default MovieCard