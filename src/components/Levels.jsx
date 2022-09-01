import React from 'react'
import mazo from '../assets/images/mazo/MAZO/masodecartasxl.png'

export const Levels = ({levels,played,draw}) => {
const dorso = 'https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png'
  

  return (
        <div className='row'>
          <div className='clickme'   onClick={()=>draw()}>
            <h3> ¡Click Here! </h3>
            <img key={mazo} className="mazo" src={mazo}></img>
          </div>
            {levels.map((lvl)=> <img  key={lvl.path} className='carta' src={lvl.state? lvl.path:dorso}></img> )}
            <div className='clickme'>
            <p> Graveyard </p>{played.length!==0?<img key={'graveyard'} className="carta" src={played[played.length-1].path}></img>:null}
            
            </div>
        </div>
        
  )
}
