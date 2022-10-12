import React, {useRef, useEffect, useState, Fragment} from 'react'

const Landing = () => {
  const wolverine =  useRef(null)
  const [btn, setbtn] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      wolverine.current.classList.add('startingImg')
    },1000)
    setTimeout(()=>{
      wolverine.current.classList.remove('startingImg')
      setbtn(true)
    },2000)
  }, [])
  const showGriefLeft = ()=>{
    wolverine.current.classList.add('leftGrief')
  }
  const showGriefRight = ()=>{
    wolverine.current.classList.add('rightGrief')
  }
  const moveGriefLeft = ()=>{
    wolverine.current.classList.remove('leftGrief')
  }
  const moveGriefRight = ()=>{
    wolverine.current.classList.remove('rightGrief') 
  }
  const displayButtons = btn && (
    <Fragment>
      <div onMouseOver={showGriefLeft} onMouseOut={moveGriefLeft} className='div-Button-left'>
        <button className='btn-left'>Inscription</button>
      </div>
      <div onMouseOver={showGriefRight} onMouseOut={moveGriefRight} className='div-Button-right'>
        <button className='btn-right'>Connexion</button>
      </div>
    </Fragment>
  )
  return (
    <main ref = {wolverine} className = 'main-page' >
      {displayButtons}
    </main>
  )
}

export default Landing
