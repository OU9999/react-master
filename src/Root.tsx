import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import { ReactQueryDevtools } from "react-query/devtools";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
    }
  *{
    box-sizing: border-box;
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </>
  );
}

export default Root;
