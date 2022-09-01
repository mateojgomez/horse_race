import React from 'react'

function Home({setBet,bet,setStartGame}){

    return(
        <div className='home'>
        <h1>The Horse Race</h1>
        <button className='btn' onClick={ ()=>{setStartGame(true)}}>Play!</button>
        <button>Instructios</button>
        <button>Credits</button>
        <div >
        <input type="radio" checked={bet=="Oro"} onChange={(e)=>setBet(e.target.value)} value="Oro" name="difficulty" /> Oro
        <input type="radio" checked={bet=="Espada"} onChange={(e)=>setBet(e.target.value)} value="Espada" name="difficulty" /> Espada
        <input type="radio" checked={bet=="Basto"} onChange={(e)=>setBet(e.target.value)} value="Basto" name="difficulty"asdas /> Basto
        <input type="radio" checked={bet=="Copa"} onChange={(e)=>setBet(e.target.value)} value="Copa" name="difficulty" /> Copa
        </div>

        </div>
    )


}

export default Home