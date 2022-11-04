import React from "react"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { GlobalEstilo } from "./styled/GlobalEstilo"
import {ContainerApp} from "./styled/Styled"

function App() {
 

  return (
    <ContainerApp>
    <GlobalEstilo/>
    <Header/>

    <Home/>
    </ContainerApp>
  )
}

export default App
