import React from "react"
import { MyContext } from "../../context"
import { NavLink } from "react-router-dom"
import { Flex,Text } from "@chakra-ui/core"

const styles = {
  style: {
    padding: '20px',
    color:'white',
    fontSize:"20px",
    

  },
  activeStyle: {
    color: 'Yellow',
  }
}



export default function NavBar() {
  return (
    <MyContext.Consumer>
      {context => (
        <div style={{position:"fixed",
                      zIndex:"50"}}
        >
        <Flex
          w="100vw"
          h="16vh"
          bg="navbar.900"
          align="center"
          justify="center"
          position="relative"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        >
          <Text
          fontSize="3em"
          fontFamily="'Lobster', cursive"
          color="#009246">IlSapore </Text>
          <Text
          fontSize="3em"
          fontFamily="'Lobster', cursive"
          color="#FFFFFF"
          >DeLa </Text>
          <Text
           fontSize="3em"
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
                  >Home</Text>
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
            </>
          )}
          {context.state.isLoggedIn && (
            <>
              <NavLink {...styles} exact to="/">
                <Text>Home</Text>
              </NavLink>
              <NavLink {...styles} exact to="/profile">
                <Text>Menu
                </Text>
              </NavLink>
              <button onClick={context.logout}style={styles.style}>Logout</button>
            </>
          )}
        </Flex>
        </div>
      )}
    </MyContext.Consumer>
  )
}