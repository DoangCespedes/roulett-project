import { useState, useRef } from 'react'
import './App.css'
import central from './assets/central.png'
import monedas from './assets/moneda.png'
import ticket from './assets/ticket.png'

const App = () => {
  const [ancho, setAncho] = useState(1);
  const [dinero, setDinero] = useState(1);
  const [tiradas, setTiradas] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [premio, setPremio] = useState('Haz click en Lanzar');
  const [situacion, setSituacion] = useState(0)
  const barraRef = useRef(null);

  const lanzar = () => {  
    if (barraRef.current) {
      
      setTiradas(tiradas - 1);
      barraRef.current.classList.toggle('parate');
      const width2=barraRef.current.getBoundingClientRect().width;
      setAncho(width2)
      girar();
      setSituacion(1);
    }
  }

  const girar=() =>{
    const nuevaRotacion=Math.floor(Math.random()*210)+340;
    setPremio('...Suerte...')
    setRotation(rotation + ancho + nuevaRotacion)
  }

  const final = () =>{
    setSituacion(0);
    barraRef.current.classList.toggle('parate');
    const grados = (rotation % 360 + 360) % 360;
    if (grados >=0 && grados<=44 || grados>=180 && grados<=224){
      setPremio("La casilla MUERTE");
      setDinero(0); 
      setSituacion(2);
    } else if (grados>= 45 && grados<=90){
      setPremio("Ganas 1 moneda y sigues jugando");
      setDinero(dinero + 1);
      setTiradas(tiradas + 1);
    } else if (grados>= 91 && grados<=135){
      setPremio(`Doblas y ganas ${dinero * 2 } monedas`);
      setDinero(dinero * 2);
      setSituacion(2);
    } else if (grados>= 136 && grados<=179){
      setPremio("Sumas 8 monedas y sigues jugando")
      setDinero(dinero + 8);
      setTiradas(tiradas + 1);
    } else if (grados>= 225 && grados<=269){
      setPremio("Ganas 5 moneda y sigues jugando");
      setDinero(dinero + 5);
      setTiradas(tiradas + 1);
    } else if (grados>= 270 && grados<=314){
      setPremio(`Doblas y ganas ${dinero * 3 } monedas`);
      setDinero(dinero * 3);
      setSituacion(2);
    } else if (grados>= 315 && grados<=359){
      setPremio("Ganas 2 moneda y sigues jugando")
      setDinero(dinero + 2);
      setTiradas(tiradas + 1);
    }
  }
  return (
    <>
      <div className='monedas'>
        {Array.from({length:dinero},(_,index)=>
        <img key={index} src={monedas} alt=''/>
        )}
      </div>
      <div className='tiradas'>
      {Array.from({length:tiradas},(_,index)=>
        <img key={index} src={ticket} alt=''/>
      )}  
      </div>
      <div className='plafon'>
        <div className='ruleta' 
          style={{
            // backgroundImage:`url('./assets/ruleta.png')`
            transform:`rotate(${rotation}deg)`,
            transition:'transform 6s cubic-bezier(0.2,0.8,0.7,0.99)'
          }}
          onTransitionEnd={final}
        >
        </div>
        <div className='premio'>{premio}</div>
        {/* {situacion === 0 &&   QUEDA PARA DESPUES*/}
          <div className='barra1'>
            <div className='mi_barra' ref={barraRef} ></div>
          </div>
        <div className='barraInferior'>
        {tiradas>0 && <button className='Lanzar'onClick={lanzar}>Lanzar</button> }
        </div>
        {situacion === 2 && <h1>No te quedan mas oportunidades. Has ganado ${dinero} monedas</h1>}
        <div className='central'>
          <img src={central} alt='' />
        </div>
      </div>
    </>
  )
}

export default App