import Image from 'next/image';
import React from 'react'
import { ButtonLink } from '../ButtonLink';
import { SkaterScribble } from './SkaterScribblePath';
import clsx from 'clsx';

type Props = {
    items:{
        firstName:string;
        lastName:string;
        fore_ground:string;
        background:string;
        index:number;
    }
}

function TeamCard({items}: Props) {
    const colors = [
        "text-brand-blue",
        "text-brand-lime",
        "text-brand-orange",
        "text-brand-purple",
    ]

    const scribbleColor = colors[items.index];

  return (
    <div className='skater group relative flex flex-col items-center gap-4'>
        <div className='stack-layout overflow-hidden'>
        <Image src={items.background} 
        alt={items.firstName}
         width={300} height={100}
         className='scale-110 transform transition-all duration-100 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[0.8]'
         />
         
         <SkaterScribble className={clsx("relative",scribbleColor)}/>
        <Image src={items.fore_ground} 
        alt={items.lastName}
         width={300} height={100}
         className='scale-110 transform transition-all duration-100 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[0.8]'/>

<div className='relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent'/>
<h3 className='relative
         grid place-self-end
         justify-self-start p-2 font-sans text-brand-gray
        ~text-2xl/3xl
         '>
            <span className='mb-[-.3em] block'>{items.firstName}</span>
            <span className='block'>{items.lastName}</span>
         </h3>
        </div>
        <ButtonLink href="#">Build their board</ButtonLink>
    </div>
  )
}

export default TeamCard