import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋 , I am
                    <br /> <span className="info-name">ELBEHI Mohammed</span>.
                    <br /> A FullStack Web Developper.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/photo.jpg').default}
                    className="picture"
                    alt=""
                    />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About;
