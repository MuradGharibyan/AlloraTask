import React from 'react';
import './style.scss'

const Design = () => {
    return (
        <div className={'thirdSection container'}>
            <div className={'designTop'}>
                <div className={'designLeft'}>
                    <div>
                        <p className={'designText'}>beautiful creative solutions</p>
                        <div className={'designLine'}></div>
                    </div>
                    <div>
                        <p>Expect nothing less than perfect</p>
                    </div>
                </div>
                <div className={'designRight'}>
                    <p>Setting up your own portfolio site is an awesome method for communicating who you are as an
                        inventive, and to impart your abilities to the world. How about we investigate how to make a
                        free portfolio and all that you ought to remember for it.</p>
                    <p className={'designRightLink'}>How we work</p>
                    <div></div>
                </div>
            </div>
            <div className={'designItemBlock'}>
                <div className={'designItemTop'}>
                    <div className={'designItem'}>
                        <div>
                            <img src={'/images/design1.png'} alt={''}/>
                        </div>
                        <div>
                            <div className={'designItemInfo'}>
                                <p className={'designNumber'}>01</p>
                                <div className={'designItemLine'}></div>
                            </div>
                            <h2 className={'designItemHeader'}>Web Design</h2>
                            <p className={'designItemText'}>Why investment portfolio is important to your career Allora
                                can help you get your work noticed whether you are a graphic designer, product designer,
                                web developer, writer, illustrator.</p>
                        </div>
                    </div>
                    <div className={'designItem'}>
                        <div>
                            <img src={'/images/design2.png'} alt={''}/>
                        </div>
                        <div>
                            <div className={'designItemInfo'}>
                                <p className={'designNumber'}>02</p>
                                <div className={'designItemLine'}/>
                            </div>
                            <h2 className={'designItemHeader'}>Branding</h2>
                            <p className={'designItemText'}>The portfolio website provides visibility for your work showing it to the people you want to see unlike the static black and white of traditional resumes online portfolios bring your work to life.</p>
                        </div>
                    </div>
                    <div className={'designItem'}>
                        <div>
                            <img src={'/images/design3.png'} alt={''}/>
                        </div>
                        <div>
                            <div className={'designItemInfo'}>
                                <p className={'designNumber'}>03</p>
                                <div className={'designItemLine'}/>
                            </div>
                            <h2 className={'designItemHeader'}>UI/UX Design</h2>
                            <p className={'designItemText'}>In full color it makes your participation in creative output a positive and direct experience. Potential clients and employers can immediately see your achievements and your uniqueness.</p>
                        </div>
                    </div>
                </div>
                <div className={'designItemBottom'}>
                    <div className={'designItem'}>
                        <div>
                            <img src={'/images/design4.png'} alt={''}/>
                        </div>
                        <div>
                            <div className={'designItemInfo'}>
                                <p className={'designNumber'}>04</p>
                                <div className={'designItemLine'}/>
                            </div>
                            <h2 className={'designItemHeader'}>Creative Direction</h2>
                            <p className={'designItemText'}>The personal portfolio shows them your identity as a creative professional, the ideas behind your work and whether you are suitable for a particular job or project, put your work out in the world!</p>
                        </div>
                    </div>
                    <div className={'designItem'}>
                        <div>
                            <img src={'/images/design5.png'} alt={''}/>
                        </div>
                        <div>
                            <div className={'designItemInfo'}>
                                <p className={'designNumber'}>05</p>
                                <div className={'designItemLine'}/>
                            </div>
                            <h2 className={'designItemHeader'}>Motion Graphics</h2>
                            <p className={'designItemText'}>The portfolio conveys who you are most of us don’t come to a job interview with a bunch of unordered printouts you have to be ready get ready with Allora your best online alley.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;