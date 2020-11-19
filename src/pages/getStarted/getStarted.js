import React from "react";
import "./getStarted.scss";
import Contact from "../../img/contact.jpg";
import Money from "../../img/money-pic.jpg";
import Time from "../../img/time-2.jpg";
import Relax from "../../img/relax.jpg";
import { Helmet } from "react-helmet";
import { treeLogo } from "../../img/tree-01.svg";

export default function GetStarted(props) {
  return (
    <div id={"get-started"}>
      <Helmet>
        <title>Learn More - RedOakRPLLC</title>
        <meta
          name={"description"}
          content={"Fill out our form to sell your house as-is for cash!"}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="sell, house, home, property, fast, cash, MA, Massachusetts, contact, us"
        />
        <meta name={"theme-color"} content={"#7c0c00"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name={"canonical"} href={"https://redoakrpllc.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Learn More - RedOakRPLLC" />
        <meta
          property="og:description"
          content="Fill out our form to sell your house as-is for cash!"
        />
        <meta property="og:url" content="https://redoakrpllc.com" />
        <meta property="og:site_name" content="Red Oak Realty Partners LLC" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content={treeLogo} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta
          name="twitter:card"
          content="Fill out our form to sell your house as-is for cash!"
        />
        <meta name="twitter:description" content="Learn More" />
        <meta name="twitter:title" content="Learn More - RedOakRPLLC" />
        <meta name="twitter:image" content={treeLogo} />
      </Helmet>
      <div id={"section-one"} className={"info-section"}>
        <div className={"half-section-text"}>
          <span className={"get-started-questions get-started-span"}>
            {/* Are you behind on your mortgage? <br/> */}
            Is your home a burden? <br />
            Are you overwhelmed by the cost of selling your property? <br />
            Do you want to sell your house quickly for cash? <br />
          </span>
          <h1 className={"get-started-header"}>We Can Help</h1>
          <span
            id={"emphasis"}
            className={"get-started-questions get-started-span"}
          >
            Call Us Today to Get Started
          </span>
        </div>
        <div className={"half-section"}>
          <img alt={"Contact Us"} src={Contact} className={"contact-photo"} />
        </div>
      </div>
      <div id={"section-two"} className={"info-section"}>
        <div className={"half-section"}>
          <img alt={"Leave Your Phone"} src={Time} className={"contact-photo"} />
        </div>
        <div className={"half-section-text"}>
          <h1 className={"get-started-header"}>We Move Quickly</h1>
          <span className={"get-started-contact get-started-span"}>
            We provide open and honest communication to find a solution that
            works for you. Your time is valuable, so we promptly schedule a
            property assessment if our services meet your needs. Following our
            assessment, we deliver a fair cash offer.
          </span>
        </div>
      </div>
      <div id={"section-three"} className={"info-section"}>
        <div className={"half-section-text"}>
          <h1 className={"get-started-header"}>Your Work is Done</h1>
          <span className={"get-started-contact get-started-span"}>
            After you sign a Purchase and Sale Agreement with us, you can sit
            back and let us do the rest.
          </span>
        </div>
        <div className={"half-section"}>
          <img alt={"Agreement"} src={Relax} className={"contact-photo"} />
        </div>
      </div>
      <div id={"section-four"} className={"info-section"}>
        <div className={"half-section"}>
          <img alt={"Fast Cash"} src={Money} className={"contact-photo"} />
        </div>
        <div className={"half-section-text"}>
          <h1 className={"get-started-header"}>You Receive Cash at Closing</h1>
        </div>
      </div>
    </div>
  );
}
