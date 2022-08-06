import styled from "styled-components";
//---------------------HEADER---------------------//
export const HeaderStyle = styled.div `    
    display: flex;
    justify-content: center;
    max-height: 600px;
    background-color: black;    

    .imgBack {
        width: 100%;
        background-size: cover;
    }

    .imgCatflix {
        position: absolute;
        padding-top: 100px;
        opacity: 0.8;
        flex-direction: column;
    }  
    
    .input {
        padding-top: 100px; 
    }

    .search {
        width: 500px;
        height: 30px;
        border-radius: 5px;
        border: 0;
    }

`
//--------------------FOOTER----------------------//

export const FooterStyle = styled.div `
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bold;
    background-color: brown;
    position: relative;
    
`

