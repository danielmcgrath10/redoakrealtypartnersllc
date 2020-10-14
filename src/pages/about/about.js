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
                <span id={'mission-statement'} className={'role-text'}>
                    {/* Red Oak Realty Partners LLC is a real estate wholesaling company dedicated to providing the most
                    efficient and transparent service possible to its clients.  */}
                    Our goal is to create value for our clients by taking on the burden of selling their property, and closing deals quickly.
                </span>
                <span className={'role-text'}>Michael Timson | Daniel McGrath</span>
                <span className={'role-description'}>
                    We founded this company to address the main issues that are brought to mind when tasked with selling a property. 
                    
                </span>
                <div className={'role-social'}>
                    <img alt={'FaceBook Link'} src={FB} className={'about-social-icons'} id={'fb-link'}/>
                    <a target="_blank" href={'https://www.instagram.com/redoakrpllc'}><img alt={'Instagram Link'} src={Insta} className={'about-social-icons'} id={'insta-link'}/></a>
                    <img alt={'LinkedIn Link'} src={Linkedin} className={'about-social-icons'} id={'linkedin-link'}/>
                </div>
            </div>
        </div> 
    );
}