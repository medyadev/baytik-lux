import React from 'react'
import VideoBaytik from '../assets/video/video.webm'

const ComponentVideo = () => {
  return (
    <section>
      <div className="lg:pl-[95px] 2xl:w-[1170px] mx-auto max-lg:pl-[60px] max-md:pl-0">
        <div className="w-full py-5">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ 'pointer-events': 'none' }}
            className="w-full"
          >
            <source src={VideoBaytik} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default ComponentVideo