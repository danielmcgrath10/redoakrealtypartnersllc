import React from 'react';
import "./main.scss";
import ParrallaxImage from '../../components/parrallax-money/parrallax';
import Form from '../../img/form.svg';
import Phone from '../../img/telephone.svg';
import Money from '../../img/money.svg';

export default function Main(props) {
    const {
        OurProcessRef
    } = props;
    return(
        <div id={'main-page'}>
            <ParrallaxImage />
        </div>
    )
}