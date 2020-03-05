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
            {context=>{
                const {ingredientes}=context.state
                if(ingredientes)
                    return(
                        <table style={{width:"100%"}}>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                            <th></th>
                            <th></th>
                        </tr>
                        
                            {context.state.ingredientes.map(ingrediente=>
                                <tr key={ingrediente._id}>
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

                    )
                else
                    return <p>Loading...</p>
                    

            }}
        </MyContext.Consumer>
    )
}

export default TablaIngredientes
