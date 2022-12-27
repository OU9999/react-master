import styled, { keyframes, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {  
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  /* other styles */
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Test = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 88px;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Test>Hello!</Test>
    </Wrapper>
  );
}

export default App;
