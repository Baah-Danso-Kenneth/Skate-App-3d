import React from 'react'
import { Bounded } from '../../shared/Bounded'
import { Heading } from '../../Heading'
import Link from 'next/link'
import { ButtonLink } from '../../ButtonLink'
import { WideLogo } from './WideLogo'
import { TallLogo } from './TallLogo'

function HeroComponent() {
  return (
      <Bounded 
      className='bg-brand-pink relative
       h-dvh overflow-hidden
        bg-texture
        text-zinc-800'>

          <div className='absolute inset-0 flex items-center pt-20'>
            <WideLogo className='w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block'/>
            <TallLogo className='w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden'/>
          </div>

      <div className='absolute inset-0  mx-auto mt-10 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16'>
        <Heading className='relative max-w-2xl place-self-start '>
            Escape the cul-de-sac.
          </Heading>

          <div className="flex relative w-full items-center flex-col justify-between ~gap-2/4 lg:flex-row">

          <div className='max-w-[45ch] font-semibold ~text-lg/xl'>
            <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium explicabo fuga placeat totam sunt laborum alias eaque error dignissimos quia.</p>
          </div>

       <ButtonLink href='#' icon='skateboard'>
          skate board
       </ButtonLink>

        </div>
      </div>

    </Bounded>
  )
}

export default HeroComponent