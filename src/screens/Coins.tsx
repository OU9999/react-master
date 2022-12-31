import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoins } from "../api";
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
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  display: flex;
  justify-content: flex-start;
  padding-left: 25px;
  align-items: center;
  background-color: gray;
  color: ${(props) => props.theme.textColor};
  border-radius: 20px;
  margin: 10px 0px;

  a {
    text-shadow: 1px 1px 1px ${(props) => props.theme.bgColor};
    padding: 20px;
  }
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
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

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex-hex",
//     name: "HEX",
//     symbol: "HEX",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "token",
//   },
// ];

function Coins() {
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);
  // const getCoins = async () => {
  //   const res = await axios.get("coinpaprika/v1/coins");
  //   setCoins(res.data.slice(0, 5));
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getCoins();
  // });

  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          data?.slice(0, 5).map((coin) => (
            <Coin key={coin.id}>
              <Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
              />
              <StyledLink to={`/${coin.id}`} state={coin.name}>
                {coin.name} &rarr;
              </StyledLink>
            </Coin>
          ))
        )}
      </CoinList>
    </Container>
  );
}

export default Coins;
