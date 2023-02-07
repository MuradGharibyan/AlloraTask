import React from 'react';
import './style.scss'

const Clients = () => {
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
                        <p className={'aboutLeftHeader'}>Our Clients</p>
                        <div className={'aboutLeftLine'}/>
                    </div>
                    <h2>Join world's best brands who trusted Allora</h2>
                    <p className={'aboutLeftText'}>Most creative projects involve collaboration. People want to know
                        what it’s going to be like working with you and how your skills and talents can help them.</p>
                    <p className={'aboutLeftValues'}>Start a project</p>
                    <div className={'aboutLeftUnderLine'}/>
                    <div className={'logoBlock'}>
                        <div className={'logoBlockItem'}>
                            <div>
                                <img src={'/images/logo1.png'} alt={''}/>
                            </div>
                            <div>
                                <img src={'/images/logo2.png'} alt={''}/>
                            </div>
                            <div>
                                <img src={'/images/logo3.png'} alt={''}/>
                            </div>
                        </div>
                        <div className={'logoBlockItem'}>
                            <div>
                                <img src={'/images/logo4.png'} alt={''}/>
                            </div>
                            <div>
                                <img src={'/images/logo6.png'} alt={''}/>
                            </div>
                            <div>
                                <img src={'/images/logo6.png'} alt={''}/>
                            </div>
                        </div>
                        <div className={'logoBlockItem'}>
                            <div>
                                <img src={'/images/logo7.png'} alt={''}/>
                            </div>
                            <div>
                                <img src={'/images/logo8.png'} alt={''}/>
                            </div>
                            <div>
                                <img src={'/images/logo9.png'} alt={''}/>
                            </div>
                        </div>
                    </div>
                    <p className={'aboutLeftText'}>
                        By telling these stories, they get a glimpse into your creative process and know what to expect if they hire you.
                    </p>
                </div>
                <div className={'aboutRight'}>
                    <div>
                        <img src={'/images/clientImg.png'} alt={''}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Clients;
