import React from "react";
import {useState} from "react"
import {ContainerHeader, ContainerMobile} from "./styled"
import open from "../../assets/drop.svg"
import close from "../../assets/close.svg"
const Header = ()=>{

const [Mobile, setMobile] = useState(false)

    return(
        <ContainerHeader mobile={Mobile}>
            <img src="" alt="LOGOTIPO"/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Equipe</li>
                    <li>Soluções</li>
                    <li>Fale conosco</li>
                </ul>
            </nav>
            <ContainerMobile
            onClick={()=>setMobile(!Mobile)}
            >
                <img src={Mobile?close:open} alt={Mobile?"MENU-ABERTO":"MENU-FECHADO"}/>
            </ContainerMobile>
        </ContainerHeader>
    )
}

export default Header