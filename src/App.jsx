import React from 'react'

const App = () => {
  return (
    <>
      <div className='monedas'></div>
      <div className='tiradas'></div>
      <div className='plafon'>
        <div className='ruleta' 
          style={{
            backgroundImage:`url('./assets/ruleta.png')`
          }}
        >
        </div>
        <div className='premio'></div>
        <div className='barra1'>
          <div className='mi barra'></div>
        </div>
        <div className='barraInferior'>
          <button className='Lanzar'>Lanzar</button>
        </div>
        <div className='central'>
          <img src='./assets/central.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default App