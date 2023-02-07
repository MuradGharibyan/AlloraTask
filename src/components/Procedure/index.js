import React from 'react';
import './style.scss'

const Procedure = () => {
    return (
        <div className={'procedure container'}>
            <div className={'procedureTop'}>
                <div className={'procedureLeft'}>
                    <div>
                        <p>procedure</p>
                        <div className={'procedureLine'}/>
                    </div>
                    <h2>The goal isn't to build a website but to build your business</h2>
                </div>
                <div className={'procedureRight'}>
                    <p className={'procedureRightText'}>
                        The online portfolio works in a similar way in a user-friendly design it collects items that
                        represent the best work you have done. This shows that you have a sense of responsibility and
                        take your work seriously.
                    </p>
                    <p>Know more about us</p>
                    <div className={'procedureRightLine'}/>
                </div>
            </div>
            <div className={'procedureSteps'}>
                <div className={'procedureStepsItem'}>
                    <div>
                        <p>01</p>
                        <h2>Goal Identification</h2>
                    </div>
                </div>
                <div className={'procedureStepsItem'}>
                    <div>
                        <p>02</p>
                        <h2>Scope Definition</h2>
                    </div>
                </div>
                <div className={'procedureStepsItem'}>
                    <div>
                        <p>03</p>
                        <h2>Sitemap and Wireframe Creation</h2>
                    </div>
                </div>
                <div className={'procedureStepsItem'}>
                    <div>
                        <p>04</p>
                        <h2>Content Creation</h2>
                    </div>
                </div>
                <div className={'procedureStepsItem'}>
                    <div>
                        <p>05</p>
                        <h2>Visual Elements</h2>
                    </div>
                </div>
                <div className={'procedureStepsItem'}>
                    <div>
                        <p>06</p>
                        <h2>Testing & Launch</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Procedure;
