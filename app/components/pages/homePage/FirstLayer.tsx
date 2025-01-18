import React from 'react'
import CraftedComponent from './CraftedComponent'

function FirstLayer() {
  return (
    <div>
        <CraftedComponent 
          className={''}
          heading='Crafted for the kickflip'
         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque omnis quis. Eos deserunt corrupti magnam corporis aliquid? Ad
          accusantium molestias voluptatum quasi error omnis cumque placeat inventore expedita consectetur?'
         image={''} 
         btnText="shop boards" 
         bgImage='/images/paint-background.png' 
         fgImage='/images/guy-1.png'
          href={''}
          />
    </div>
  )
}

export default FirstLayer