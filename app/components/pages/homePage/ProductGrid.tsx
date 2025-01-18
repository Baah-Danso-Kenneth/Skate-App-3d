"use client"
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { Bounded } from '../../shared/Bounded'
import { Heading } from '../../Heading'
import { skateBoards } from '@/app/data'
import { FaStar } from 'react-icons/fa6'
import { ButtonLink } from '../../ButtonLink'
import SkateBoardContent from './SkateBoardContent'


function ProductGrid() {
    const [prices, setPrices] = useState<string[]>();

    useEffect(() => {
        const updatedPrices = skateBoards.map((item) =>
          item.price ? `${item.price}` : "Price Not Available"
        );
        setPrices(updatedPrices);
      }, []);

  return (
    <Bounded
     className='bg-texture bg-brand-gray'
    >
        <Heading className='text-center ~mb-4/6 ' as="h2">
        Latest Drop
        </Heading>

        <div className='text-center ~mb-6/10 font-mono'>
            Grab our freshest designs
        </div>

         <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          {skateBoards.map(item=>(
            <SkateBoardContent item={item}/>
          ))}
         </div>
        
    </Bounded>
  )
}

export default ProductGrid