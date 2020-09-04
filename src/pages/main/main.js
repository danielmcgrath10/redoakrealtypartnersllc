import React from 'react';
import "./main.scss";
import ParrallaxImage from '../../components/parrallax-money/parrallax';
import Form from '../../img/form.svg';
import Phone from '../../img/telephone.svg';
import Money from '../../img/money.svg';

export default function Main(props) {
    

    return(
        <div id={'main-page'}>
            <ParrallaxImage />
            <div id={'how-it-works'}>
                <h1 className={'section-header'}>How We Help You</h1>
                <div id={'help-boxes'}>
                    <div className={'message-box'}>
                        <img src={Form} alt={'Form'} className={'message-box-img'}/>
                        <span className={'message-box-text'}>You Fill Out Our Form</span>
                    </div>
                    <div className={'message-box'}>
                        <img src={Phone} alt={'Phone'} className={'message-box-img'}/>
                        <span className={'message-box-text'}>We Contact You</span>
                    </div>
                    <div className={'message-box'}>
                        <img src={Money} alt={'Money'} className={'message-box-img'}/>
                        <span className={'message-box-text'}>You Receive Cash at Closing</span>
                    </div>
                </div>
            </div>  
        </div>
    )
}