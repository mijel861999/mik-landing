//React 
import React from 'react';

//Components
import LogoPage from '../components/LogoPage';

//CSS 
import '../pages/styles/Music.css'
import { SkillContainer, SkillSection, HabilityContainer,FirstCard, SecondCard, ButtonText ,PresentationContainer, Nothing} from '../components/StyledComponents'

//Images 
import Canguro from '../images/logo.png';
import Trompeta from '../images/trompeta.png';
import Vinilo from '../images/vinilo.png';

class Music extends React.Component{
    render(){
        return(
            <React.Fragment>
                <LogoPage
                image = {Canguro}
                image2 = {Trompeta}/>
                <SkillSection>
                    <HabilityContainer>
                        <FirstCard>
                        <SkillContainer>
                                <div className="skill-image-container">
                                    <img src={Vinilo} alt=""/>
                                </div>
                                <h2>Backend Developmen</h2>
                                <p>
                                    Coming from Lima, Perú. we started
                                    our journeywe started our journey
                                    we started our journeywe started our 
                                    journey
                                </p>
                                <ButtonText primary="true" card="true">
                                    Ver más
                                </ButtonText>
                            </SkillContainer>
                            <SkillContainer>
                                <div className="skill-image-container">
                                    <img src={Trompeta} alt=""/>
                                </div>
                                <h2>Backend Developmen</h2>
                                <p>
                                    Coming from Lima, Perú. we started
                                    our journeywe started our journey
                                    we started our journeywe started our 
                                    journey
                                </p>
                                <ButtonText primary="true" card="true">
                                    Ver más
                                </ButtonText>
                            </SkillContainer>
                            
                        </FirstCard>
                        <SecondCard>

                        </SecondCard>
                    </HabilityContainer>
                    <PresentationContainer>
                        <h1>Hola, soy Miguel Castillo. Mucho gusto </h1>
                        <p>Coming from Lima, Perú. we started our journey as developer in 2018. We
                        hace special interest in front-end and mobile developmen, where We hacve worked 
                        most of our projects and potentialized our skills. A fan of learning and most of our 
                        projects and potentialized our skills. A fan of learning and most of our projects and
                        potentialized our skills. A fan of learning and</p>
                    </PresentationContainer>
                    <Nothing>
                        
                    </Nothing>
                </SkillSection>
            </React.Fragment>
        );
    }
}

export default Music;