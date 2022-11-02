import styled from "styled-components";

export const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
padding: 10px 100px;

ul{
    display: flex;
    align-items: center;
    gap:40px;


    li{
        font-size: 18px;
        font-weight: 500;
    }
    li:last-child{
                border: 1px solid red;
                border-radius: 8px;
                padding:8px 10px;
    }
}

@media (max-width:768px) {
    height: 80px;
    padding: 5px;
    position: relative;
    background-color: black;

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
            height:90vh;
            background-color:red;
            flex-direction:column;
            padding: 20px 0px;
            animation:Show 0.5s linear forwards;

          

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