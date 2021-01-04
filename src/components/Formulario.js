import React , {useState} from 'react';
import shortid from 'shortid';
import Error from './Error';


const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    const [nombre,agregarNombre]=useState('')
    const [cantidad,guardarCantidad]=useState(0)
    const [error , guardarError]= useState(false)

    const agregarGasto = e=>{
        e.preventDefault()

        //validar
        if(cantidad<1 || isNaN(cantidad) ||nombre.trim()===''){
            guardarError(true)
            return;
        }

        //contruir el gasto

        const gasto={
            nombre,
            cantidad,
            id: shortid.generate()
        }

      
        //pasar el gasto al componente principal

        guardarGasto(gasto)
        guardarCrearGasto(true)

        //resetar el form

        guardarCantidad(0)
        agregarNombre('')
    } 

    return (  
        <form
        
            onSubmit={agregarGasto}
        >
            <h2>Agrega Tus Gastos Aqui</h2>

            {error ? <Error mensaje='Todos los campos son obligatorios o Presuepuesto incorrecto'/>:null}

            <div className='campo' >
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    placeholder='Ejemplo Transporte'
                    className='u-full-width'
                    value={nombre}
                    onChange={e=> agregarNombre(e.target.value)}
                />
            </div>

            <div className='campo' >
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    placeholder='Ejemplo 100'
                    className='u-full-width'
                    value={cantidad}
                    onChange={e=> guardarCantidad( parseInt(e.target.value,10) ) }
                />

                <input
                    type='submit'
                    className='u-full-width button-primary'
                    value='Agregar Gasto'
                />
            </div>
        </form>
    );
}
 
export default Formulario;