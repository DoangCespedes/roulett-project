import './App.css'
import central from './assets/central.png'

const App = () => {
  const lanzar = () => {
    
  }
  return (
    <>
      <div className='monedas'></div>
      <div className='tiradas'></div>
      <div className='plafon'>
        <div className='ruleta' 
          // style={{
          //   backgroundImage:`url('./assets/ruleta.png')`
          // }}
        >
        </div>
        <div className='premio'></div>
        <div className='barra1'>
          <div className='mi_barra'></div>
        </div>
        <div className='barraInferior'>
          <button className='Lanzar' onClick={lanzar}>Lanzar</button>
        </div>
        <div className='central'>
          <img src={central} alt='' />
        </div>
      </div>
    </>
  )
}

export default App