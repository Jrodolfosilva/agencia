import styled from "styled-components";

export const ContainerProject = styled.section`
background-color: rgb(7, 8, 24);
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
gap:80px;

div{
    margin: 0 auto;
    padding: 20px 30px;
    min-height: 220px;
    width: 330px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(40px);
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px, rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px, rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px, rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px, rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px, rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px, rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px, rgb(0 0 0 / 25%) 0px 100px 100px 0px;
    

    h2{
        font-size: 22px;
        margin-bottom: 10px;
    }
    p{
        font-size: 16px;
        text-align: justify;
    }

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