import React from "react";
import "./index.css"
import {MyContext} from "../../context"
import {Flex,FormControl,InputGroup,InputLeftAddon,Input,Icon} from "@chakra-ui/core"
import Form from "../../components/Form"

function Login() {
  return (
    <MyContext.Consumer>
    {context=>(
      <div className="Login">
      <Flex w="100vw" h="90vh" align="center" justify="center">
          <Form submit={context.handleLoginSubmit} title="Login">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="email" />} />
                <Input
                  onChange={context.handleLoginInput}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={context.state.formLogin.email}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="lock" />} />
                <Input
                  onChange={context.handleLoginInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formLogin.password}
                />
              </InputGroup>
            </FormControl>
          </Form>
        </Flex>
      </div>
    )}
    </MyContext.Consumer>
  )
}

export default Login;