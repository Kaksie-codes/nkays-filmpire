import React, { useEffect } from 'react';
import './moviemodal.css'

const MovieModal = ({movie}) => {
    const api_key ="a3ec5cef31325905723a0ad860da9c7e";
    useEffect(() => {
        async function fetchMovie(){
            const data = await fetch(
                `https://api.themoviedb.org/3/${
                    movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=${api_key}&language=en-US&append_to_response=videos`
            ).then(response => response.json())
            // console.log('data >>>', data)
        }
        // fetchMovie()
    },[movie])

    https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
  return (
    <div className="moviemodal">MovieModal</div>
  )
}

export default MovieModal;