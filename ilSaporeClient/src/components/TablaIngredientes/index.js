import React,{ useEffect,useContext }  from 'react'
import { MyContext } from '../../context'
import { Button } from '@chakra-ui/core'


function TablaIngredientes(color) {
    const context = useContext(MyContext)
                useEffect (()=>{
                    context.getdata()
                })
    return(
        
        <MyContext.Consumer>
            {context=>(
                    <table style={{width:"100%"}}>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                            <th></th>
                            <th></th>
                        </tr>
                        
                            {context.state.ingredientes.map(ingrediente=>
                                <tr>
                                    <td>{ingrediente.ingrediente}</td>
                                    <td>{ingrediente.tipo}</td>
                                    <td>{ingrediente.extraPrecio}</td>
                                    <td><Button variantColor="green">Editar</Button></td>
                                    <td><Button id={ingrediente._id} 
                                                variantColor="red" 
                                                onClick={context.deleteData}
                                                >Borrar</Button></td>
                                </tr>        
                            )}
                    </table>

            )}
        </MyContext.Consumer>
    )
}

export default TablaIngredientes
