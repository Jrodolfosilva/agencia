import React from "react";
import {ContainerAbout} from "./styled"
import fotoperfil  from "../../assets/foto-perfil-do-desenvolvedor.png"

const About = ()=>{
    
    
    return(
        <ContainerAbout>
            <div>
                <img src={fotoperfil} alt="FOTO-PERFIL" />
            </div>
            <div>
                <p>Quem Somos</p>
                <h2>
                        Conheça um pouco da nossa história
                </h2>
                <p>
                 In eu nunc ut tortor lobortis aliquam et at arcu.
                 In hac habitasse platea dictumst. 
                 Donec in tortor et quam feugiat vulputate.
                 Duis eget lacus pellentesque, bibendum tortor ac, hendrerit erat.
                </p>
                <p>
                Curabitur feugiat finibus consequat. Nunc blandit ullamcorper accumsan. 
                Morbi suscipit urna imperdiet neque lobortis luctus. 
                Nam rhoncus purus urna, eget blandit dolor sodales ultricies. 
                Mauris ligula nulla, venenatis ut ultricies sed, molestie cursus libero. 
                </p>
                <p>
                Etiam interdum in tellus vitae pretium. 
                Aliquam ac lorem nec neque tincidunt tempor.
                </p>
            </div>

        </ContainerAbout>
    )
}

export default About