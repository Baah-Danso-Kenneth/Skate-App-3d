import Image from 'next/image'
import React from 'react'
import { Logo } from '../Logo'
import { Bounded } from './Bounded'
import { footerSettings, skate } from '@/app/data'
import Link from 'next/link'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='bg-texture overflow-hidden bg-zinc-900 text-white'>
        <div className='relative h-[120vh] ~p-10/16 md:aspect-auto'>
         <Image src="/images/footer-base.jpg" alt="chromium" fill className='object-cover object-left-top' />
         <Logo className='pointer-events-none relative h-20 mix-blend-exclusion md:h-28'/>
        </div>

        <Bounded as="nav">
            <ul className='flex flex-wrap justify-center gap-8 ~text-lg/xl'>
             {footerSettings.map((item)=>(
                <li key={item.index} className='hover:underline'>
                 <Link href={item.href}>
                   {item.name}
                 </Link>
                </li>
             ))}
            </ul>
        </Bounded>
    </footer>
  )
}

export default Footer