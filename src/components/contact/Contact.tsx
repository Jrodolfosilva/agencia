import React from "react";
import {ContainerContact} from "./styled"


const Contact = ()=>{

    const Submit = (e)=>{
        e.preventDefault();

    }

    return(
       <ContainerContact>
        <h2>Fale Conosco</h2>
        <div>
            <section>
                <h1>hellou wording</h1>
            </section>
            <section>
                <form onChange={Submit}>
                    <label htmlFor="name">
                        <input type="text" required placeholder="Digite seu nome" />
                    </label>

                    <label htmlFor="email">
                        <input type="email" required  placeholder="Digite seu email"/>
                    </label>

                    <label htmlFor="phone">
                        <input type="number" required placeholder="(81) 9 9999 - 9999" />
                    </label>

                    <label htmlFor="textarea">
                        <textarea id="textarea" name="assunto" rows="8" cols="60" placeholder="Em que podemos ajudar você?"></textarea>
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
            </section>
        </div>

       </ContainerContact>
    )
}

export default Contact