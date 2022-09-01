import React, { useState } from 'react'

export const Horses = ({horses}) => {
let grid = (pos)=>{
  return (`grid-template-areas:${pos}`)
}

  return (<div className='horses'>
      {horses.map((horse)=>
        <div className='row'  key={horse.path}>
         <img  className='carta' style={{gridArea:'pos'+horse.pos}} src={horse.path} alt="" />
        </div>
      )}
    
    </div>
  )
}
