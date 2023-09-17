import React from 'react'
import Skeleton from './Skeleton'

const BannerSkeleton = () => {
  return (
    <div className='banner skeleton'>
        <Skeleton classes="title width-50"/>
        {/* <div className="banner__contents">
            
        </div> */}
        
        <Skeleton classes="text banner__button"/>
        <Skeleton classes="text width-50"/>
        <Skeleton classes="text width-50"/>
    </div>
  )
}

export default BannerSkeleton