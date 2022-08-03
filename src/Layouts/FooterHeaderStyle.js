import styled from "styled-components";
//---------------------HEADER---------------------//
export const HeaderStyle = styled.div `    
    display: flex;
    justify-content: center;
    max-height: 600px;        

    .imgBack {
     background-size: cover;
     background-repeat: no-repeat ;
     height: 100%;
     width: 100%;
    }

    .imgCatflix {
        background-size: cover;
        overflow: auto;
        position: absolute;
        padding: 250px;
        justify-content: center;      

    }

`
//--------------------FOOTER----------------------//
export const FooterStyle = styled.div `
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bold;
    background-color: brown;
`

