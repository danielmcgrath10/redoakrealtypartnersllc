import React from "react";
import "./about.scss";
import FB from "../../img/facebook.svg";
import Insta from "../../img/instagram.svg";
import Linkedin from "../../img/linkedin.svg";
import founders from "../../img/redoakwebshot.jpeg";
import { Helmet } from "react-helmet";
import { treeLogo } from "../../img/tree-01.svg";

export default function About(props) {
  return (
    <div id={"about-us"}>
      <Helmet>
        <title>About Us - RedOakRPLLC</title>
        <meta
          name={"description"}
          content={
            "We want to help you! Learn more about our story and how you can take the steps towards turning your house into cash."
          }
        />
        <meta
          name="keywords"
          content="sell, house, home, property, fast, cash, MA, Massachusetts, about, us"
        />
        <meta name={"theme-color"} content={"#7c0c00"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name={"canonical"} href={"https://redoakrpllc.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - RedOakRPLLC" />
        <meta
          property="og:description"
          content="We want to help you! Learn more about our story and how you can take the steps towards turning your house into cash."
        />
        <meta property="og:url" content="https://redoakrpllc.com" />
        <meta property="og:site_name" content="Red Oak Realty Partners LLC" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content={treeLogo} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta
          name="twitter:card"
          content="We want to help you! Learn more about our story and how you can take the steps towards turning your house into cash."
        />
        <meta name="twitter:description" content="Contact Us Today" />
        <meta name="twitter:title" content="About Us - RedOakRPLLC" />
        <meta name="twitter:image" content={treeLogo} />
      </Helmet>
      <div id={"background-image"}></div>
      <div id={"text-holder"}>
        <span id={"mission-statement"} className={"role-text"}>
          {/* Red Oak Realty Partners LLC is a real estate wholesaling company dedicated to providing the most
                      efficient and transparent service possible to its clients.  */}
          Our goal is to provide a transparent service that assists our clients
          by quickly and efficiently closing deals.
        </span>
        <img className={"about-us-pic"} src={founders} alt={"Founders"} />
        <span className={"role-text"}>Daniel McGrath | Michael Timson</span>
        <span className={"role-description"}>
          While in school studying engineering at Northeastern University, we
          found we wanted to help people on a more personal level, and realized
          our passion for real estate is a way to fulfill that desire. We strive
          to make the emotionally poignant, time consuming, and costly process
          of selling a house as fast, efficient, and transparent as possible for
          our clients.
        </span>
      </div>
    </div>
  );
}
