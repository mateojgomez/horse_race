import React, { useEffect, useState } from 'react'
import {Horses} from './Horses'
import {Result} from './Result'
import {Levels} from './Levels'
export const Game = ({bet,setStartGame}) => {
    const [mazo,setMazo] = useState([])
    const [levels,setLevels] = useState([])
    const [horses,setHorses] = useState([])
    const [played,setPlayed] = useState ([])
    const [game,setGame] = useState(true)
    const [winner,setWinner] = useState ({
        state:false,
        name:''
    })
    
    const shuffle = (anArray) =>{
       return anArray.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
    }   
    const draw = ()=>{
        let notMazo = mazo
        let card= notMazo.pop()

        let horsesTemp =horses
        horsesTemp.map((horse)=>{if (horse.palo==card.palo){horse.pos ++}})
        setHorses(horsesTemp)
        
        setMazo([...notMazo])
        let notPlayed= played
        notPlayed.push(card)
        setPlayed(notPlayed)
        if(mazo.length === 0){
            setMazo(shuffle(played))
            setPlayed([])
        }
        var min=11
        var max=0
        var name=''
        horses.map((horse)=>{
            if (horse.pos<min)min=horse.pos
            if (horse.pos>max){max=horse.pos;name=(horse.palo.charAt(0).toUpperCase() + horse.palo.slice(1,-1))}
        })  
           if (max>10){
               if (bet===name){
                   setWinner({state:true,name:name})
                }else{setWinner({state:false,name:name})} 
                levels.map((card)=>card.state=true)              
            }else{
                if ( min>1){
                    if (!levels[min-2].state){
                        let horsesTemp =horses
                        horsesTemp.map((horse)=>{if (horse.palo===levels[min-2].palo){
                            horse.pos= horse.pos -1
                        }})
                        let tempLevels=levels
                        tempLevels[min-2].state=true
                        setLevels([...tempLevels])
                        
                    }
               }
               
            }
        }
  
        
        useEffect(() => {
        
        let palos = ['bastos','espadas','oros','copas']
        let values = [1,2,3,4,5,6,7,10,12]
        let mazoTemp = []
        let horsesTemp=[]
        
        for (let i=0;i<=3;i++){
            
            horsesTemp.push({palo:palos[i],path:`https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-${palos[i]}-11-minimalart.png`,pos:0})
            for (let j=0;j<=8;j++){
                mazoTemp.push({palo:palos[i],path:`https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-${palos[i]}-${values[j]}-minimalart.png`,state:false})
            }
        }
        mazoTemp[4].path="https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-5-min.png"
        mazoTemp[5].path="https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-6-min.png"
        mazoTemp[6].path="https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-7-min.png"
        const flag= shuffle(mazoTemp)
        setLevels(flag.slice(0,10)) // puedo poner una variable para que el jugador decida cantidad de niveles
        setMazo(flag.slice(10))   // puedo poner una variable para que el jugador decida cantidad de niveles
        setHorses(horsesTemp)
        setWinner('')
    }, [])

    

            
            
        
  
    return (
    <div className='body'>
        {/* {winner.name!=='' && <Result setStartGame={setStartGame} winner={winner}></Result>} */}
        <Levels levels={levels} played={played}  draw={() => draw()}></Levels>   
        <Horses horses={horses}></Horses>        
    </div>

  )
    }