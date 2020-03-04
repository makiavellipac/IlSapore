import React from 'react'
import { Flex,Stack,Image,Text,} from '@chakra-ui/core'
import { MyContext } from '../../context'


function FormPizza(){
  
 
    return(
        <MyContext.Consumer>
            {context=>(
                <Stack 
                w="70%">
                  <Image src="/images/Pizzarra.jpg"/>
                  <Flex
                    flexDirection="column"
                    align="center"
                    justify="center">
                      <Text
                      padding="20px"
                      fontSize="4rem"
                      color="#FFFFFF"
                      fontFamily="'Anton', sans-serif"
                      >Los Mejores Ingredientes</Text>
                      <Text
                      fontFamily="'Roboto', sans-serif"
                      color="#FFFFFF"
                      fontSize="1.5rem"
                      textAlign="center"
                      >Por que queremos que ta alimentos con los mejores ingredientes y pruebes lo mejor,
                      <br></br>es por ello que contamos, cuidamos y encojemos lo mejor para ti</Text>
                  </Flex>
                </Stack>
            )}
        </MyContext.Consumer>
    )
    
}

export default FormPizza