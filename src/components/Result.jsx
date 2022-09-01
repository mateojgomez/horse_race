import React from'react'

export const Result = ({winner,game,setGame,setStartGame}) => {
    const restartGame = ()=>{
        setGame(!game)
    }
    
    console.log(game)
    
    return(
        <div className='winner'>
            {/* {
             winner.state?<div>
                 <h1>Congratulation!</h1>
                 <h1>winner is {winner.name}</h1>
             </div>:
            <div>
            <h1>You have lost</h1>
            <h1> winner is {winner.name}</h1>
            </div>
            } */}
        <button onClick={()=>setStartGame(false)}>Menu</button>
        <button  onClick={restartGame()}>Play Again</button>
        
        </div>

    )


}
