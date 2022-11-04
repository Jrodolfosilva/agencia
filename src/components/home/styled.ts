import styled from "styled-components";

export const ContainerHome = styled.section`
margin-top:120px;
display: flex;
color: #fff;
padding: 0 100px;
padding-bottom: 30px;
width: 100%;
background: linear-gradient(171deg, rgba(0,0,0,1) 42%, rgba(0,0,0,1) 61%, rgba(128,127,119,1) 85%);



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
    color:rgb(255,255,255);
    margin-bottom:20px ;
}

button{
    width: 200px;
    height: 40px;
    border-radius: 12px;
    border: none;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    &:hover{
        background-color: yellow;
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
        color:#fff;
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