import React from 'react'
import VideoBaytik from '../assets/video/video.webm'

const ComponentVideo = () => {
  return (
    <section>
      <div className="lg:pl-[95px] mb-16 mx-auto max-lg:pl-[60px] max-md:pl-0">
        <div className="w-full py-5">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ pointerEvents: 'none' }}
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
