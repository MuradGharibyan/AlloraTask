import React from 'react';
import './style.scss'
import { Button } from '../Button';

const Banner = () => {
    return (
        <div className="first container">
            <div className={'firstSectionTop'}>
                <p>2016-22</p>
                <div><img src={'/images/mode.png'} alt={'img'}/></div>
                <p>Allora = design + thinking</p>
            </div>
            <div className={'bannerLine'}> </div>
            <h1 className={'bannerH1'}>Award winning digital design agency based in California</h1>
            <p className={'bannerText'}>
                is a beautiful and simple Webflow Portfolio Template for those creatives and digital studios that want
                to have a powerful yet simple website where they can showcase their work and services. Allora. is the
                perfect fit for your business.
            </p>
                <div className={'btnBlock'}>
                  <Button>Start a Project</Button>
                  <Button>We're Hiring</Button>
                </div>
           <div className={'bannerImage'}>
               <img src={'/images/bannerImg.png'} alt='banner'/>
           </div>
        </div>
    );
};

export default Banner;
