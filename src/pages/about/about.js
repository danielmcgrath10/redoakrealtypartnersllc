import React from 'react';
import './about.scss';
import FB from '../../img/facebook.svg';
import Insta from '../../img/instagram.svg';
import Linkedin from '../../img/linkedin.svg';
import DannyHeadshot from '../../img/danny-headshot.JPG';

export default function About(props) {
    return(
        <div id={'about-us'}>
            <div id={'top'} className={'section'}>
                <span className={'role-text'}>Michael Timson, Manager</span>
                <span className={'role-description'}>
                    Resident savage of the company. Michael has had little to no experience in the real estate
                    world, but he has read copious amounts on everything ranging from marketing to psychology.
                    His knee also does a weird clicky thing.
                </span>
                <div className={'role-social'}>
                    <img alt={'FaceBook Link'} src={FB} className={'about-social-icons'} id={'fb-link'}/>
                    <img alt={'Instagram Link'} src={Insta} className={'about-social-icons'} id={'insta-link'}/>
                    <img alt={'LinkedIn Link'} src={Linkedin} className={'about-social-icons'} id={'linkedin-link'}/>
                </div>
            </div>
            <div id={'bottom'} className={'section'}>
                <div className={'image-cropper'}>
                    <img alt={'Headshot'} src={DannyHeadshot} id={'danny-headhsot'} />
                </div>
                <span className={'role-text'}>Daniel McGrath, Manager</span>
                <span className={'role-description'}>
                    Danny has very little knowledge in the way of marketing, but, if you haven't heard, 
                    he has worked construction. Otherwise, Danny's only experience in real 
                </span>
                <div className={'role-social'}>
                    <img alt={'FaceBook Link'} src={FB} className={'about-social-icons'} id={'fb-link'}/>
                    <img alt={'Instagram Link'} src={Insta} className={'about-social-icons'} id={'insta-link'}/>
                    <img alt={'LinkedIn Link'} src={Linkedin} className={'about-social-icons'} id={'linkedin-link'}/>
                </div>
            </div>
        </div> 
    );
}