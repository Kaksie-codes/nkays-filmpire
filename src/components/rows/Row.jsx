import React, { useEffect, useState, useRef } from 'react';
import './row.css';
import { AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import axios from '../../axios';
import MovieModal from '../moviemodal/MovieModal';
import Skeleton from '../skeletons/Skeleton';
import MovieCard from '../MovieCard';

const Row = ({title, fetctURL, isLargeRow}) => {
    const [movies, setMovies] = useState([]);    
    const rowRef = useRef();
    const [isMoved, setIsMoved] = useState(false);
    const [loading, setLoading] = useState(true); 
    const [slideNumber, setSlideNumber] = useState(0)   

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(fetctURL);
            setMovies(request.data.results);
            setLoading(false)
            return request;
        }

        fetchData();
    },[fetctURL])

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = rowRef.current.getBoundingClientRect().x - 50;
        if(direction === 'right'){
            setSlideNumber(slideNumber + 1)
            rowRef.current.style.transform = `translateX(${-240 + distance}px)`
            // rowRef.current.style.setProperty('--slider-index', 2)
        }
        if(direction === 'left' && slideNumber > 0){            
            setSlideNumber(slideNumber - 1)
            rowRef.current.style.transform = `translateX(${240 + distance}px)`
        }        
    }   

  return (
    <div className="row">        
        {
            loading ? (
                <Skeleton type="row"/>
            ) : (
                <>
                    <h3 className='row-title'>{title}</h3>
                    <div className="wrapper">
                        <div className={`sliderArrow left ${isMoved ? 'none' : ''}`} onClick={() => handleClick('left')}>
                            <AiOutlineLeft/>
                        </div>                        
                            <div className="movie__slider" ref={rowRef}>
                            {
                                 movies.map((movie) => {
                                    return (
                                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))
                                        && ( 
                                            <MovieCard isLargeRow={isLargeRow} movie={movie} key={movie.id} />
                                        )
                                    )
                                })
                            }  
                            </div>
                        <div className="sliderArrow right" onClick={() => handleClick('right')}>
                            <AiOutlineRight/>
                        </div>
                        {/* <AiOutlineRight className='sliderArrow right' onClick={() => handleClick('right')}/> */}
                    </div>
                    {/* <div className="row__slider-wrapper">
                        <div className={`slider-action left ${!isMoved && 'hidden'}`}>
                            <AiOutlineLeft  onClick={() => handleClick("left")}/>
                        </div>                        
                        <div className="row__slider" ref={rowRef}>
                            {
                                 movies.map((movie) => {
                                    return (
                                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))
                                        && ( 
                                            <MovieCard isLargeRow={isLargeRow} movie={movie} key={movie.id} />
                                        )
                                    )
                                })
                            }  
                        </div>
                        <div className={`slider-action right ${!isMoved && 'hidden'}`}>
                            <AiOutlineRight/>
                        </div>                       
                    </div> */}
                </>                
            )
        }        
    </div>
  )
}

export default Row