import React from 'react';
import './style.scss'

const Questions = () => {
    return (
        <div className={'questions container'}>
            <div className={'questionsTop'}>
                <div className={'questionsTopLeft'}>
                    <div className={'questionsTopLeftHeader'}>
                        <p>Frequently Asked questions</p>
                        <div/>
                    </div>
                    <h2>Some questions you might have</h2>
                </div>
                <div className={'questionsTopRight'}>
                    <p>
                        Every project you have participated in is a unique journey from the initial spark of an idea to
                        the final signing, there are personal challenges, problems that need to be solved.
                    </p>
                    <p>Our Clients</p>
                    <div/>
                </div>
            </div>
            <div className={'questionsMain'}>
                <div className={'questionsMainHeader'}>
                    <div>
                        <p>General inQuiries</p>
                    </div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <p>Billing & Support</p>
                    </div>
                </div>
                <div className={'questionsBlock'}>
                    <div className={'questionsBlockItem'}>
                        <div className={'questionsBlockItemHeader'}>
                            <p>Can you design my Website?</p>
                            <div>
                                <img alt={''} src={'/images/vector.png'}/>
                            </div>
                        </div>
                        <p>
                            Include large and wonderful examples of your work, not just provide a few lines of neat text
                            about each project. Tell their story. Write a case study. Include examples of prototypes you
                            created. Describe the steps they took and how your role ultimately helped your customers
                            achieve their goals.
                        </p>
                    </div>
                    <div className={'questionsBlockItem'}>
                        <div className={'questionsBlockItemHeader'}>
                            <p>What kind of consulting do you offer?</p>
                            <div>
                                <img alt={''} src={'/images/vector.png'}/>
                            </div>
                        </div>
                        <p>
                            Include large and wonderful examples of your work, not just provide a few lines of neat text
                            about each project. Tell their story. Write a case study. Include examples of prototypes you
                            created. Describe the steps they took and how your role ultimately helped your customers
                            achieve their goals.
                        </p>
                    </div>
                    <div className={'questionsBlockItem'}>
                        <div className={'questionsBlockItemHeader'}>
                            <p>Where are you located?</p>
                            <div>
                                <img alt={''} src={'/images/vector.png'}/>
                            </div>
                        </div>
                        <p>
                            Include large and wonderful examples of your work, not just provide a few lines of neat text
                            about each project. Tell their story. Write a case study. Include examples of prototypes you
                            created. Describe the steps they took and how your role ultimately helped your customers
                            achieve their goals.
                        </p>
                    </div>
                    <div className={'questionsBlockItem'}>
                        <div className={'questionsBlockItemHeader'}>
                            <p>How do I set up a call?</p>
                            <div>
                                <img alt={''} src={'/images/vector.png'}/>
                            </div>
                        </div>
                        <p>
                            Include large and wonderful examples of your work, not just provide a few lines of neat text
                            about each project. Tell their story. Write a case study. Include examples of prototypes you
                            created. Describe the steps they took and how your role ultimately helped your customers
                            achieve their goals.
                        </p>
                    </div>
                    <div className={'questionsBlockItem'}>
                        <div className={'questionsBlockItemHeader'}>
                            <p>Can you manage my social networks?</p>
                            <div>
                                <img alt={''} src={'/images/vector.png'}/>
                            </div>
                        </div>
                        <p>
                            Include large and wonderful examples of your work, not just provide a few lines of neat text
                            about each project. Tell their story. Write a case study. Include examples of prototypes you
                            created. Describe the steps they took and how your role ultimately helped your customers
                            achieve their goals.
                        </p>
                    </div>
                    <div className={'questionsBlockItem'}>
                        <div className={'questionsBlockItemHeader'}>
                            <p>Can I get an estimated cost for your services?</p>
                            <div>
                                <img alt={''} src={'/images/vector.png'}/>
                            </div>
                        </div>
                        <p>
                            Include large and wonderful examples of your work, not just provide a few lines of neat text
                            about each project. Tell their story. Write a case study. Include examples of prototypes you
                            created. Describe the steps they took and how your role ultimately helped your customers
                            achieve their goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
