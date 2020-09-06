import React from 'react';
import './getStarted.scss';
import Contact from '../../img/contact.jpg';
import Telephone from '../../img/phone.jpg';
import Agreement from '../../img/agreement.jpg';
import Money from '../../img/money-pic.jpg';

export default function GetStarted(props) {
    return(
        <div id={'get-started'}>
            <div id={'section-one'} className={'info-section'}>
                <div className={'half-section-text'}>
                    <span id={'get-started-questions'} className={'get-started-span'}>
                        Are you behind on your mortgage? <br/>
                        Are you overwhelmed by the cost of selling your property? <br/>
                        Do you want to sell your property quickly for cash?
                    </span>
                    <h1 className={'get-started-header'}>
                        Let Us Help You.
                    </h1>
                </div>
                <div className={'half-section'}>
                    <img alt={'Contact'} src={Contact} className={'contact-photo'}/>
                </div>
            </div>
            <div id={'section-two'} className={'info-section'}>
                <div className={'half-section'}>
                    <img alt={'Phone'} src={Telephone} className={'contact-photo'}/>
                </div>
                <div className={'half-section-text'}>
                    <h1 className={'get-started-header'}>We Contact You</h1>
                    <span id={'get-started-contact'} className={'get-started-span'}>
                        We want to begin the process of open and honest communication in order to make sure our solution is the best for you.
                        If we can be of service, we will then schedule an appointment to learn more about the property.
                        After assessing the property, we will provide you with a fair cash offer either in person or virtually.
                    </span>
                </div>
            </div>
            <div id={'section-three'} className={'info-section'}>
                <div className={'half-section-text'}>
                    <h1 className={'get-started-header'}>We Reach An Agreement</h1>
                    <span id={'get-started-contact'} className={'get-started-span'}>
                        Once we have agreed upon a price and closing date, we sign a Purchase and Sale Agreement
                    </span>
                </div>
                <div className={'half-section'}>
                    <img alt={'Agreement'} src={Agreement} className={'contact-photo'}/>
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