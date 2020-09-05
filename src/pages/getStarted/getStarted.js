import React from 'react';
import './getStarted.scss';

export default function GetStarted(props) {
    return(
        <div id={'get-started'}>
            <div id={'section-one'} className={'info-section'}>
                <div className={'half-section'}>
                    <span id={'get-started-questions'} className={'get-started-span'}>
                        Are you behind on your mortgage? <br/>
                        Are you overwhelmed by the cost of selling your property? <br/>
                        Do you want to sell your property quickly for cash?
                    </span>
                    <span id={'get-started-header'} className={'get-started-span'}>
                        Let Us Help You <br/>
                        All You Need to Do is Give Us Your Contact Information
                    </span>
                </div>
                <div className={'half-section'}>
                    Hello World
                </div>
            </div>
            <div id={'section-two'} className={'info-section'}>
                <div className={'half-section'}>
                    Hello World
                </div>
                <div className={'half-section'}>
                    <h1>We Contact You</h1>
                    <span id={'get-started-contact'} className={'get-started-span'}>
                        We want to begin the process of open and honest communication in order to make sure our solution is the best for you. <br/>
                        If we can be of service, we will then schedule an appointment to learn more about the property. <br/>
                        After assessing the property, we will provide you with a fair cash offer either in person or virtually.
                    </span>
                </div>
            </div>
            <div id={'section-three'} className={'info-section'}>
                <div className={'half-section'}>
                    <h1>We Reach An Agreement</h1>
                    <span id={'get-started-contact'} className={'get-started-span'}>
                        Once we have agreed upon a price and closing date, we sign a Purchase and Sale Agreement
                    </span>
                </div>
                <div className={'half-section'}>
                    Hello World
                </div>
            </div>
            <div id={'section-four'} className={'info-section'}>
                <div className={'half-section'}>
                    Hello World
                </div>
                <div className={'half-section'}>
                    <h1>You Receive Cash at Closing</h1>
                </div>
            </div>
        </div>
    );
}