import styled,{keyframes} from 'styled-components';



export const Title=styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #BF4F74;
`;

export const Wrapper=styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Container=styled.div`
  width: auto;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const Button=styled.button`
  background: ${(props)=> props.primary ? "#BF4F74" : "white"};
  color: ${(props)=> props.primary ?  "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`
export const TomatoButton=styled(Button)`
  color: tomato;
  border-color: tomato;

`;

const rotate=keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`
export const Rotate=styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`
export const ThemeButton=styled.button`
  background-color: ${(props)=> props.theme.bg};
  color: ${(props)=> props.theme.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  transition: 0.5s ease-in-out;
`