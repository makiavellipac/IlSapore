import React from 'react'
import "./index.css"
import Tabs from "../../components/Tabs"
import { MyContext } from '../../context'



function Home() {

  

  return(
    <MyContext.Consumer>
      {context=>(
        <div className="Home">
          {/* <Tabs></Tabs> */}
        </div>
      )}
    </MyContext.Consumer>
  )
  
    
  
}

export default Home;