import React from "react";
import logo from "../../img/tree-01.svg";
import "./splashPage.scss";

export default function SplashScreen(){
    return(
        <div id={'splash-screen'}>
            <div class={'pulse'}>
                <img id={"splash-screen-logo"} src={logo}/>
            </div>
        </div>
    )
}