import React,{ useEffect,useContext }  from 'react'
import { MyContext } from '../../context'
import { Button } from '@chakra-ui/core'


function TablaPizzas(color) {
    const context = useContext(MyContext)
                useEffect (()=>{
                    context.getdataPizza()
                })
    return(
        
        <MyContext.Consumer>
            {context=>{
                const {pizzas}=context.state
                    if(pizzas)
                        return(
                            <table style={{width:"100%"}}>
                        <tr>
                            <th>Nombre</th>
                            <th>ingredientes</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                        
                            {context.state.pizzas.map(pizza=>
                                <tr key={pizza._id}>
                                    <td>{pizza.nombre}</td>
                                    <td>{pizza.ingredientes}</td>
                                    <td>{pizza.precio}</td>
                                    <td>{pizza.image_URL}</td>
                                    <td><Button variantColor="green">Editar</Button></td>
                                    <td><Button id={pizza._id} 
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

export default TablaPizzas
