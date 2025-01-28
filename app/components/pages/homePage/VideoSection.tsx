import React from 'react'
import { Bounded } from '../../shared/Bounded'
import LazyYouTubePlayer from './LazyYouTubePlayer'

const youtubeID='44I29krtxa'

function VideoSection() {
  return (
    <Bounded className='bg-texture bg-zinc-900'>
    <section>
        <h2 className='sr-only'>Video reel</h2>
        <div className="relative aspect-video">
            <LazyYouTubePlayer youtubeID={youtubeID}/>
        </div>
     </section>
    </Bounded>
  )
}

export default VideoSection