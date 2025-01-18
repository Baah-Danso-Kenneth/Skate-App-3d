"use client"
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { Bounded } from '../../shared/Bounded'
import { Heading } from '../../Heading'
import { skateBoards } from '@/app/data'
import { FaStar } from 'react-icons/fa6'


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

        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {skateBoards.map(({id,image,price,rating})=>(
            <div key={id} className=''>
                <div className='flex items-center justify-between ~text-sm/2xl'>
                  <span className='font-mono'>${price.toFixed(2)}</span>
                  <span className='inline-flex items-center gap-1 font-mono'>
                    <FaStar className='text-yellow-400'/> {rating}
                  </span>
                </div>
                <Image src={image} 
                alt="image" 
                className='w-full h-full'
                width={300} height={300}/>
            </div>
        ))}
        </div>
        
    </Bounded>
  )
}

export default ProductGrid