import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';

const Banner = ({movie, type}) => {
    const style = {
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  return (
    <header className="banner" style={style}>
        { type && (
            <div className="category">
                <span>{type === 'movie' ? 'Movies' : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option> 
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <div className="banner__contents">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play <FaPlay/> </button>
                <button className="banner__button inverse">My List <HiInformationCircle/></button>
            </div>
            <p>
                {truncate(movie?.overview,150)}                
            </p>
            <div className="banner--fadebottom"/>
        </div>
    </header>
  )
}

export default Banner