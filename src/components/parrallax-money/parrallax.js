import React, {useEffect} from 'react';
import './parrallax.scss';
import Sun from '../../img/sun.svg';
import House from '../../img/real-estate.svg';
import Money from '../../img/money.svg';
import Cloud from '../../img/cloud.svg';
import Grass from '../../img/grass.svg';
import Tree from '../../img/tree-01.svg';
import Mailbox from '../../img/Mailbox.svg';

export default function ParrallaxImage(props){
    const handleScroll = () => {
        let scroll = window.scrollY;
        let text = document.getElementById("header-text");
        let cloud1 = document.getElementById("cloud1");
        let cloud2 = document.getElementById("cloud2");

        let screen = window.innerWidth;
        if(screen >=1600) {
            if(scroll < 987){
                text.style.top = scroll * 0.9+ 'px';
                cloud1.style.left = scroll * 0.2 + 'px';
                cloud2.style.left = scroll * 0.2 + 'px';
            }
        } else {
            if(scroll < 764){
                text.style.top = scroll * 0.7+ 'px';
                cloud1.style.left = scroll * 0.05 + 'px';
                cloud2.style.left = scroll * 0.05 + 'px';
            }
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
            <span id={'header-text'}>Get Cash Fast.</span>
            <img id={'mailbox'} alt={'Mailbox'} src={Mailbox}/>
            <img id={'house'} alt={'House'} src={House}/>
            <img id={'money'} alt={'Money'} src={Money}/>
            <img id={'money1'} alt={'Money'} src={Money}/>
            <img id={'money2'} alt={'Money'} src={Money}/>
            <img id={'tree'} alt={'Tree'} src={Tree + '#svgView(viewBox(90, 30, 350, 400))'}/>
            <img id={'grass1'} alt={'Grass'} src={Grass}/>
            <img id={'grass2'} alt={'Grass'} src={Grass}/>
            <div id={'ground'} ></div>
        </div>
    )
}