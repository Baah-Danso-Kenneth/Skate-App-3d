import React from 'react'

import { Bounded } from '../../shared/Bounded'
import { Heading } from '../../Heading'
import { theTeam } from '@/app/data'
import TeamCard from '../../shared/TeamCard'

function TheTeam() {
  return (
    <Bounded className='bg-texture bg-brand-navy'>
      <Heading
      className='mb-8 text-center text-white'
      >
      The Team
        </Heading>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
          {theTeam.map((items,index)=>(
            <TeamCard items={items} key={index}/>
          ))}
        </div>
      </Bounded>
  )
}

export default TheTeam