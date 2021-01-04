import React , {Fragment} from 'react';
import {revisarPresuepuesto} from '../helper'

const ControPresupuesto = ({restante,presupuesto}) => {
    return ( 
        <Fragment>
        <div className='alert alert-primary'>
           Presupuesto:$ {presupuesto}
        </div>

        <div className={revisarPresuepuesto(presupuesto,restante)} > 
        Restante:$ {restante}
        </div>
        </Fragment>
        
     );
}
 
export default ControPresupuesto;