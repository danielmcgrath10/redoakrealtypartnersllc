import React, {useEffect} from 'react';
import './parrallax.scss';
import Sun from '../../img/sun.svg';
import House from '../../img/real-estate.svg';
import Money from '../../img/money.svg';
import Cloud from '../../img/cloud.svg';
import Grass from '../../img/grass.svg';
import Tree from '../../img/tree-01.svg';
import Mailbox from '../../img/Mailbox.svg';
import Form from '../../img/form.svg';
import Phone from '../../img/telephone.svg';

export default function ParrallaxImage(props){
    const handleScroll = () => {
        let scroll = window.scrollY;
        let text = document.getElementById("header-text");
        let cloud1 = document.getElementById("cloud1");
        let cloud2 = document.getElementById("cloud2");
        let cloud3 = document.getElementById("cloud3");
        let cloud4 = document.getElementById("cloud4");
        let cloud5 = document.getElementById("cloud5");
        let cloud6 = document.getElementById("cloud6");
        let cloud7 = document.getElementById("cloud7");
        let cloud8 = document.getElementById("cloud8");
        let cloud9 = document.getElementById("cloud9");
        let fallingMoney1 = document.getElementById("fallingmoney1");
        let fallingMoney2 = document.getElementById("fallingmoney2");
        let fallingMoney3 = document.getElementById("fallingmoney3");
        let fallingMoney4 = document.getElementById("fallingmoney4");
        let fallingMoney5 = document.getElementById("fallingmoney5");
        let fallingMoney6 = document.getElementById("fallingmoney6");

        let screen = window.innerWidth;
        // console.log(scroll);
        if(screen >=1600) {
            if(scroll < 987){
                text.style.top = scroll * 0.9+ 'px';
                cloud1.style.left = scroll * 0.2 + 'px';
                cloud2.style.left = scroll * 0.2 + 'px';
                cloud3.style.left = scroll * 0.2 + 'px';
                cloud4.style.left = scroll * 0.2 + 'px';
                fallingMoney1.style.top = scroll * 0.7 + 'px';
                fallingMoney2.style.top = scroll * 0.6 + 'px';
            } 
            if(scroll < 1666){
                cloud5.style.left = scroll * 0.2 + 'px';
                cloud6.style.left = scroll * 0.2 + 'px';
                cloud7.style.left = scroll * 0.2 + 'px';
            }

            if(scroll > 969){
                cloud8.style.left = scroll * 0.1 + 'px';
                cloud9.style.left = scroll * 0.1 + 'px';
                fallingMoney5.style.top = scroll * 0.17 + 'px';
                fallingMoney6.style.top = scroll * 0.17 + 'px';
            }
        } else {
            if(scroll < 764){
                text.style.top = scroll * 0.2+ 'px';
                cloud1.style.left = scroll * 0.05 + 'px';
                cloud2.style.left = scroll * 0.05 + 'px';
                cloud3.style.left = scroll * 0.1 + 'px';
                cloud4.style.left = scroll * 0.1 + 'px';
                fallingMoney1.style.top = scroll * 0.7 + 'px';
                fallingMoney2.style.top = scroll * 0.6 + 'px';
            }
            if(scroll > 61 ){
                cloud5.style.left = scroll * 0.1 + 'px';
                cloud6.style.left = scroll * 0.1 + 'px';
                cloud7.style.left = scroll * 0.1 + 'px';
            }
            if(scroll > 1762) {
                cloud8.style.left = (scroll * 0.01) * 3 + 'px';
                cloud9.style.left = (scroll * 0.01) * 3 + 'px';
                fallingMoney5.style.top = (scroll * 0.03) * 4 + 'px';
                fallingMoney6.style.top = (scroll * 0.03) * 4 + 'px';
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
            <div className={'parrallax-section-section'}>
                <img id={'sun'} src={Sun} alt={'Sun'}/>
                <img id={'cloud1'} src={Cloud} alt={"Cloud"}/>
                <img id={'cloud2'} src={Cloud} alt={"Cloud"}/>
                <img id={'cloud3'} src={Cloud} alt={"Cloud"}/>
                <img id={'cloud4'} src={Cloud} alt={"Cloud"}/>
                <span id={'header-text'}>Make Your House Work For You</span>
                <img id={'fallingmoney1'} alt={'Money'} src={Money}/>
                <img id={'fallingmoney2'} alt={'Money'} src={Money}/>
            </div>
            <div id={'help-section'} className={'parrallax-section-section'}>
                <div id={'help-boxes'}>
                    <div className={'message-box'}>
                        <img src={Form} alt={'Form'} className={'message-box-img'}/>
                        <span className={'message-box-text'}>You Give Us Your Information</span>
                    </div>
                    <div className={'message-box'}>
                        <img src={Phone} alt={'Phone'} className={'message-box-img'}/>
                        <span className={'message-box-text'}>We Call You</span>
                    </div>
                    <div className={'message-box'}>
                        <img src={Money} alt={'Money'} className={'message-box-img'}/>
                        <span className={'message-box-text'}>You Receive Cash at Closing</span>
                    </div>
                </div>
                <img id={'cloud5'} src={Cloud} alt={"Cloud"}/>
                <img id={'cloud6'} src={Cloud} alt={"Cloud"}/>
                <img id={'cloud7'} src={Cloud} alt={"Cloud"}/>
            </div>
            <div className={'parrallax-section-section'}>
                <span id={'header-text-bottom'}>Your Money Is Waiting.<br/> Contact Us Today</span>
                <img id={'fallingmoney5'} alt={'Money'} src={Money}/>
                <img id={'fallingmoney6'} alt={'Money'} src={Money}/>
                <img id={'cloud8'} src={Cloud} alt={"Cloud"}/>
                <img id={'cloud9'} src={Cloud} alt={"Cloud"}/>
                <img id={'mailbox'} alt={'Mailbox'} src={Mailbox}/>
                <img id={'house'} alt={'House'} src={House}/>
                <img id={'money'} alt={'Money'} src={Money}/>
                <img id={'money1'} alt={'Money'} src={Money}/>
                <img id={'money2'} alt={'Money'} src={Money}/>
                <img id={'tree'} alt={'Tree'} src={Tree}/>
                <img id={'grass1'} alt={'Grass'} src={Grass}/>
                <img id={'grass2'} alt={'Grass'} src={Grass}/>
                <div id={'ground'} ></div>
            </div>     
        </div>
    )
}