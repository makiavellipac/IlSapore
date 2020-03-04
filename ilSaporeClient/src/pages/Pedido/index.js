import React,{ useEffect,useContext }  from 'react'
import "./index.css"
import { MyContext } from '../../context'
import { Grid, Flex } from '@chakra-ui/core'
import Card from "../../components/Card"
import ChekIngrediente from "../../components/CheckIngrediente"
import Acordeon from '../../components/Acordeon'

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
              return(<div className="Pedido" style={{
                justifyContent:"center",
                paddingTop:"38vh",
                position:"relative",
                flexDirection:"column"
                
}}>
  

  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
  {context.state.pizzas.map(pizza=>
    <>
    <Card 
    nombre={pizza.nombre}
    ingredientes={pizza.ingredientes}
    precio={pizza.precio}
    img={pizza.image_URL}/>
    <Acordeon title="Añadir Ingredientes">
    <ChekIngrediente/>
    </Acordeon>
    
    </>
    )}
  </Grid>
  
</div>)
             else
                  return <p>Loading</p>
          }}  
        </MyContext.Consumer>   
  )
}

export default Pedido;