import React,{ useEffect,useContext }  from 'react'
import "./index.css"
import { MyContext } from '../../context'
import Card from "../../components/Card"
import { Grid } from '@chakra-ui/core'


function Menu() {
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
  position:"relative"
}}>
  

  <Grid templateColumns="repeat(3, 5fr)" gap={12}>
  {context.state.pizzas.map(pizza=>
    <Card 
    nombre={pizza.nombre}
    ingredientes={pizza.ingredientes}
    descripcion={pizza.descripcion}
    precio={pizza.precio}
    img={pizza.image_URL}  
    

    />
    
    )}
  </Grid>
  
</div>)
else
    return <p>Loading</p>
}}  
</MyContext.Consumer>   
)
}

export default Menu;