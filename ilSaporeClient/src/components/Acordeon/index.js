import React  from 'react'
import { AccordionItem, AccordionHeader,AccordionPanel,Icon,Box } from '@chakra-ui/core'

function Acordeon ({children,title,color}){
    return(
        <AccordionItem>
            {({isExpanded})=>
                <>
                    <AccordionHeader _expanded={{ bg: "teal.500", color: "white" }}>
                        <Box flex="1" textAlign="left" color={color}>
                            {title}
                        </Box>
                        <Icon size="12px" color={color} name={isExpanded ? "minus" : "add"} />
                    </AccordionHeader>
                    <AccordionPanel>
                        {children}
                    </AccordionPanel>
                </>
            }
        </AccordionItem>
        
    )
}

export default Acordeon