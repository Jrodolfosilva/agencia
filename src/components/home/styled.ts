import styled from "styled-components";

export const ContainerHome = styled.section`
min-height: 100vh;
display: flex;
color: #000;
padding: 0 100px;
padding-top: 150px;
padding-bottom: 30px;
width: 100%;
background-color: #fff;
div:first-child{
    max-width: 37vw;
    h1{
    font-family: "Space Grotesk", serif;
    font-size: 58px;
    font-weight: 500;
    margin-bottom: 20px;
}
p{
    font-family: "Space Grotesk", serif;
    font-size: 18px;
    font-weight: 300;
    color:#000;
    margin-bottom:20px ;
}

button{
    width: 300px;
    height: 50px;
    border-radius: 12px;
    border: none;
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(135deg, rgb(59, 223, 210) 0%, rgb(5, 116, 95) 100%);

    &:hover{
        
        color: #fff;
    }
}

div{
    ul{
        display: flex;
        gap:15px
    }

    p{
        margin-top: 100px;
        font-family: "Space Grotesk", serif;
        font-size: 14px;
        font-weight: 500;
        color:#000;
    }
} 


}

@media (max-width:768px) {
    padding: 0px 10px;
    margin-top: 30px;
    
   div:first-child{
   max-width: 100vw;

    h1{
        font-size: 22px;
    }

    p{
        font-size: 16px;
    }
   }

   div:last-child{
    img{
        display: none;
    }
   }




}

`