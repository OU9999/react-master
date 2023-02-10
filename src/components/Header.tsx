import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
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
  font-size: 50px;
`;

const HomeButton = styled(StyledLink)`
  font-size: 50px;
`;
function Header() {
  const setterFn = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setterFn((prev) => !prev);
  return (
    <Head>
      <HomeButton to={"/"}>🏠</HomeButton>
      <Button onClick={toggleDarkAtom}>☀️</Button>
    </Head>
  );
}

export default Header;
