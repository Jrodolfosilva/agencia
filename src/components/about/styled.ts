import styled from "styled-components";

export const ContainerAbout = styled.section`

height: 100vh;




background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;



div:first-child{
/*Seção/div onde fica a foto do perfil do programador */


}



div:last-child{
   max-width: 60vw;
   padding-right: 200px;

    p{
        font-size: 18px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.8);
        margin-bottom: 30px;
    }

    p:first-child{
        color: #67a6bb;
        font-weight: 500;
        font-size: 26px;
    }
    

    h2{
        font-weight: 600;
        font-size: 44px;
        margin-bottom: 30px;
    }


}


`