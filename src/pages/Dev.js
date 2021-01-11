//REACT 
import React from 'react';

//Component 
import LogoPage from '../components/LogoPage';

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
            </React.Fragment>
        );
    }
}

export default Dev;