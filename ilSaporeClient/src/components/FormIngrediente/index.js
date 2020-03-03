import React from 'react'
import { Input, Select, Stack} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../Form'
import Acordeon from "../Acordeon"                

function FormIngrediente(){
    return(
        <MyContext.Consumer>
            {context=>(
                <Acordeon title="Crear Ingrediente">
                    <Stack bg="gray.200" w="100%" spacing={3}>
                        <Form submit={context.handleIngredienteSubmit} title="Crear Ingrediente" width="100%" spacing="0">
                            <Input
                                onChange={context.handleIngredienteInput}
                                placeholder="Ingredientes"
                                name="ingrediente"
                                type="text"
                                value={context.state.formIngrediente.ingrediente}
                            /> 
                            <Select 
                                onChange={context.handleIngredienteInput}
                                placeholder="Tipo"
                                size="md"
                                name="tipo"
                                value={context.state.formIngrediente.tipo} 
                            >
                                <option value="Salsa">Salsa</option>
                                <option value="Vegetal">Vegetal</option>
                                <option value="Queso">Queso</option>
                                <option value="Carnes">Carnes</option>
                                <option value="Fruta">Fruta</option>
                                <option value="Condimento">Condimento</option>
                                <option value="Extras">Extras</option>
                            </Select>
                            <Input
                                onChange={context.handleIngredienteInput}
                                placeholder="Precio"
                                name="extraPrecio"
                                type="number"
                                value={context.state.formIngrediente.extraPrecio}
                            />      
                        </Form>
                    </Stack>
                </Acordeon>
            )}
        </MyContext.Consumer>
    )
}

export default FormIngrediente
                
                
                
                
                
                
                