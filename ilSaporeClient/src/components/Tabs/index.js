import React from 'react'
import { Tabs, TabList, TabPanels, Tab,TabPanel} from '@chakra-ui/core'
import { MyContext } from '../../context'
import FormIngrediente from "../FormIngrediente"
import FormPizza from "../FormPizza"
import TablaIngredientes from "../TablaIngredientes"

// const styles={

// }


function Table() {
  return(
    <MyContext.Consumer>
      {context=>(
        <Tabs isFitted variant="enclosed"
            w="90%"
            h="100%"
            bg="White">
          <TabList>
              <Tab>Ordenes</Tab>
              <Tab>Pizza</Tab>
              <Tab>Ingredientes</Tab>
              <Tab>Clientes</Tab>
              <Tab>Control Pedidos</Tab>
              <Tab>Perfil</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                  <p>Ordenes</p>
              </TabPanel>
              <TabPanel>
                  <FormPizza/>
              </TabPanel>
              <TabPanel>
                  <FormIngrediente/>
                  <TablaIngredientes/>
              </TabPanel>
              <TabPanel>
                  <p>Clientes</p>
                      
              </TabPanel>
              <TabPanel>
                  <p>Control Pedidos</p>
                      
              </TabPanel>
          </TabPanels>
      </Tabs>
      )}
    </MyContext.Consumer>
  )
}

export default Table