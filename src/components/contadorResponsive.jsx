import './contadorResponsive.css'
import { useState } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'

function ContadorResponsive() {

const [contador,setContador] = useState(0)
console.log(contador);

function incrementar() {
    if (contador<10) {
        setContador(contador+1)
    }  
}
function decrementar() {
    if (contador>0) {
        setContador(contador-1)
    } 
}

    return(
        <div btn-caja>
            <ButtonGroup className='btn' variant='outline' spacing='6'>
               <Button className='btn-btn' colorScheme='blue'onClick={decrementar} disabled={contador==0?"disable":""}>Cancel</Button>
               <p className='conteo'>{contador}</p>
               <Button className='btn-btn' colorScheme='blue' onClick={incrementar} disabled={contador==10?"disable":""}>Save</Button>  
            </ButtonGroup>
        </div>
        
    )
}

export{ContadorResponsive}