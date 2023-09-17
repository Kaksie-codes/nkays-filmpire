import './skeleton.css'
import React from 'react'

const Skeleton = ({type}) => {
    
    const BannerSkeleton = () => {
        return (
            <div className="banner__skeleton">
                <div className="banner__skeleton-content">
                    <div className="banner__skeleton-title"></div>
                    <div className="banner__skeleton-buttons">
                        <div className="banner__skeleton-button"></div>
                        <div className="banner__skeleton-button"></div>
                    </div>
                    <div className="banner__skeleton-texts">
                        <div className="banner__skeleton-text"></div>
                        <div className="banner__skeleton-text"></div>
                        <div className="banner__skeleton-text"></div>
                    </div>
                </div>
            </div>
        )
    }

    const RowSkeleton = () => {
        return (
            <div className="row__skeleton">
                <div className="row__skeleton-title"></div>
                <div className="row__wrapper-skeleton">
                    <div className="movie row__wrapper-movie"></div>
                    <div className="movie row__wrapper-movie"></div>
                    <div className="movie row__wrapper-movie"></div>
                    <div className="movie row__wrapper-movie"></div>
                    <div className="movie row__wrapper-movie"></div>                                       
                </div>
            </div>
        )
    }
    
    if(type === 'banner') return (<BannerSkeleton/>)
    if(type === 'row') return (<RowSkeleton/>)
  
}

export default Skeleton