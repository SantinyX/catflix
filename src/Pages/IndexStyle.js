import styled from "styled-components";

export const Body = styled.div`      
  flex-direction: column;
  margin: auto;
  text-align: center;
  bottom: 0;
  background-color: darkslategray;
  
  .imgBack {
    width: 100%;
    height: 500px;
  }
`
export const Title = styled.h1`
  color: whitesmoke;
  text-shadow: 5px 5px 2px black;
  padding-top: 20px;
  padding-bottom: 20px;   
  
`

export const MovieCard = styled.div`

    list-style: none;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(220px, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
    margin-right: 30px;
    padding-top: 0%;

    p {
      color: brown;
      font-weight: bold;
    }    

   li {
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

    img{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
    }

    a:hover{
        transition: all 0.3s;
        transform: scale(1.1);
    }
`
