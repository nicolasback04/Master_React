import React,{useState} from 'react'
import  PropTypes  from "prop-types";

export const EjercicioComponent = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => {
      setYearNow(yearNow+1);
    }

    const anterior = e => {
      let operacion = yearNow-1;
      setYearNow(operacion);
    }

    const cambiarYear = e => {
      let dato = parseInt(e.target.value);
        
      if(Number.isInteger(dato)){
        setYearNow(dato);
      }else{
        setYearNow(year);
      }
      
    }

  return (
    <div>
        <h2>Ejercicio con eventos y useState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>

        <p>
            <button className='botones' onClick={anterior}>Anterior</button>
            &nbsp;
            <button className='botones' onClick={siguiente}>Siguiente</button>
        </p>

        <p>Cambiar año:
          <input
              onChange={ e => cambiarYear(e, ) } 
              type="text" 
              placeholder='Cambia el año' />
        </p>

    </div>
  )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}