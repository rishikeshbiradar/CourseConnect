import React from 'react'

const Banner = ({src,desc}) => {
  return (
    <div>
        <div className="logo-img">
            <img src={src} alt={desc} />
        </div>
    </div>
  )
}

export default Banner;