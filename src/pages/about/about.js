import React from "react";
import "./about.scss";
import FB from "../../img/facebook.svg";
import Insta from "../../img/instagram.svg";
import Linkedin from "../../img/linkedin.svg";
import founders from "../../img/redoakwebshot.jpeg";

export default function About(props) {
  return (
    <div id={"about-us"}>
      <span id={"mission-statement"} className={"role-text"}>
        {/* Red Oak Realty Partners LLC is a real estate wholesaling company dedicated to providing the most
                    efficient and transparent service possible to its clients.  */}
        Our goal is to provide a transparent service that assists our clients by
        quickly and efficiently closing deals.
      </span>
      <img className={"about-us-pic"} src={founders} alt={"Founders"} />
      <span className={"role-text"}>Daniel McGrath | Michael Timson</span>
      <span className={"role-description"}>
        While in school studying engineering at Northeastern University, we
        found we wanted to help people on a more personal level, and realized
        our passion for real estate is a way to fulfill that desire. We strive
        to make the emotionally poignant, time consuming, and costly process of
        selling a house as fast, efficient, and transparent as possible for our
        clients.
      </span>
    </div>
  );
}
