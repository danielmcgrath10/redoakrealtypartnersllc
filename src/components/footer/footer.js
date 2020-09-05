import React from 'react';
import './footer.scss';
import FB from '../../img/facebook.svg';
import Insta from '../../img/instagram.svg';
import Tree from '../../img/tree-01.svg';
import { Row } from 'reactstrap';

export default function Footer(props){

    return(
        <div id={'footer'}>
            <Row style={{width: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <div className={'footer-section'}>
                    <img alt={'Logo'} src={Tree} id={'footer-logo'}/>
                    <span id={'footer-title'} className={'footer-text'}>Red Oak Realty Partners LLC.</span>
                </div>
                <div className={'footer-section'}>
                    <span id={'footer-information'} className={'footer-text'}>
                        1510 Tremont St. <br/>
                        Boston, MA 02120 <br/>
                        (XXX) XXX - XXXX | (XXX) XXX - XXXX<br/>
                        XXXXXXX@XXXXX.XXXX | XXXXXXX@XXXXX.XXXX
                    </span>
                    <div style={{display: 'flex', flexDirection: 'row', margin: '10px'}}>
                        <a href={'https://www.facebook.com/'}><img alt={'Facebook'} src={FB} id={'fb'} /></a>
                        <a href={'https://www.instagram.com/'}><img alt={'Instagram'} src={Insta} id={'insta'}/></a>
                    </div>
                </div>
                <div className={'footer-section'}>
                    <div className={'footer-text'}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div className={'footer-text'}>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div className={'footer-text'}>Icons made by <a href="https://www.flaticon.com/free-icon/soil_3382647" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </Row>
        </div>
    )
}