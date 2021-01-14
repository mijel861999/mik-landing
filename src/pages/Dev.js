//REACT 
import React from 'react';

//Component 
import LogoPage from '../components/LogoPage';

//CSS
import '../pages/styles/Dev.css';

import { HabilityContainer, SkillSection, FirstCard , SecondCard } from '../components/StyledComponents';

//Image
import Hacker from '../images/anonymous.png';
import Laptops from '../images/laptops.png';

class Dev extends React.Component{
    render(){
        return(
            <React.Fragment>
                <LogoPage
                image = {Hacker}
                image2 = {Laptops}/>
                <SkillSection>
                    <HabilityContainer>
                        <FirstCard>
                            <div className="skill">
                                <div className="skill-image-container">
                                    <img src="" alt=""/>
                                </div>
                                <h2>Backend Developmen</h2>
                                <p>
                                    Coming from Lima, Perú. we started
                                    our journeywe started our journey
                                    we started our journeywe started our 
                                    journey
                                </p>
                            </div>
                        </FirstCard>
                        <SecondCard>

                        </SecondCard>
                    </HabilityContainer>
                    <div className="presentation-section">
                        <h1>Hola, soy Miguel Castillo. Mucho gusto </h1>
                        <p>Coming from Lima, Perú. we started our journey as developer in 2018. We
                        hace special interest in front-end and mobile developmen, where We hacve worked 
                        most of our projects and potentialized our skills. A fan of learning and most of our 
                        projects and potentialized our skills. A fan of learning and most of our projects and
                        potentialized our skills. A fan of learning and</p>
                    </div>
                    <div className="skill-container">
                        
                    </div>
                </SkillSection>
            </React.Fragment>
        );
    }
}

export default Dev;