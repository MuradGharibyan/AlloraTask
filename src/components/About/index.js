import React from 'react';
import './style.scss'

const About = () => {
    return (
        <div className={'about container'}>
            <div className={'opacity'}>
                <div className={'opacityVerticalLine'}/>
                <div className={'opacityVerticalLine'}/>
                <div className={'opacityVerticalLine'}/>
            </div>
            <div className={'aboutContainer'}>
                <div className={'aboutLeft'}>
                    <div className={'logoLeftHeader'}>
                        <p className={'aboutLeftHeader'}>about medium</p>
                        <div className={'aboutLeftLine'}/>
                    </div>
                    <h2>Creating ideas & building brands that truly matter</h2>
                    <p className={'aboutLeftText'}>When building your own portfolio, don't feel that you need to include
                        anything you have ever created. Plan your best work and show the types of projects you want to
                        do
                        more.</p>
                    <p className={'aboutLeftValues'}>Our core values</p>
                    <div className={'aboutLeftUnderLine'}/>
                </div>
                <div className={'aboutRight'}>
                    <div>
                        <div className={'aboutUser1'}>
                            <p>"Allora fits our needs perfectly is the most valuable business resource we have ever
                                purchased we are so happy!"</p>
                            <div className={'userInfo'}>
                                <div>
                                    <img src={'/images/userImg.png'} alt={''}/>
                                </div>
                                <div>
                                    <p className={'userName'}>Lindsay Strotman</p>
                                    <p className={'userName'}>CEO of Edition</p>
                                </div>
                            </div>
                        </div>
                        <div className={'aboutUser2'}>
                            <p>"Allora has completely surpassed our expectations not able to tell you how happy I am
                                with your awesome work guys."</p>
                            <div className={'userInfo'}>
                                <div>
                                    <img src={'/images/user2.png'} alt={''}/>
                                </div>
                                <div>
                                    <p className={'userName'}>Robert Keynton</p>
                                    <p className={'userName'}>Designer at Webflow</p>
                                </div>
                            </div>
                        </div>
                        <img src={'/images/about1.png'} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
