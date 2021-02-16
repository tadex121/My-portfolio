import React from 'react'
import Video from '../assets/video1.mp4'

const home = () => {
  return (
    <>
      <video className='video' src={Video} autoPlay loop muted></video>
      <div className='center'>Web developer</div>
    </>
  )
}

export default home
