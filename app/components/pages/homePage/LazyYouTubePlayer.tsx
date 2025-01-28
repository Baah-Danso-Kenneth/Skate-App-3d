"use client"

import { KeyTextField } from '@prismicio/client'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    youtubeID: KeyTextField
}

function LazyYouTubePlayer({youtubeID}: Props) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=>{
    const currenctContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setIsInView(true)
        }
      },{threshold:0, rootMargin: "1500px"}
    );

    if(currenctContainerRef){
      observer.observe(currenctContainerRef)
    }

    return()=>{
      if(currenctContainerRef){
        observer.unobserve(currenctContainerRef);
      }
    }
  })

    return (
        <div ref={containerRef} className="relative h-full w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeID}?autoplay=1&mute=1&loop=1&playlist=${youtubeID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="pointer-events-none h-full w-full border-0"
          />
        </div>
      );
}

export default LazyYouTubePlayer