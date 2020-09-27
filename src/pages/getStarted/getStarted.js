import React from 'react';
import './getStarted.scss';
import Contact from '../../img/contact.jpg';
import Money from '../../img/money-pic.jpg';
import Time from '../../img/time-2.jpg';
import Relax from '../../img/relax.jpg';

export default function GetStarted(props) {
    return(
        <div id={'get-started'}>
            <div id={'section-one'} className={'info-section'}>
                <div className={'half-section-text'}>
                    <span className={'get-started-questions get-started-span'}>
                        {/* Are you behind on your mortgage? <br/> */}
                        Is your home a burden? <br/>
                        Are you overwhelmed by the cost of selling your property? <br/>
                        Do you want to sell your house quickly for cash? <br/>
                    </span>
                    <h1 className={'get-started-header'}>
                        We Can Help 
                    </h1>
                    <span id={'emphasis'} className={'get-started-questions get-started-span'}>
                        Call Us Today to Get Started
                    </span>
                </div>
                <div className={'half-section'}>
                    <img alt={'Contact'} src={Contact} className={'contact-photo'}/>
                </div>
            </div>
            <div id={'section-two'} className={'info-section'}>
                <div className={'half-section'}>
                    <img alt={'Phone'} src={Time} className={'contact-photo'}/>
                </div>
                <div className={'half-section-text'}>
                    <h1 className={'get-started-header'}>We Move Quickly</h1>
                    <span className={'get-started-contact get-started-span'}>
                        We provide open and honest communication to find a solution that works for you.
                        Your time is valuable, so we promptly schedule a property assessment if our services meet your needs.
                        Following our assessment, we deliver a fair cash offer.
                    </span>
                </div>
            </div>
            <div id={'section-three'} className={'info-section'}>
                <div className={'half-section-text'}>
                    <h1 className={'get-started-header'}>Your Work is Done</h1>
                    <span className={'get-started-contact get-started-span'}>
                        After you sign a Purchase and Sale Agreement with us, you can sit back and let us do the rest.
                    </span>
                </div>
                <div className={'half-section'}>
                    <img alt={'Agreement'} src={Relax} className={'contact-photo'}/>
                </div>
            </div>
            <div id={'section-four'} className={'info-section'}>
                <div className={'half-section'}>
                <img alt={'Money'} src={Money} className={'contact-photo'}/>
                </div>
                <div className={'half-section-text'}>
                    <h1 className={'get-started-header'}>You Receive Cash at Closing</h1>
                </div>
            </div>
        </div>
    );
}