import React,{useState} from 'react'
import { Input,Stack, Switch, Image, Box,Text, Button} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../Form'
import Acordeon from "../Acordeon"  
import CheckIngrediente from "../CheckIngrediente" 

function FormPizza(){
  
  const [ImageTemp,handleImageTemp]=useState();
  const [handleFilePhoto]=useState();

  const reader= new FileReader()

  const ChangeImage = (file)=>{
    if(file){
      handleFilePhoto(file)
      reader.readAsDataURL(file)
      reader.onloadend = ()=>handleImageTemp(reader.result)
      
    }
  }
  
  const handleClick=()=>document.querySelector('input[type="file"]').click()
    return(
        <MyContext.Consumer>
            {context=>(
                <Acordeon title="Crear Pizza">
                    <Stack bg="gray.200" w="100%" spacing={3}>
                        <Form title="Crear Pizza" width="100%" spacing="0" submit={context.handlePizzaSubmit}>
                          <Input
                            onChange={context.handlePizzaInput}
                                placeholder="Nombre Pizza"
                                name="nombre"
                                type="text"
                                value={context.state.formPizzas.nombre}
                          />
                          <Acordeon title="Seleccionar Ingredientes">
                              <CheckIngrediente/>
                          </Acordeon>
                          <Stack isInline="true">
                            <Switch 
                            size="md" 
                            color="red" 
                            checked={context.state.formPizzas.orrila} 
                            onChange={context.handlePizzaInput}
                            name="orilla"
                            />
                            <Text>Con  Orilla</Text>
                          </Stack>
                          <Input
                            placeholder="Descripcion"
                            name="descripcion"
                            type="text"
                            onChange={context.handlePizzaInput}
                            value={context.state.formPizzas.descripcion}
                          />
                          <Input
                            placeholder="Precio"
                            name="precio"
                            type="number"
                            onChange={context.handlePizzaInput}
                            value={context.state.formPizzas.precio}
                          />
                          <Box size="sm" >
                            <Image src={ImageTemp} alt="Pizza"/>
                            <Button onClick={handleClick}>Seleccionar Imagen</Button>
                            <input hidden 
                            type="file" 
                            onChange={({target})=>ChangeImage(target.files[0])}></input>
                          </Box>
                          
                        </Form>
                    </Stack>
                </Acordeon>
            )}
        </MyContext.Consumer>
    )
    
}

export default FormPizza