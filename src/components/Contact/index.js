import React from 'react';
import './style.scss'

const Contact = () => {
    return (
        <section className={'contact container'}>
            <div className={'contactLeft'}>
                <div className={'contactLeftHeader'}>
                    <p className={'contactLeftHeader'}>Contact Us</p>
                    <div className={'contactLeftLine'}/>
                </div>
                <h2>Dedicated to serve our customers</h2>
                <p className={'contactLeftText'}>Branding isn’t only for big companies. Whether you’re a retail giant or
                    a
                    freelancer, branding shows your value and how you’re different from the competition.</p>
            </div>
            <div className={'contactMain'}>
                <div className={'contactNumbers'}>01</div>
                <div className={'contactMainLeft'}>
                    <p>Collaborate</p>
                    <p>If you're ready to start a project, fill up the form below and our team will be in touch to find
                        out more.</p>
                    <a href='mail:tohello@allora.com'>hello@allora.com</a>
                    <div className={'contactMainLine'}/>
                    <div className={'contactInputBlock'}>
                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='Email'/>
                        <input type='text' placeholder='Phone' />
                        <input type='text'
                               placeholder='Please indicate the nature of your inquiry...'
                               className='textarea'
                        />
                    </div>
                </div>
                <div className={'contactMainRight'}>
                    <div className={'contactNumbers'}>02</div>
                    <div className={'contactMainRightTop'}>
                        <p>Join our team</p>
                        <p>We're always looking for talented new members that push us to be bolder, dream bigger, and
                            perform better.</p>
                        <a href='mailto:team@allora.com'>team@allora.com</a>
                        <div className={'contactMainLine'}/>
                    </div>
                    <div>
                        <div className={'contactNumbers'}>03</div>
                    <div className={'contactMainRightBottom'}>
                        <h3>Just say hello</h3>
                        <p className={'textSmall'}>hello</p>
                        <p className={'textSmall'}>/həˈləʊ,hɛˈləʊ/</p>
                        <p className={'textSmall'}>Used as a greeting or to begin a phone conversation, so here are the
                            details to do so.</p>
                        <p className={'textSmall'}>1811 N South Third Street</p>
                        <p className={'textSmall'}>Suite 119A</p>
                        <p className={'textSmall'}>Monterrey, MX 54303</p>
                        <div className={'contactRightFooter'}>
                            <p className={'contactCall'}>Call us on</p>
                            <div className={'contactUnderline'}>
                                <a href="tel:+1123 456 7890" >+1123 456 7890</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
