import React from 'react'
import { Bounded } from '../../shared/Bounded'

function HeroComponent() {
  return (
      <Bounded 
      className='bg-brand-pink relative
       h-dvh overflow-hidden
        bg-texture
        text-zinc-800'>
        <div><h1 className='font-bowlby text-3xl'>Lorem ipsum dolor sit amet.</h1></div>
        <div><h1 className='font-dmMono'>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium explicabo fuga placeat totam sunt laborum alias eaque error dignissimos quia.</h1></div>
        <div>
            <button>skate board</button>
        </div>
    </Bounded>
  )
}

export default HeroComponent