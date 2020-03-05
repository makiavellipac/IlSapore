import React  from 'react'
import {Checkbox } from '@chakra-ui/core'
import { MyContext } from '../../context'
import Acordeon from "../Acordeon"

function CheckIngrediente(color) {
    return(
        <MyContext.Consumer>
            {context=>(
                <>
                    <Acordeon title="Salsa" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Salsa" ? (
                                <Checkbox 
                                    color={color}
                                    onChange={context.handleIngredientesCheckBox}
                                    name={ingrediente.ingrediente}
                                    key={ingrediente._id}
                                    value={ingrediente.ingrediente}
                                >
                                    {ingrediente.ingrediente}
                                </Checkbox>
                                ):null
                        )}
                    </Acordeon>
                    <Acordeon title="Vegetal" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Vegetal" ? (
                                <Checkbox
                                    color={color}
                                    onChange={context.handleIngredientesCheckBox}
                                    name={ingrediente.ingrediente}
                                    key={ingrediente._id}
                                    value={ingrediente.ingrediente}
                                >
                                     {ingrediente.ingrediente}
                                </Checkbox>
                                ):null
                            )}
                    </Acordeon>
                    <Acordeon title="Queso" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Queso" ? (
                                <Checkbox 
                                    color={color}
                                    onChange={context.handleIngredientesCheckBox}
                                    name={ingrediente.ingrediente}
                                    key={ingrediente._id}
                                    value={ingrediente.ingrediente}
                                    >
                                    {ingrediente.ingrediente}
                                </Checkbox>
                            ):null
                        )}
                    </Acordeon>
                    <Acordeon title="Carnes" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Carnes" ? (
                                <Checkbox
                                color={color} 
                                name={ingrediente.ingrediente}
                                key={ingrediente._id}
                                onChange={context.handleIngredientesCheckBox}
                                value={ingrediente.ingrediente}
                                >
                                    {ingrediente.ingrediente}
                                </Checkbox>
                            ):null
                        )}
                    </Acordeon>
                    <Acordeon title="Fruta" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Fruta" ? (
                                <Checkbox
                                    color={color} 
                                    key={ingrediente._id}
                                    onChange={context.handleIngredientesCheckBox}
                                    value={ingrediente.ingrediente}
                                    >
                                    {ingrediente.ingrediente}
                                </Checkbox>
                            ):null
                        )}  
                    </Acordeon>
                    <Acordeon title="Condimento" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Condimento" ? (
                                <Checkbox 
                                    color={color}
                                    name={ingrediente.ingrediente}
                                    key={ingrediente._id}
                                    onChange={context.handleIngredientesCheckBox}
                                    value={ingrediente.ingrediente}
                                    >   
                                    {ingrediente.ingrediente}
                                </Checkbox>
                            ):null
                        )}
                    </Acordeon>
                    <Acordeon title="Extras" color={color}>
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Extras" ? (
                                <Checkbox 
                                    color={color}
                                    name={ingrediente.ingrediente}
                                    key={ingrediente._id}
                                    onChange={context.handleIngredientesCheckBox}
                                    value={ingrediente.ingrediente}
                                    >
                                    {ingrediente.ingrediente}
                                </Checkbox>
                            ):null
                        )}
                    </Acordeon>
                </>
            )}
        </MyContext.Consumer>
    )
}

export default CheckIngrediente
