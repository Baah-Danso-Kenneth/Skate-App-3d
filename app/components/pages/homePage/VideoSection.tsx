import React from 'react'
import { Bounded } from '../../shared/Bounded'
import LazyYouTubePlayer from './LazyYouTubePlayer'
import clsx from 'clsx'
import Image from 'next/image'

const youtubeID='44I29krtxa'

const MASK_CLASSES =
  "[mask-image:url(/images/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

function VideoSection() {
  return (
    <Bounded className='bg-texture bg-zinc-900'>
    <section>
        <h2 className='sr-only'>Video reel</h2>
        <div className="relative aspect-video">

        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
          )}
        />

        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
          )}
        />

        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/2 --translate-y-1/3"
          )}
        />
           <div className={clsx(MASK_CLASSES,"relative h-full ")}>
            <LazyYouTubePlayer youtubeID={youtubeID}/>
            <Image src="/images/image-texture.png" alt="" fill className="pointer-events-none object-cover opacity-50"/>
           </div>
        </div>
     </section>
    </Bounded>
  )
}

export default VideoSection