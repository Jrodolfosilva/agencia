import styled from "styled-components";

export const ContainerHome = styled.section`
margin-top:150px;
display: flex;
color: #fff;

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



`