import styled from "styled-components";
import StyledLink from "./StyledLink";

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;
function Header() {
  return (
    <Head>
      <StyledLink to={"/"}>Coins</StyledLink>
      <StyledLink to={"/:coinId"}>Coin</StyledLink>
    </Head>
  );
}

export default Header;
