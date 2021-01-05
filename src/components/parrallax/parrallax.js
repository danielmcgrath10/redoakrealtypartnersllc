import React, { useEffect } from "react";
import "./parrallax.scss";
import Moon from "../../img/moon.svg";
import TitleCloud from "../../img/cloud.svg";
import starCluster1 from "../../img/star-cluster.svg";
import Form from "../../img/form.svg";
import Phone from "../../img/telephone.svg";
import Money from "../../img/money.svg";
import MainForm from "../mainForm/mainForm";
import OceanScene from "../oceanScene/oceanScene";

export default function ParrallaxImage(props) {
  return (
    <div id={"parrallax"} className={"container-fluid"}>
      <div id={"top"} className={"container-fluid parrallax-section"}>
        <div id={"starry-background"} className={"container-fluid"}>
          <img id={"moon"} className={"parrallax-img"} src={Moon} />
          <span id={"title-one"}>Make Your House Work For You.</span>
          <img
            id={"title-cloud"}
            className={"parrallax-img"}
            src={TitleCloud}
          />
          <img
            id={"title-cloud-2"}
            className={"parrallax-img"}
            src={TitleCloud}
          />
        </div>
      </div>
      <div id={"middle"} className={"container-fluid parrallax-section"}>
        <div id={"starry-background"} className={"container-fluid"}>
          <div id={"help-boxes"}>
            <div className={"message-box"}>
              <img src={Form} alt={"Form"} className={"message-box-img"} />
              <span className={"message-box-text"}>
                You Give Us Your Information
              </span>
            </div>
            <div className={"message-box"}>
              <img src={Phone} alt={"Phone"} className={"message-box-img"} />
              <span className={"message-box-text"}>We Call You</span>
            </div>
            <div className={"message-box"}>
              <img src={Money} alt={"Money"} className={"message-box-img"} />
              <span className={"message-box-text"}>
                You Receive Cash at Closing
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id={"bottom"} className={"container-fluid parrallax-section"}>
        <span id={"title-two"}>
          Your Money is Waiting <br /> Contact Us Today
        </span>
        <MainForm />
        <OceanScene />
      </div>
    </div>
  );
}
