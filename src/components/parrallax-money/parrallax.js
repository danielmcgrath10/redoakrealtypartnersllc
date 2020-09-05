import React, {useEffect} from 'react';
import './parrallax.scss';
import Sun from '../../img/sun.svg';
import DumpTruck from '../../img/dump-truck.svg';
import TruckTire from '../../img/tire.svg';
import House from '../../img/real-estate.svg';
import Person from '../../img/profession.svg';
import Money from '../../img/money.svg';
import Cloud from '../../img/cloud.svg';
import Grass from '../../img/grass.svg';
import Tree from '../../img/tree-01.svg';

export default function ParrallaxImage(props){
    const handleScroll = () => {
        let scroll = window.scrollY;
        // let truck = document.getElementById('dump-truck');
        // let frontTire = document.getElementById('front-tire');
        // let backTire = document.getElementById('back-tire');
        let text = document.getElementById("header-text");
        // let money = document.getElementById("money");
        let cloud1 = document.getElementById("cloud1");
        let cloud2 = document.getElementById("cloud2");

        if(scroll < 987){
            // truck.style.left = scroll * 0.6 + 'px';
            // frontTire.style.left = scroll * 0.6 + 'px';
            // backTire.style.left = scroll * 0.6 + 'px';
            // money.style.left = scroll * 0.6 + 'px';
            // frontTire.style.transform = "rotate(" + scroll*0.5 + "deg)";
            // backTire.style.transform = "rotate(" + scroll*0.5 + "deg)";
            text.style.top = scroll * 0.9+ 'px';
            cloud1.style.left = scroll * 0.2 + 'px';
            cloud2.style.left = scroll * 0.2 + 'px';
        }

    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
        return(
            window.removeEventListener('scroll', () => handleScroll())
        )
    })

    return (
        <div id={'parrallax-section'}>
            <img id={'sun'} src={Sun} alt={'Sun'}/>
            <img id={'cloud1'} src={Cloud} alt={"Cloud"}/>
            <img id={'cloud2'} src={Cloud} alt={"Cloud"}/>
            {/* <img id={'dump-truck'} src={DumpTruck} alt={'Dump Truck'}/> */}
            <span id={'header-text'}>Get Cash Fast.</span>
            {/* <img id={'front-tire'} src={TruckTire} alt={'TruckTire'}/>
            <img id={'back-tire'} src={TruckTire} alt={'TruckTire'}/> */}
            <img id={'house'} alt={'House'} src={House}/>
            <img id={'person'} alt={'Person'} src={Person}/>
            {/* <img id={'money'} alt={'Money'} src={Money}/> */}
            <img id={'tree'} alt={'Tree'} src={Tree + '#svgView(viewBox(0, 0, 450, 465))'}/>
            <img id={'grass1'} alt={'Grass'} src={Grass}/>
            <img id={'grass2'} alt={'Grass'} src={Grass}/>
            <div id={'ground'} ></div>
        </div>
    )
}