import React from 'react';
import './style.scss'

const Products = () => {
    return (
        <div className={'secondSection container'}>
            <div className={'secondLeft'}>
                <div className={'secondSectionItem'}>
                    <div>
                        <img src={'/images/add.png'} className={'addBlock'} alt={'addPhoto'}/>
                    </div>
                    <div className={'productItem'}>
                        <img src={'/images/item1.png'}  alt={'photo'}/>
                    </div>
                </div>
                <div className={'secondSectionItem'}>
                    <div>
                        <img src={'/images/add.png'} className={'addBlock'} alt={'addPhoto'}/>
                    </div>
                    <div className={'productItem'}>
                        <img src={'/images/item3.png'} alt={'photo'}/>
                    </div>
                </div>
                <div className={'secondSectionItem'}>
                    <div>
                        <img src={'/images/add.png'} className={'addBlock'} alt={'addPhoto'}/>
                    </div>
                    <div className={'productItem'}>
                        <img src={'/images/item5.png'} alt={'photo'}/>
                    </div>
                </div>
            </div>
            <div  className={'secondRight'}>
                <div className={'secondSectionItem'}>
                    <div>
                        <img src={'/images/add.png'} className={'addBlock'} alt={'addPhoto'}/>
                    </div>
                    <div className={'productItem'}>
                        <img src={'/images/item2.png'} alt={'photo'}/>
                    </div>
                </div>
                <div className={'secondSectionItem'}>
                    <div>
                        <img src={'/images/add.png'} className={'addBlock'} alt={'addPhoto'}/>
                    </div>
                    <div className={'productItem'}>
                        <img src={'/images/item4.png'} alt={'photo'}/>
                    </div>
                </div>
                <div className={'secondSectionItem'}>
                    <div>
                        <img src={'/images/add.png'} className={'addBlock'} alt={'addPhoto'}/>
                    </div>
                    <div className={'productItem'}>
                        <img src={'/images/item6.png'} alt={'photo'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;