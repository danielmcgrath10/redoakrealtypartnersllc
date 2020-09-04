import React, {useEffect} from 'react';
import './parrallax.scss';
import Sun from '../../img/sun.svg';
import DumpTruck from '../../img/dump-truck.svg';
import TruckTire from '../../img/tire.svg';
import House from '../../img/real-estate.svg';
import Person from '../../img/profession.svg';
import Money from '../../img/money.svg';

export default function ParrallaxImage(props){
    const handleScroll = () => {
        let scroll = window.scrollY;
        let truck = document.getElementById('dump-truck');
        let frontTire = document.getElementById('front-tire');
        let backTire = document.getElementById('back-tire');
        let text = document.getElementById("header-text");
        let money = document.getElementById("money");


        truck.style.left = scroll * 0.5 + 'px';
        frontTire.style.left = scroll * 0.5 + 'px';
        backTire.style.left = scroll * 0.5 + 'px';
        frontTire.style.transform = "rotate(" + scroll*0.5 + "deg)";
        backTire.style.transform = "rotate(" + scroll*0.5 + "deg)";
        text.style.top = scroll * 0.9+ 'px';
        money.style.left = scroll * 0.5 + 'px';
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
            <img id={'dump-truck'} src={DumpTruck} alt={'Dump Truck'}/>
            <span id={'header-text'}>Need to Sell Your House Fast?</span>
            <img id={'front-tire'} src={TruckTire} alt={'TruckTire'}/>
            <img id={'back-tire'} src={TruckTire} alt={'TruckTire'}/>
            <img id={'house'} alt={'House'} src={House}/>
            <img id={'person'} alt={'Person'} src={Person}/>
            <img id={'money'} alt={'Money'} src={Money}/>
            <div id={'ground'} ></div>
        </div>
    )
}