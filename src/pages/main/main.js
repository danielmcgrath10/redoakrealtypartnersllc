import React from "react";
import "./main.scss";
import ParrallaxImage from "../../components/parrallax/parrallax";
import { Helmet } from "react-helmet";
import {treeLogo} from "../../img/tree-01.svg";


export default function Main(props) {
  return (
    <div id={"main-page"}>
      <Helmet>
        <title>Sell Your House Fast - RedOakRPLLC</title>
        <meta
          name={"description"}
          content={"Learn how to sell your home fast for cash in Massachusetts."}
        />
        <meta
          name="keywords"
          content="sell, house, home, property, fast, cash, MA, Massachusetts"
        />
        <meta name={"theme-color"} content={"#7c0c00"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name={"canonical"} href={"https://redoakrpllc.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sell Your House Fast - RedOakRPLLC" />
        <meta
          property="og:description"
          content="Learn how to quickly sell your house as-is for cash in MA"
        />
        <meta property="og:url" content="https://redoakrpllc.com" />
        <meta property="og:site_name" content="Red Oak Realty Partners LLC" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content={treeLogo} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta
          name="twitter:card"
          content="Learn how to quickly sell your house as-is for cash in MA"
        />
        <meta name="twitter:description" content="Contact Us Today" />
        <meta name="twitter:title" content="Sell Your House Fast - RedOakRPLLC" />
        <meta name="twitter:image" content={treeLogo} />
      </Helmet>
      <ParrallaxImage />
    </div>
  );
}
