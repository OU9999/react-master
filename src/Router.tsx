import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Chart from "./screens/Chart";
import Coin from "./screens/Coin";
import Coins from "./screens/Coins";
import Price from "./screens/Price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Root />,
//     },
//     {
//       path: "/:coinID",
//       element: <Coins />,
//       children: [
//         {
//           path: "chart",
//           element: <Chart />,
//         },
//         {
//           path: "price",
//           element: <Price />,
//         },
//       ],
//     },
//   ]
//   { basename: "/reactMasterCrypto" }
// );

export default router;
