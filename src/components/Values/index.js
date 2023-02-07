import React from 'react';
import './style.scss'

const Values = () => {
    return (
        <div className={'values container'}>
            <div className={'valuesLeft'}>
                <div>
                    <p className={'valuesLeftHeader'}>our core values</p>
                    <div className={'valuesLeftLine'}/>
                </div>
                <h2>How we're different</h2>
                <p className={'valuesLeftText'}>When creating a portfolio, be sure to: There is a strategy behind the
                    projects you showcase in your website design. Know what skills you want to communicate.</p>
                <p className={'valuesLeftValues'}>See FAQs</p>
                <div className={'valuesLeftUnderLine'}/>
            </div>
            <div className={'valuesMain'}/>
            <div className={'valuesDiagram'}>
                <div className={'valuesDiagramElem'}>
                    <div className={'valuesDiagramElemDot'}/>
                    <div className={'valuesDiagramElemDot'}/>
                    <div className={'valuesDiagramElemDot'}/>
                </div>
                <div className={'valuesDiagramElemBlock'}>
                    <div className={'valuesDiagramElem'}>
                        <h4 className={'h4'}>01 / Data driven</h4>
                        <p>Identify the types of customers you want to reach and create a plan accordingly.</p>
                    </div>
                    <div className={'valuesDiagramDot'}/>
                </div>
                <div className={'valuesDiagramElemBlock'}>
                    <div className={'valuesDiagramElem'}>
                        <h4 className={'h4'}>02 / Result oriented</h4>
                        <p>Show your personal style and aesthetics. Assemble an online portfolio to capture the essence of your identity.</p>
                    </div>
                    <div className={'valuesDiagramDot'}/>
                </div>
                <div className={'valuesDiagramElemBlock'}>
                    <div className={'valuesDiagramElem'}>
                        <h4 className={'h4'}>03 / Forward thinking</h4>
                        <p>Think of your homepage as a cohesive work body. Each project image, text block etc needs to be harmoniously combined.</p>
                    </div>
                    <div className={'valuesDiagramDot'}/>
                </div>
            </div>

        </div>
    );
};

export default Values;
