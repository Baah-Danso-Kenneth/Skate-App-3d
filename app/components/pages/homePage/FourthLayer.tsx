import React from 'react'
import CraftedComponent from './CraftedComponent'

function FourthLayer() {
  return (
    <div>
    <CraftedComponent
      className="gap-20 Lime"
      heading="Crafted for the kickflip"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque omnis quis. Eos deserunt corrupti magnam corporis aliquid? Ad
        accusantium molestias voluptatum quasi error omnis cumque placeat inventore expedita consectetur?"
      image={""}
      btnText="back life"
      bgImage="/images/paint-background.png"
      fgImage="/images/guy-4.png"
      href={""}
      reverse={true} 
      themeOverride="Lime"
    />
  </div>
  )
}

export default FourthLayer