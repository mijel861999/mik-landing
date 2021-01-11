//REACT 
import React from 'react';

//Component 
import LogoPage from '../components/LogoPage';

//CSS
import '../pages/styles/Dev.css';

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
                <section className="skills-section">
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
                </section>
            </React.Fragment>
        );
    }
}

export default Dev;