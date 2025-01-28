import { KeyTextField } from '@prismicio/client'
import React from 'react'

type Props = {
    youtubeID: KeyTextField
}

function LazyYouTubePlayer({youtubeID}: Props) {
    return (
        <div className="relative h-full w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeID}?autoplay=1&mute=1&loop=1&playlist=${youtubeID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="pointer-events-none h-full w-full border-0"
          />
        </div>
      );
}

export default LazyYouTubePlayer