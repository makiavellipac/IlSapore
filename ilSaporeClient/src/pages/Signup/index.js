import React from 'react'
import { MyContext } from '../../context'
import "./index.css"
import {Flex,FormControl,InputGroup,InputLeftAddon,Input,Icon} from '@chakra-ui/core'
import Form from '../../components/Form'
 

function Signup() {
  return (
    <MyContext.Consumer>
      {context=>(
      <div className="Signup">
          <Flex w="100vw" h="90vh" align="center" justify="center">
            <Form submit={context.handleSignupSubmit} title="Signup">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Nombre"
                    name="nombre"
                    type="text"
                    value={context.state.formSignup.nombre}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="email" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={context.state.formSignup.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="phone" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Telefono"
                    name="numero"
                    type="number"
                    value={context.state.formSignup.numero}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="lock" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={context.state.formSignup.password}
                  />
                </InputGroup>
              </FormControl>
            </Form>
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}
export default Signup;