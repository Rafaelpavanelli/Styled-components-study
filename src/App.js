import { Title,Wrapper,Button,Container,TomatoButton,Rotate,ThemeButton } from "./Styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
const themeColor={
  dark:{
    bg: "#000",
    color: "#fff"
  },
  light:{
    bg: "#fff",
    color: "#000"
  }
}
function App() {
  const[theme,setTheme]=useState(themeColor.dark);
 
    function handleTheme(){
      setTheme(theme === themeColor.dark? themeColor.light: themeColor.dark);
    }
  return (
  <Wrapper >
    <Title>
      Testing Styled-components
    </Title>
    <Container>
      <Title>Hello World!</Title>
    </Container>
    
    <Container>
      <Title>Buttons</Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato</TomatoButton>
      <TomatoButton as="a" href="#">Link with TomatoButton styles</TomatoButton>
      <Button as='a' href="#">Link with Button styles </Button>
    </Container>
    <Container>
      <Title>Animações</Title>
      <Rotate>&lt; 💅🏾 &gt; </Rotate>
    </Container>
    <Container>
      <Title>Theme</Title>
      <ThemeProvider theme={theme}>
        <ThemeButton onClick={handleTheme}>Tema</ThemeButton>
      </ThemeProvider>
    </Container>
  </Wrapper>
  );
}

export default App;
