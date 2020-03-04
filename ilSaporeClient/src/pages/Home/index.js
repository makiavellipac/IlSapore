import React from 'react'
import "./index.css"
import Pizarra from "../../components/Pizarra"
import { Flex,Text } from '@chakra-ui/core'


function Home() {

  

  return(
        <>
        <div className="Home" style={{
          display:"Flex",
          justifyContent:"center",
          paddingTop:"38vh",
          paddingBottom:"38vh",
          position:"relative"
          
        }}>
          <Pizarra/>
          
      
          {/* <Tabs></Tabs> */}

        </div>
        <Flex       
                    textAlign="center"
                    w="100vw"
                    h="6vh"
                    bg="#d9d9d9"
                  ><Text
                  >IlSaporeDeLaPizza    2020</Text></Flex>
        </>

  )
  
    
  
}

export default Home;