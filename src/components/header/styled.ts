import styled from "styled-components";

export const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px 100px 025px 100px;
color:#000;
z-index: 99;
position: fixed;
min-width: 100%;
background-color: #fff;
border-bottom: 1px solid #2222;

ul{
    display: flex;
    align-items: center;
    gap:25px;


    li{
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        padding: 5px 10px;
        height: 30px;

        &:hover{
            color:rgb(0, 169, 157);
            border-bottom: 3px solid rgb(0, 169, 157);
           
        }

    }

  
   
}

section{
    display: flex;
    align-items: center;
    img{
        width: 14px;
    }
    li:last-child{
                border-radius: 8px;
                padding:8px 10px;
                transition: 0.7s;
                background-image: linear-gradient(135deg, rgb(59, 223, 210) 0%, rgb(5, 116, 95) 100%);
                color: #fff;
                height: auto;
                &:hover{
                border: none;
                }
    }
}

@media (max-width:768px) {
    height: 80px;
    padding: 5px;
    position: relative;
    background-color: rgb(7, 8, 24);
    color: #fff;
    position: fixed;
    top: 0;

    nav{
        display: none;
        ${(props:any)=>props.mobile&&`
        display:flex;
        `};


        
        ul{
            position:absolute;
            top:80px;
            right:0%;
            width:70vw;
            height:100vh;
            background-color:rgb(7, 8, 24);
            flex-direction:column;
            padding: 20px 0px;
            animation:Show 0.5s linear forwards;

          

        }


    }
    section{
        ul li{
            display:none;
        }
    }
}


@keyframes Show {
    0%{
        opacity:0.5

    }
    100%{
        opacity:1

    }
}

`

export const ContainerMobile = styled.div`
display: none;
@media (max-width:768px) {
    display:block;
    

    img{
       max-width: 30px;
       
       
    }
}



`