import React  from 'react'
import { AccordionItem, AccordionHeader,AccordionPanel,Icon,Box } from '@chakra-ui/core'

function Acordeon ({children,title}){
    return(
        <AccordionItem>
            {({isExpanded})=>
                <>
                    <AccordionHeader _expanded={{ bg: "tomato", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            {title}
                        </Box>
                        <Icon size="12px" name={isExpanded ? "minus" : "add"} />
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