import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsContainer = styled(Link)`

display: grid;
grid-template-columns: repeat( auto-fit, minmax(220px, 1fr));
column-gap: 3rem;
row-gap: 3rem;
margin-right: 30px;
padding-top: 0%;
text-decoration: none;
`

export const MovieCard = styled.div`  

    
    p {      
      color: brown;
      font-weight: bold;
      text-decoration: none;
    }    

   li {
    cursor: pointer;  
    background-color: rgb(233, 223, 223);
    display: flex;
    flex-direction: column;    
    align-items: center;      
    border-radius: 5px;
    box-shadow: 7px 7px 7px 0px rgba(240, 233, 233, 0.22);
    padding: 20px;
    margin: 0px;
    width: 200px;
    transition: all 0.3s ease-out;
       
    }

    li:hover{        
        transition: all 0.3s;
        transform: scale(1.1);
    }
 
    img{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;    
    }

    span {
        list-style: none;
        font-weight: bold;
        
    }
    
`

