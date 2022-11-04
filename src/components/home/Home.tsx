import React from "react";
import {ContainerHome} from "./styled"
import provisorio from "../../assets/provisorio.png"


const Home = ()=>{
    return(
        <ContainerHome>
            <div>
                <h1>
                    Desenvolvimento Web de Alta Performance
                </h1>
                <p>
                  Construimos e gerenciamos sites com layouts 100% exclusivos para a sua marca, de Alto Impacto que geram leads, vendem produtos e contam histórias.

                </p>
                <p>
                Consultória de SEO para um melhor posicionamento no Google.
                </p>
                <div>
                    <p>
                    Tecnologias utilizadas:
                    </p>
                    <ul>
                        <li>Notin</li>
                        <li>figma</li>
                        <li>React</li>
                        <li>Elementor</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={""} alt="imagem-desenvolvimento-web-sites-eficiente-barato-e-performatico"/>
            </div>
        </ContainerHome>
    )
}


export default Home