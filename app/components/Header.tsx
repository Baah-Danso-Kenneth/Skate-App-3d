import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'

import {navLinks} from '../data';


export default function Header() {
  return (
    <header className='header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 md:h-32'>
        <div className='mx-auto w-full grid max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]'>
            <Link href="/">
            <Logo className='text-brand-purple ~h-12/20'/>
            </Link>

            <nav className='col-span-full  row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'>
                <ul className='flex capitalize font-medium font-mono flex-wrap items-center justify-center gap-8'>
                     {navLinks.map(({name,href},index)=>(
                        <Link href={href} key={index}>
                          {name}
                        </Link>
                     ))}
                </ul>
            </nav>

            <div className='justify-self-end'>
                <ButtonLink href='' icon='cart' color='purple'
                aria-label="Cart(1)" className='font-mono'
                >
                <span className=' md:hidden'>1</span>
                <span className='hidden md:inline'>Cart(1)</span>
                </ButtonLink>
            </div>
        </div>
    </header>
  )
}