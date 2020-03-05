import React from 'react'
import "./index.css"
import Pizarra from "../../components/Pizarra"
import { Flex,Text } from '@chakra-ui/core'
import { MyContext } from "../../context"
import Tabs from "../../components/Tabs"


function Home() {
  return(
    <MyContext.Consumer>
      {context=>(
        <>
          {!context.state.isAdmin && (
            <>
              <div className="Home" style={{
                display:"Flex",
                justifyContent:"center",
                paddingTop:"38vh",
                paddingBottom:"38vh",
                position:"relative"}}>
                  <Pizarra/>
              </div>
              <Flex textAlign="center"
                  w="100vw"
                  h="6vh"
                  bg="#d9d9d9">
                <Text>IlSaporeDeLaPizza    2020</Text>
              </Flex>
            </>    
          )}
          {context.state.isAdmin && (
            <div style={{
                display:"Flex",
                justifyContent:"center",
                paddingTop:"25vh",
                position:"relative"}}>
              <Tabs/>
            </div>
            
          )}
                        
      </>
      )}
      </MyContext.Consumer>
)}

export default Home;