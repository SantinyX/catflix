import { Link } from "react-router-dom";
import styled from "styled-components";
/*----------------HEADER DETAILS-----------------*/
export const DetailsHeader = styled.div`
background-color: black;
display: flex;
align-items: center;
align-content: flex-start;
gap: 20%;
`

export const ImgHeader = styled.div`

padding: 50px;
  img {
    width: 100px;
  }
  
`

export const TitleDetails = styled.div`
p {    
    color: red;    
    font-size: xx-large;
    padding: 5px;
}

b {
    color: white;
    font-size: large;    
}
`
/*----------------DETAILS CONTAINER-------------*/

export const BodyDetails = styled.div`
display: flex;
flex-direction: column;

`
export const MainDetails = styled.div`
display: flex;


.imgDetails{
  padding: 5px;
  background-color: brown;
  
}
`
export const InfoDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: whitesmoke;
border: 5px solid brown;
padding: 2vh;


p{
  display: flex;
  padding: 15px;
  flex-direction: column; 
  gap: 10px;
}

b{
  font-size: x-large;
  padding-top: 15px;
}

a{
  display: flex;
  justify-content: center;
  background-color: brown;
  height: 5vh;
  font-weight: bolder;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white; 
  font-size: 2vh;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 100px;

  :hover{
    transition: all 0.3s;
        transform: scale(0.9);
  }

/* display: flex;
align-items: center;
justify-content: center;
height: 8vh;
width: 14vw;
border: 0;
border-radius: 1.5vw;
background-color: brown;
color: #fffbf4;
font-size: 1.5vw;
cursor: pointer;
text-decoration: none;  */

} 


`