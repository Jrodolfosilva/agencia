import React from "react"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Project from "./components/project/Project"
import { GlobalEstilo } from "./styled/GlobalEstilo"
import {ContainerApp} from "./styled/Styled"

function App() {
 

  return (
    <ContainerApp>
    <GlobalEstilo/>
    <Header/>

    <Home/>
    <About/>
    <Project/>
    </ContainerApp>
  )
}

export default App
