import styled from "styled-components";


export const ContainerProject = styled.section`

color: #fff;
padding: 100px 0px;

p,h2{text-align: center;}

p{font-size: 22px;}

h2{
    font-size: 44px;
    font-weight: 600;
}



section{
display: flex;
flex-wrap: wrap;
padding: 50px 100px;
gap:50px;

div{
    margin: 0 auto;;
    min-height: 220px;
    width: 250px;
    border:1px solid rgb(0, 169, 157);
    border-radius: 12px;
    
}
}

@media (max-width: 768px) {
    

    section{
        padding: 50px 10px;

        div{
            min-width: 150px;
        }
    }



}






@keyframes show {
    0%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}



`