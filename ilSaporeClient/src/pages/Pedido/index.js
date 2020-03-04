import React,{ useEffect,useContext }  from 'react'
import "./index.css"
import { MyContext } from '../../context'


function Pedido() {
  const context = useContext(MyContext)
                useEffect (()=>{
                    context.getdataPizza()
                },[])
  return(

        <MyContext.Consumer>
          {context=>{
            const {pizzas}=context.state
            if(pizzas)
              return(<div className="Pedido">
              <p>Pedido</p>
                {context.state.pizzas.map(pizza=>
              <p>{pizza.nombre}</p>
                  
              )}
             </div>)
             else
                  return <p>Loading</p>
          }}  
        </MyContext.Consumer>   
  )
}

export default Pedido;