import React from 'react';
import './oceanScene.scss';
import Sun from '../../img/sun.svg';
import House from '../../img/real-estate.svg';
import Logo from '../../img/tree-01.svg';

export default function OceanScene() {
    return(
        <div id={'ocean-scene-container'}>
            <img id={'ocean-scene-logo'} src={Logo}/>
            <img id={'ocean-scene-house'} src={House}/>
            <img id={'ocean-scene-sun'} src={Sun}/>
            <div id={'ocean-scene-land'}></div>
            <section className={'ocean'}>
                <div className={'wave wave1'}></div>
                <div className={'wave wave2'}></div>
                <div className={'wave wave3'}></div>
                <div className={'wave wave4'}></div>
            </section>
        </div>
    );
}