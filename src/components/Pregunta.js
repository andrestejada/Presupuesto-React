import React, {Fragment , useState}  from 'react';
import Error from './Error'


const Pregunta = ({guardarRestante, guardarPresupuesto,actualizarPregunta}) => {

    const [cantidad,guardarCantidad]= useState(0);
    const [error,guardarError]= useState(false);

    const definirPresupuesto = e =>{
        guardarCantidad( parseInt( e.target.value, 10 ) )
    }

    //Submit para definir el presupuesto

    const agregarPresupuesto = e =>{
        e.preventDefault()

        //Validad
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return;
        }

        //si se pasa la validacion

        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return (  

        <Fragment>

        <h2>Coloca Tu Presupuesto</h2>
        {error ? <Error mensaje='El Presupuesto es incorrecto' /> : null}

        <form
        
        onSubmit={agregarPresupuesto}
        >

            <input
                placeholder='Coloca Tu Presupuesto'
                type='number'
                className='u-full-width'
                onChange={definirPresupuesto}
            />
            <input
                className='button-primary u-full-width'
                type='submit'
                value='Definir Presupuesto'
            />

        </form>
        </Fragment>
    );
}
 
export default Pregunta;