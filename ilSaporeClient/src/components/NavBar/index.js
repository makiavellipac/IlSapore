import React from "react"
import { MyContext } from "../../context"
import { NavLink } from "react-router-dom"
import { Flex,Text } from "@chakra-ui/core"

const styles = {
  style: {
    padding: '20px',
    color:'white',
    
    

  },
  activeStyle: {
    color: 'Yellow',
  }
}



export default function NavBar() {
  return (
    <MyContext.Consumer>
      {context => (
        <div style={{position:"absolute",
                      zIndex:"50",
                      flexWrap:"wrap"}}
        >
        <Flex
          w="100vw"
          h="16vh"
          bg="navbar.900"
          align="center"
          justify="center"
          position="relative"
          flexWrap="wrap"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        >
          <Text
          fontSize="3rem"
          fontFamily="'Lobster', cursive"
          color="#009246">IlSapore </Text>
          <Text
          fontSize="3rem"
          fontFamily="'Lobster', cursive"
          color="#FFFFFF"
          >DeLa </Text>
          <Text
           fontSize="3rem"
          fontFamily="'Lobster', cursive"
          color="#CE2B37"
          >Pizza</Text>
        </Flex>
        <Flex
          w="100vw"
          h="8vh"
          bg="navbar.900"
          fill="none"
          align="center"
          justify="center"
          position="relative"
          flexWrap="wrap"
        >
          {!context.state.isLoggedIn && (
            <>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Inicio</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/aboutUs">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Acerca</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/menu">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Menu</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/pedido">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Realizar Pedido</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/signup">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Regístrate</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/login">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Inicia Sesión</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
            </>
          )}
          {context.state.isLoggedIn && (
            <>
              <Text
                   padding= '20px'
                   color='white'
                   fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Inicio</Text>
              </NavLink>
              <Text
              padding= '20px'
              color='white'
              fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/aboutUs">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Acerca</Text>
              </NavLink>
              <Text
                 padding= '20px'
                 color='white'
                 fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/menu">
                <Text>Menu
                </Text>
              </NavLink>
              <Text
              padding= '20px'
              color='white'
              fontSize="20px"
              >~</Text>
              <NavLink {...styles} exact to="/pedido">
                  <Text
                  fontFamily="'Roboto', sans-serif"
                  >Realizar Pedido</Text>
              </NavLink>
              <Text
              padding= '20px'
              color='white'
              fontSize="20px"
              >~</Text>              
              <button onClick={context.logout}style={styles.style}>Logout</button>
              <Text
              padding= '20px'
              color='white'
              fontSize="20px"
              >~</Text>              
            </>
          )}
        </Flex>
        </div>
      )}
    </MyContext.Consumer>
  )
}