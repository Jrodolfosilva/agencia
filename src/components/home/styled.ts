import styled from "styled-components";

export const ContainerHome = styled.section`
min-height: 100vh;
display: flex;
gap: 200px;
justify-content: space-between;
color: rgb(7, 8, 24);
padding: 0 100px;
padding-top: 150px;
padding-bottom: 30px;


div:first-child{
    max-width: 25vw;
    h1{
    font-family: "Space Grotesk", serif;
    font-size: 48px;
    font-weight: bolder;
    margin-bottom: 20px;
}
p{
    font-family: "Space Grotesk", serif;
    font-size: 16px;
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
div:last-child{
    width: auto;
    img{
        width: 100%;
        margin: 0 auto;
        display: block;
    }
}





@media (max-width:768px) {
    padding: 20px 10px 0px 10px;
    margin-top: 80px;
    flex-direction: column-reverse;
    gap: 10px;
    
   div:first-child{
   max-width: 100vw;

    h1{
        font-size: 20px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        margin-bottom: 10px;
    }
    
    button{
    position: fixed;
    top:90vh;
    z-index: 99;
    }

   }

   div:last-child{
    img{
        display:block;
        width: 100%;
    }
   }




}

`