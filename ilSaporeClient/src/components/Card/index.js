import React from 'react'
import { Box, Text, Image} from '@chakra-ui/core'

function Card({ nombre, ingredientes, descripcion, precio,img}) {
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
        <Box>
        <Text color="White">{descripcion}</Text>
        </Box>

      </Box>
    </Box>
  )
}

export default Card