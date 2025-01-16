import React from 'react'
import { Bounded } from '../../shared/Bounded'

function HeroComponent() {
  return (
      <Bounded>
        <div><h1>Lorem ipsum dolor sit amet.</h1></div>
        <div><h1>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium explicabo fuga placeat totam sunt laborum alias eaque error dignissimos quia.</h1></div>
        <div>
            <button>skate board</button>
        </div>
    </Bounded>
  )
}

export default HeroComponent