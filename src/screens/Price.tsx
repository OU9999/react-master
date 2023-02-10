import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atoms";
import { IChart, IData } from "./Chart";

function Price() {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useOutletContext<IChart>();
  const { isLoading, data } = useQuery<IData[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  const exceptData = data ?? [];
  const chartData = exceptData?.map((i) => {
    return {
      x: i.time_close,
      y: [i.open, i.high, i.low, i.close],
    };
  });

  console.log(chartData);

  return (
    <div>
      <ReactApexChart
        type="candlestick"
        series={[
          {
            data: chartData,
          },
        ]}
        options={{
          theme: {
            mode: isDark ? "dark" : "light",
          },
          chart: {
            height: 300,
            width: 500,
            background: "transparent",
            toolbar: {
              show: false,
            },
          },
          grid: {
            show: false,
          },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            labels: {
              show: false,
            },
            type: "datetime",
            categories: data?.map((price) =>
              new Date(price.time_close * 1000).toUTCString()
            ),
          },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: ["blue"],
              stops: [0, 100],
            },
          },
          colors: ["red"],
          tooltip: {
            y: {
              formatter: (value) => `$${value.toFixed(3)}`,
            },
          },
        }}
      />
    </div>
  );
}

export default Price;
