import React, {useRef, useEffect} from 'react'

const Landing = () => {
  const wolverine =  useRef(null)
  useEffect(()=>{
    setTimeout(()=>{
      wolverine.current.classList.add('startingImg')
    },2000)
    setTimeout(()=>{
      wolverine.current.classList.remove('startingImg')
    },3000)
  }, [])
  console.log(wolverine);
  return (
    <main ref = {wolverine} className = 'main-page' >
      <div className='div-Button-left'>
        <button className='btn-left'>Inscription</button>
      </div>
      <div className='div-Button-right'>
        <button className='btn-right'>Connexion</button>
      </div>
    </main>
  )
}

export default Landing
