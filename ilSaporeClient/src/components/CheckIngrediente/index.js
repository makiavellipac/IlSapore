import React  from 'react'
import {Checkbox } from '@chakra-ui/core'
import { MyContext } from '../../context'
import Acordeon from "../Acordeon"

function CheckIngrediente(color) {
    return(
        <MyContext.Consumer>
            {context=>(
                <>
                    <Acordeon title="Salsa">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Salsa" ? (
                                <Checkbox 
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
                    <Acordeon title="Vegetal">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Vegetal" ? (
                                <Checkbox
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
                    <Acordeon title="Queso">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Queso" ? (
                                <Checkbox 
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
                    <Acordeon title="Carnes">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Carnes" ? (
                                <Checkbox 
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
                    <Acordeon title="Fruta">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Fruta" ? (
                                <Checkbox 
                                    key={ingrediente._id}
                                    onChange={context.handleIngredientesCheckBox}
                                    value={ingrediente.ingrediente}
                                    >
                                    {ingrediente.ingrediente}
                                </Checkbox>
                            ):null
                        )}  
                    </Acordeon>
                    <Acordeon title="Condimento">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Condimento" ? (
                                <Checkbox 
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
                    <Acordeon title="Extras">
                        {context.state.ingredientes.map(ingrediente => 
                            ingrediente.tipo==="Extras" ? (
                                <Checkbox 
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
