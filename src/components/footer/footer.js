import React from "react";
import "./footer.scss";
import FB from "../../img/facebook.svg";
import Insta from "../../img/instagram.svg";
import Tree from "../../img/tree-01.svg";
import Linked from "../../img/linkedin.svg";

export default function Footer(props) {
  return (
    <div id={"footer"}>
      <div className={"footer-section"}>
        <img alt={"Logo"} src={Tree} id={"footer-logo"} />
        <span id={"footer-title"} className={"footer-text"}>
          Red Oak Realty Partners LLC.
        </span>
      </div>
      <div className={"footer-section"}>
        <span id={"footer-information"} className={"footer-text"}>
          1510 Tremont Street <br />
          Boston, MA 02120 <br />
          (508) 319 - 9503 <br />
          <a href={"mailto:info@redoakrpllc.com"}>info@redoakrpllc.com</a>
        </span>
        <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
          {/* <a href={'https://www.facebook.com/'}><img alt={'Facebook'} src={FB} id={'fb'} /></a> */}
          <a target="_blank" href={"https://www.instagram.com/redoakrpllc"}>
            <img alt={"Instagram"} src={Insta} id={"insta"} />
          </a>
          {/* <a href={'https://www.linkedin.com/'}><img alt={'LinkedIn'} src={Linked} id={'linked'}/></a> */}
        </div>
      </div>
      <div className={"footer-section"}>
        <div className={"footer-section-horizontal"}>
          <a className={"footer-text-link"} href={"/"}>
            Home
          </a>
          <a className={"footer-text-link"} href={"/get-started"}>
            Get Started
          </a>
          <a className={"footer-text-link"} href={"/about-us"}>
            Who We Are
          </a>
        </div>
        <div className={"footer-text-attr"}>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div className={"footer-text-attr"}>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/icongeek26"
            title="Icongeek26"
          >
            Icongeek26
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div className={"footer-text-attr"}>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/free-icon/soil_3382647"
            title="ultimatearm"
          >
            ultimatearm
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@solomac?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Adam Solomon
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/contact?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@antoinebarres?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Antoine Barrès
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/contact?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@sctgrhm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Scott Graham
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/agreement?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@giorgiotrovato?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Giorgio Trovato
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/cash?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@sunday_digital?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Nastuh Abootalebi
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/office?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@clemono?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Clem Onojeghuo
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/relax?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <span className={"footer-text-attr"}>
          Photo by{" "}
          <a href="https://unsplash.com/@knobelman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Yaniv Knobel
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/alarm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
}
