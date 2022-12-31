import styled from "styled-components";
import StyledLink from "./StyledLink";

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`;
interface IHeader {
  toggleDark: () => void;
}
function Header({ toggleDark }: IHeader) {
  return (
    <Head>
      <StyledLink to={"/"}>🏠</StyledLink>
      <Button onClick={toggleDark}>💩</Button>
    </Head>
  );
}

export default Header;
