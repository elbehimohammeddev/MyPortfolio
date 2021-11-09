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
                    <br />
                    <br /> Engineer, with more than 4 years of experience in the Industrial sector, having made a retraining in FullStack JS Web Developer.
                    <br /> Highly motivated and responsible, in order to participate in new challenges,
                    <br /> I am sure that my experience will be useful. 
                    <br /> A great use.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/photo2.jpg').default}
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
