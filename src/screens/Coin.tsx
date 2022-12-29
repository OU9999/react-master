import { useEffect, useState } from "react";
import { Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";

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
  margin-bottom: 30px;
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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 25px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  a {
    color: ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor};
  }
`;

interface IinfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  // tags: object;
  // team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  // links: object;
  // links_extended: object;
  // whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface IpriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  const loc = useLocation();
  const [info, setInfo] = useState<IinfoData>();
  const [priceInfo, setPriceInfo] = useState<IpriceData>();
  const priceMatch = useMatch(`/${coinId}/price`);
  const chartMatch = useMatch(`/${coinId}/chart`);

  const getDetail = async () => {
    const infoData = await (
      await fetch(`coinpaprika/v1/coins/${coinId}`)
    ).json();
    const priceData = await (
      await fetch(`coinpaprika/v1/tickers/${coinId}`)
    ).json();
    setInfo(infoData);
    setPriceInfo(priceData);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Container>
      <Header>
        <Title>
          {loc.state?.name
            ? loc.state.name
            : loading
            ? "Loading..."
            : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={priceMatch !== null}>
              <StyledLink to={`price`}>price</StyledLink>
            </Tab>
            <Tab isActive={chartMatch !== null}>
              <StyledLink to={`chart`}>chart</StyledLink>
            </Tab>
          </Tabs>

          <Outlet />
        </>
      )}
    </Container>
  );
}

export default Coin;
