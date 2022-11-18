import styled from "styled-components";





export const ContainerContact = styled.section`

min-height: 100vh;
padding: 50px 100px;

h2{
    text-align: center;
    margin-bottom: 50px;
    
}


div{

display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;



section:first-child{
    min-width:400px;
    background-color: navajowhite;
}

section:last-child{
    padding: 2%;
    
    
    form{
        display: flex;
        flex-direction: column;

        input, textarea{
            width: 400px;
            height: 50px;
            background-color: azure;
            border: 1px solid #2222;
            outline: none;
            margin-bottom: 12px;
            border-radius: 8px;
        }
        textarea{
            height: auto;
        }

    }
}
}






@media (max-width:450px) {
padding: 50px 10px;

    section:first-child{
    max-width:200px;
    background-color: navajowhite;
}
h1{
    display: none;
}
section:last-child{

    form{
        input, textarea{
            max-width: 200px;
        }
    }
}


}





`