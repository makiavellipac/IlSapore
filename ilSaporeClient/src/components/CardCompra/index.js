import React from 'react'
import { Box, Text, Image,NumberInput,NumberInputField,NumberInputStepper,NumberDecrementStepper,NumberIncrementStepper, Button} from '@chakra-ui/core'
import Acordeon from "../Acordeon"
import ChekIngrediente from "../CheckIngrediente"

function CardCompra({ nombre, ingredientes,precio,img}) {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={img} alt={nombre} />
      <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color="Yellow"
        >
          {nombre}
        </Box>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
          {ingredientes.map(ingrediente=>
            <>
            <Text color="white">{ingrediente} &bull;</Text>
            </>
          )}
          </Box>
        </Box>
        <Box>
          <Text color="white">${precio}/Mx</Text>
        </Box>
        <Acordeon title="Añadir Ingredientes" color="white">
          <ChekIngrediente color="white"/>
        </Acordeon>
        <NumberInput defaultValue={0} min={0} max={20}>
            <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <Button color="white" variantColor="teal">Añadir</Button>
      </Box>
    </Box>
  )
}

export default CardCompra