import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: ${(props) => props.theme.accentColor};
  text-shadow: 1px 1px 1px #000;
  border-radius: 20px;
  margin: 10px 0px;
  padding: 20px;
  font-size: 50px;
  text-align: center;
`;

function Coin() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  const loc = useLocation();
  const name: string = loc.state;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  const getDetail = async () => {
    const infoData = await axios(`coinpaprika/v1/coins/${coinId}`);
    console.log(infoData);
    const priceData = await axios(`coinpaprika/v1/tickers/${coinId}`);
    console.log(priceData);
    setInfo(infoData);
    setPriceInfo(priceInfo);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{name || "hello world"}</Title>
      </Header>
      {loading ? <Loading>Loading...</Loading> : <h1>hi</h1>}
    </Container>
  );
}

export default Coin;
