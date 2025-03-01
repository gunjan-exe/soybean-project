import React from 'react'
import HistorySection from './HistorySection'
import VideoSection from './VideoSection'
import './historycard.css';

const History = () => {
  return (
    <>
        {/* <div className='upper'>
            <div className='text-box'>
                <p>Each plant is cared for by our <br/><span>horticultural experts, so they are <br/></span>as happy as healthy as they get.</p>
            </div>
            <div className='video-box'>
            <VideoSection 
            videoSrc="https://www.youtube.com/watch?v=BiQaNR0Rycs"
            thumbnail="https://pics.craiyon.com/2024-05-01/v4VRjDb_RMS_9VKdBcgdWQ.webp"
            />
            </div>
            
    </div> */}
    <HistorySection />
    </>
  )
}

export default History
